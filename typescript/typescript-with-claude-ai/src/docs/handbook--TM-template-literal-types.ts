//* The Basics: String Patterns as Types
// Template literal types let you create string types using template syntax:

// Basic template literal type
type Greeting = `Hello, ${string}`;

export const greeting1: Greeting = 'Hello, World'; // ✅
export const greeting2: Greeting = 'Hello, TypeScript'; // ✅
// const greeting3: Greeting = 'Hi, World'; // ❌ Error: must start with "Hello, "

// With specific unions
type Color = 'red' | 'green' | 'blue';
type CSSColor = `#${string}` | Color;

export const color1: CSSColor = 'red'; // ✅
export const color2: CSSColor = '#ff0000'; // ✅
// const color3: CSSColor = 'yellow'; // ❌ Error

// NOTE: Why this matters: You can create "precise string patterns" at the type level, catching errors before runtime.

//* String Union Combinations
// Template literals combine with unions to generate all combinations:

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiVersion = 'v1' | 'v2';

// Generates all combinations
export type ApiEndpoint = `/${ApiVersion}/${HttpMethod}`;
// Type: "/v1/GET" | "/v1/POST" | "/v1/PUT" | "/v1/DELETE" |
//       "/v2/GET" | "/v2/POST" | "/v2/PUT" | "/v2/DELETE"

// Real-world example
type EventName = 'click' | 'focus' | 'blur';
type ElementType = 'button' | 'input' | 'div';

export type DOMEvent = `${ElementType}:${EventName}`;
// Type: "button:click" | "button:focus" | "button:blur" |
//       "input:click" | "input:focus" | "input:blur" |
//       "div:click" | "div:focus" | "div:blur"

//* Intrinsic String Manipulation Types
// TypeScript provides built-in string transformers:

// Uppercase - convert to uppercase
export type Upper = Uppercase<'hello'>; // "HELLO"

// Lowercase - convert to lowercase
export type Lower = Lowercase<'HELLO'>; // "hello"

// Capitalize - capitalize first letter
export type Capitalized = Capitalize<'hello'>; // "Hello"

// Uncapitalized - lowercase first letter
export type Uncapitalized = Uncapitalize<'Hello'>; // "hello"

//* Real-world pattern (event handlers):

type EventName2 = 'click' | 'focus' | 'blur' | 'submit';

// Generate handler names
export type EventHandler = `on${Capitalize<EventName2>}`;
// Type: "onClick" | "onFocus" | "onBlur" | "onSubmit"

// Generate listener names
export type EventListener = `add${Capitalize<EventName2>}Listener`;
// Type: "addClickListener" | "addFocusListener" | "addBlurListener" | "addSubmitListener"

//* Practical MERN Patterns

//* 1. Type-Safe API Routes

type Resource = 'jobs' | 'users' | 'applications';
type Action = 'getAll' | 'getById' | 'create' | 'update' | 'delete';

// Generate route names
export type RouteName = `${Resource}${Capitalize<Action>}`;
// Type: "jobsGetAll" | "jobsGetById" | "jobsCreate" | ... (15 combinations)

// Generate API endpoints
export type ApiRoute = `/api/${Resource}` | `/api/${Resource}/:id`;
// Type: "/api/jobs" | "/api/jobs/:id" | "/api/users" | "/api/users/:id" | ...
