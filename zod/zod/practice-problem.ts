import { Request } from 'express';
import { z } from 'zod';

//* ---------------------------------------------
// 1. Write async getDocumentById(id: string) returning a stub IDocument | null — don't annotate the return type, let TS infer it. Then type a variable doc using Awaited<ReturnType<typeof getDocumentById>>.
//* ---------------------------------------------

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
let doc: ResolvedDoc;

//* ---------------------------------------------
// 2. Define createDocumentSchema with Zod: title (non-empty string), body (string), tags (string array), status (enum: "draft" | "published"). Derive type CreateDocumentInput = z.infer<typeof ...>.
//* ---------------------------------------------

// 1. Define the validation schema (Single Source of Truth)
export const createDocumentSchema = z.object({
  title: z.string().trim().min(1, { message: 'Title cannot be empty' }),
  body: z.string(),
  tags: z.array(z.string()),
  status: z.enum(['draft', 'published']),
});

// 2. Automatically derive the TypeScript compiler type
export type CreateDocumentInput = z.infer<typeof createDocumentSchema>;

function validateRequest(req: Request) {
  const body: unknown = req.body;

  // safeParse returns a discriminated union: { success: true; data: T } | { success: false; error: ZodError }
  const result = createDocumentSchema.safeParse(body);

  if (result.success) {
    // Proven: TypeScript narrows result to the success variant.
    // result.data is fully typed as CreateDocumentInput with NO optional chaining.
    console.log('Validation passed:', result.data.title);
    return `Success: Processed document "${result.data.title}"`;
  } else {
    // Proven: TypeScript narrows result to the failure variant.
    // result.error is guaranteed to exist with NO optional chaining.
    console.error('Validation failed:', result.error.format());
    return `Error: ${result.error.message}`;
  }
}

//* ---------------------------------------------
// Take const body: unknown = req.body, run safeParse, and narrow on the result — log result.error in the failure branch, use the typed result.data in the success branch with no optional chaining.
//* ---------------------------------------------

function validateAndProcessRequest(req: Request): void {
  const body: unknown = req.body;

  // 1. Execute safeParse to get a discriminated union result
  const result = createDocumentSchema.safeParse(body);

  // 2. Narrow the union using the 'success' boolean flag
  if (result.success) {
    // Narrowed: result.data is fully typed as CreateDocumentInput.
    // Proved: Direct property access without any optional chaining (?.) or type casting.
    console.log('Successfully validated document:', result.data.title);
    console.log('Document status is:', result.data.status);

    // Proceed with your safe business logic using result.data...
  } else {
    // Narrowed: result.error is guaranteed to be a ZodError object.
    // Proved: Direct property access to the error payload without optional chaining.
    console.error('Validation failed completely:', result.error.message);
    // ZodError uses `issues` (array of ZodIssue) to describe validation problems
    console.error('Structured validation issues:', result.error.issues);

    // Handle your error response pipeline using result.error...
  }
}

//* ---------------------------------------------
// 4. Add publishedAt to the schema, where the wire sends an ISO string but you want a Date in your app. Use z.coerce.date(). Then in a comment, state: what is z.input<typeof schema>["publishedAt"] vs z.output<...>["publishedAt"], and which one does z.infer give you?
//* ---------------------------------------------

const documentWithPublishSchema = createDocumentSchema.extend({
  publishedAt: z.coerce.date(),
});

/*
=========================================================
THE TRUTH ABOUT INPUT VS OUTPUT TYPES IN ZOD:
=========================================================
1. z.input<typeof createDocumentSchema>["publishedAt"]:
   - Type: unknown (specifically, any primitive type that can be passed to `new Date()`, like string, number, or Date).
   - This represents the UNTRUSTED raw data structure coming over the wire before validation/coercion.

2. z.output<typeof createDocumentSchema>["publishedAt"]:
   - Type: Date
   - This represents the CLEAN, transformed data structure inside your app after coercion succeeds.

3. Which one does z.infer give you?
   - z.infer is an alias for z.output. 
   - Therefore, z.infer gives you the parsed, clean Date object, NOT the raw wire string.
=========================================================
*/

//* ---------------------------------------------
// The fusion rep: write the type signature only of a generic helper validate<T extends z.ZodType>(schema: T, data: unknown): z.infer<T> — body can be a schema.parse(data) one-liner. Explain in one line why T extends z.ZodType is the constraint that makes z.infer<T> work.
//* ---------------------------------------------

export const validate = <T extends z.ZodType>(
  schema: T,
  data: unknown,
): z.infer<T> => schema.parse(data);

// Why the Constraint Works
// z.ZodType is the base class every Zod schema extends, and it carries the internal input/output type parameters. Constraining T extends z.ZodType guarantees T actually has those parameters, which is the information z.infer<T> reads to extract the output type. Without the constraint, T could be anything and z.infer<T> would have nothing to read.
