export {};

//* -----------------------------------------------------
// Generics are a way to write code that can work with any type, while still maintaining type safety. They're like functions for types — you can define a generic type or function that takes a type parameter, and then use that parameter within the definition. The caller can specify the type when they use it, or let TypeScript infer it from the context.
//* -----------------------------------------------------

// Practice problems
// 1. Type your response envelope as a generic interface ApiResponse<T> with fields { statusCode: number; success: boolean; message: string; data: T }. Then write ok<T>(data: T): ApiResponse<T>.

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

function ok<T>(data: T): ApiResponse<T> {
  return { statusCode: 200, success: true, message: 'OK', data };
}

const res = ok({ id: '1', title: 'Doc' });

// 2. Write a generic paginate<T> that takes (items: T[], total: number) and returns an envelope whose data is { items: T[]; total: number; hasMore: boolean }. Reuse ApiResponse<T> — don't redeclare it.

interface PaginateData<T> {
  items: T[];
  total: number;
  hasMore: boolean;
}

function paginate<T>(
  items: T[],
  total: number,
  page: number,
  limit: number,
): ApiResponse<PaginateData<T>> {
  const hasMore = page * limit < total;

  return {
    statusCode: 200,
    success: true,
    message: 'OK',
    data: { items, total, hasMore },
  };
}

// 3. Write findByIdOrThrow<T extends { _id: string }> — signature only, body can be a stub that returns T. The point is the constraint: it must accept a Mongoose-doc-shaped T and let you read result._id.

function findByIdOrThrow<T extends { _id: string }>(arg: string): T {
  return {} as T; // Stub implementation
}

const doc = findByIdOrThrow('123');
// doc._id; // ✅ allowed — T is guaranteed to have _id

// 4. Write a generic with two type params and a default: cache<K extends string, V = unknown> — signature for a get(key: K): V | null.

interface Cache<K extends string, V = unknown> {
  get(key: K): V | null;
}

//* -----------------------------------------------------
// Utility types are pre-written generics that transform an existing type into a related one, so you declare a shape once and derive every variant from it.
//* -----------------------------------------------------

interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  role: 'owner' | 'agent' | 'customer';
  createdAt: Date;
}

// Practice problems
// 1. Derive UserResponse — IUser with password removed. Then derive UserCredentials — only email and password.

type UserResponse = Omit<IUser, 'password'>;

type UserCredentials = Pick<IUser, 'email' | 'password'>;

// 2. Derive UpdateUserPayload — a PATCH body where every field of IUser is optional except you must not allow updating _id or password through it. (Compose two utilities.)

type UpdateUserPayload = Partial<Omit<IUser, '_id' | 'password'>>;

// 3. Build RolePermissions — a Record mapping each role value to a string[] of permissions. Don't hand-write three keys; derive the key set from IUser["role"].

type RolePermissions = Record<IUser['role'], string[]>;

// 4. Take a defaultConfig object literal ({ retries: 3, timeoutMs: 5000 }), and type a function loadConfig(overrides: Partial<AppConfig>): AppConfig where AppConfig is the inferred type of defaultConfig. Use typeof.

const defaultConfig = { retries: 3, timeoutMs: 5000 } as const;

type AppConfig = typeof defaultConfig;

function loadConfig(overrides: Partial<AppConfig>): AppConfig {
  return { ...defaultConfig, ...overrides };
}

//* -----------------------------------------------------
// A discriminated union is a set of object shapes that share one common literal field — the discriminant — whose value tells you, unambiguously, which shape you're holding.
//* -----------------------------------------------------

// ✅ Each shape is exact; the tag selects it
type Message =
  | { kind: 'customer'; text: string }
  | { kind: 'ai'; text: string; confidence: number; sources: string[] }
  | { kind: 'agent'; text: string; agentId: string };

function render(msg: Message) {
  switch (msg.kind) {
    case 'customer':
      return msg.text;

    case 'ai':
      return `${msg.text} (${msg.sources.length} sources)`;

    case 'agent':
      return `${msg.agentId}: ${msg.text}`;

    default: {
      const _exhaustive: never = msg; // ← the trick
      return _exhaustive;
    }
  }
}

// The payoff: exhaustiveness via `never`

// How it works: if you've handled every variant, `msg` in `default` has narrowed to `never` (nothing left), and `never` is assignable to `never` — compiles fine. The day you add `{ kind: "system"; ... }` to `Message` and forget to handle it, `msg` in default is now `{ kind: "system" }`, which is not assignable to `never` — `tsc` fails right there.

// That's the whole prize: a new variant breaks the build until you handle it everywhere. Add a socket bid-event type in Project-2, and every switch that consumed bid events lights up red until you deal with the new one. Bugs caught at compile, not at 2 AM in production. This single pattern is why discriminated unions are the most-used modeling tool in both your apps.

// One trap to carry in: "the discriminant must be a literal type, and it must be present on every member." kind: string breaks narrowing (TS can't tell branches apart). A member missing the kind field breaks the union. Keep the tag uniform.

// Practice problems
// 1. Model an async UI state as a discriminated union RequestState<T> (yes, generic): idle (no data), loading (no data), success (carries data: T), error (carries message: string).

type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

// 2. Write renderState<T>(state: RequestState<T>): string with a switch on the tag, returning a sensible string per branch, including the never exhaustiveness default. Prove you can read data in success and message in error with no optional chaining.

function renderState<T>(state: RequestState<T>): string {
  switch (state.status) {
    case 'idle':
      return 'Status: Initialized and waiting.';

    case 'loading':
      return 'Status: Loading data, please wait...';

    case 'success':
      return `Status: Success! Data: ${String(state.data)}`;

    case 'error':
      return `Status: Error - ${state.message}`;

    default: {
      const _exhaustive: never = state;
      return _exhaustive;
    }
  }
}

// 3. Model Project-2's socket bid events: bid_accepted ({ amount: number; bidderId: string }), bid_rejected ({ reason: string }), auction_extended ({ newEndsAt: Date }). Call the discriminant type.

export type SocketBidEvent =
  | { type: 'bid_accepted'; amount: number; bidderId: string }
  | { type: 'bid_rejected'; reason: string }
  | { type: 'auction_extended'; newEndsAt: Date };

// Example Usage in a Socket Listener
function handleBidEvent(event: SocketBidEvent) {
  switch (event.type) {
    case 'bid_accepted':
      console.log(`Bid of $${event.amount} by ${event.bidderId} accepted.`);
      break;

    case 'bid_rejected':
      console.warn(`Bid rejected. Reason: ${event.reason}`);
      break;

    case 'auction_extended':
      console.log(`Auction extended until: ${event.newEndsAt.toISOString()}`);
      break;

    default: {
      const _exhaustive: never = event;
      throw new Error(`Unhandled bid event: ${JSON.stringify(_exhaustive)}`);
    }
  }
}

// 4. The test that matters: take your Rep 2 renderState switch, and mentally (in a comment) answer: if a teammate adds { status: "refetching"; data: T } to RequestState<T>, what exactly does the compiler do, and at which line? Then add the line of code that would force them to handle it if it's not already there.

// If a teammate adds { status: "refetching"; data: T } to RequestState<T>, the compiler will throw an error at the line `const _exhaustive: never = state;` in the `default` case of the `renderState` function. The error occurs because `state` can now be of type `{ status: "refetching"; data: T }`, which is not assignable to `never`. This forces the developer to handle the new "refetching" case in the switch statement, ensuring that all variants of `RequestState<T>` are accounted for.

//* -----------------------------------------------------
// Narrowing is how you move from a wide type to a narrower one that the compiler will trust — and at an untrusted boundary, a type guard is the only honest bridge from unknown to a real type.
//* -----------------------------------------------------

// 1. Write isNonEmptyString(x: unknown): x is string — true only if x is a string with length > 0. Then use it in an if and prove TS lets you call .trim() inside.

function isNonEmptyString(x: unknown): x is string {
  return typeof x === 'string' && x.length > 0;
}

const maybeString: unknown = ' Hello, World! ';

if (isNonEmptyString(maybeString)) {
  console.log(maybeString.trim());
} else {
  console.log('Not a non-empty string');
}

// 2. The catch block reality: write getErrorMessage(err: unknown): string. In modern TS, catch gives you unknown. Narrow it — return err.message if it's a real Error, a sensible fallback otherwise.

export function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    // Narrowed: TypeScript knows err is a real Error object
    return err.message;
  }

  // Fallback: Handles strings, objects, null or undefined thrown by legacy code
  return typeof err === 'string' ? err : 'An unknown error occurred';
}

// 3. Write isBidEvent(x: unknown): x is SocketBidEvent (reuse Drill 3's type) — verify it's a non-null object, has a type key, and that type is one of the three valid literals. Then narrow a JSON.parse result through it.

export function isBidEvent(x: unknown): x is SocketBidEvent {
  // 1. Verify it is a non-null object
  if (typeof x !== 'object' || x === null) return false;

  // 2. Safely cast to record to check fields, then verify 'type' exists as a string
  const candidate = x as Record<string, unknown>;
  if (typeof candidate.type !== 'string') return false;

  // 3. Verify the string matches one of the three valid literals
  return (
    candidate.type === 'bid_accepted' ||
    candidate.type === 'bid_rejected' ||
    candidate.type === 'auction_extended'
  );
}

// Narrowing a JSON Payload at the Boundary
export function handleRawSocketMessage(rawJson: string): void {
  try {
    // JSON.parse returns 'any', creating an unsafe boundary
    const parsed: unknown = JSON.parse(rawJson);

    if (isBidEvent(parsed)) {
      // Boundary secure: 'parsed' is perfectly narrowed to SocketBidEvent
      switch (parsed.type) {
        case 'bid_accepted':
          console.log(`Bid accepted for $${parsed.amount}`); // Type safe
          break;
        case 'bid_rejected':
          console.warn(`Bid rejected: ${parsed.reason}`); // Type safe
          break;
        case 'auction_extended':
          // Note: JSON dates arrive as strings, see next steps below
          console.log(`Extended: ${String(parsed.newEndsAt)}`);
          break;
      }
    } else {
      console.error('Received malformed socket message:', parsed);
    }
  } catch (err: unknown) {
    console.error('Failed to parse socket payload:', getErrorMessage(err));
  }
}

// 4. The contrast rep: given const raw: unknown = JSON.parse(socketMessage), write the two-line as version (the wrong one) and the guarded version (the right one) side by side in comments, and state in one line what specifically breaks with as that the guard catches.

// Wrong (as version):
// const event = raw as SocketBidEvent;
// console.log(event.type); // ❌ Unsafe: could be anything, no guarantees

// Right (guarded version):
// if (isBidEvent(raw)) {
//   console.log(raw.type); // ✅ Safe: narrowed to SocketBidEvent
// } else {
//   console.error('Invalid event structure:', raw);
// }

// The specific breakage with 'as' is that it allows you to treat 'raw' as a 'SocketBidEvent' without any runtime checks, which can lead to runtime errors if 'raw' does not actually conform to the expected structure. The guard catches this by verifying the shape of 'raw' before allowing access to its properties.

//* -----------------------------------------------------
// Every async function returns a Promise, and TS infers what it wraps — you almost never annotate the Promise yourself.

// One Zod schema is simultaneously a runtime validator and a compile-time type. You declare the shape once; runtime safety and static safety both fall out of it.
//* -----------------------------------------------------

// Practice problems
// 1. Write async getDocumentById(id: string) returning a stub IDocument | null — don't annotate the return type, let TS infer it. Then type a variable doc using Awaited<ReturnType<typeof getDocumentById>>.

// 1. Define the stub interface
interface IDocument {
  id: string;
  title: string;
  content: string;
}

// 2. Implement with inferred return type
export async function getDocumentById(id: string) {
  // Stub logic simulating a database lookup
  if (id === 'missing') return null;

  const stubDoc: IDocument = {
    id,
    title: 'TypeScript Blueprints',
    content: 'Deep-dive into types',
  };

  return stubDoc;
}

// 3. Extract the un-nested promise resolution type at the consumer layer
type ResolvedDoc = Awaited<ReturnType<typeof getDocumentById>>;

// 4. Declare the variable using the extracted type
let document: ResolvedDoc;
