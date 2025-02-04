// export {};

//* Enums (ChatGPT & DeepSeek) 👇
/**
 * Enums (enumerations) are a TypeScript feature to define a set of named constants, making code more:
 *
 * Readable: Use meaningful names instead of magic numbers/strings
 * Maintainable: Centralize value definitions
 * Type-safe: Restrict variables to predefined values
 */

// ----------------------------------------
// Basic Enum Syntax
// ----------------------------------------

//* Numeric Enum (Default)
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
console.log(Direction[2]); // "Left" (Reverse mapping)

//* String Enum
enum LogLevel {
  Error = 'Error',
  Warn = 'Warn',
  Info = 'Info',
}

console.log(LogLevel.Warn); // "Warn"

//* Heterogeneous Enum (Mixed types)
enum ResponseCode {
  Success = 200,
  NotFound = 404,
  Error = '500_INTERNAL_SERVER_ERROR',
}

// ----------------------------------------
// Enum Features
// ----------------------------------------

// Custom Initialization
enum FileSize {
  Small = 1,
  Medium, // 2
  Large = 10,
  XLarge, // 11
}

// Reverse Mapping
// Numeric enums automatically create value-to-key mappings:
enum Status {
  Active = 1,
}

console.log(Status[1]); // "Active"
console.log(Status.Active); // 1

//* ----------------------------------------
//* Best Practices
//* ----------------------------------------

/**
 * When to Use Enums:
 * - Use enums when a variable can have one of a few predefined values.
 * - Use string enums when the values are human-readable.
 * - Use numeric enums when the values are sequential.
 * - Use const enums for compile-time constants.
 */

/**
 * When to Avoid Enums:
 * - Need dynamic values (use union types instead)
 * - Strict bundle size constraints (const enums preferred)
 * - String-based values without reverse mapping needs
 * - Avoid using enums when the values are not closely related.
 */

/**
 * Recommendations for Enums:
 * - Use PascalCase for enum names.
 * - Use singular names for enums (e.g., Color instead of Colors).
 * - Use const enums for performance-critical code
 * - Prefer string enums for better debugging
 * - Use `as const` objects as enum alternatives:
 */

//* ----------------------------------------
//* Enum Alternatives
//* ----------------------------------------

// Union Types
type LogLevelUnion = 'Error' | 'Warn' | 'Info';

// Object Constants
const LogLevelConst = {
  Error: 'Error',
  Warn: 'Warn',
  Info: 'Info',
} as const;
