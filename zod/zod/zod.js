import { z } from 'zod';

//* 1. Creating Schemas
// Schemas in Zod define the structure and constraints of the data.

{
  // Primitive Types

  // String schema
  const stringSchema = z.string();

  // Number schema
  const numberSchema = z.number();

  // Boolean schema
  const booleanSchema = z.boolean();

  // Validating Data
  const result = stringSchema.safeParse('Hello World');
  // console.log(result); // { success: true, data: 'Hello World' }

  const invalid = numberSchema.safeParse('Not a number');
  // console.log(invalid.error.errors?.[0]?.message);
  // Expected number, received string
}

//* 2. Schema Methods
// Zod offers methods to add constraints and refine validation.
{
  // Adding Constraints
  {
    const positiveNumber = z.number().positive(); // Must be greater than 0
    const stringWithMinLength = z.string().min(3); // Minimum length of 3 characters

    const result = positiveNumber.safeParse(10);
    // console.log(result); // { success: true, data: 10 }

    const invalid = stringWithMinLength.safeParse(-5);
    // console.log(invalid); // { success: false, error: [...] }
  }

  // Custom Refinements
  {
    const customSchema = z.number().refine((val) => val % 2 === 0, {
      message: 'Number must be even',
    });

    const result = customSchema.safeParse(4);
    // console.log(result); // { success: true, data: 4 }

    const invalid = customSchema.safeParse(3);
    // console.log(invalid); /{ success: false, error: [...] }
  }
}

//* 3. Object and Nested Schemas

// Defining an Object Schema
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18, 'Must be at least 18 years old'),
});

userSchema.safeParse({
  name: 'John',
  email: 'john@example.com',
  age: 25,
});

// { success: true, data: { name: 'John', email: '...', age: 25 } }

// Nested Objects
const jobSchema = z.object({
  title: z.string(),
  company: z.string(),
  salary: z.number().positive(),
  details: z.object({
    location: z.string(),
    remote: z.boolean(),
  }),
});

jobSchema.safeParse({
  title: 'Software Engineer',
  company: 'TechCorp',
  salary: 60000,
  details: {
    location: 'San Francisco',
    remote: true,
  },
});

// { success: true, data: {...} }

//* 4. Array and Enums

// Array of Values
const tagSchema = z.array(z.string());
tagSchema.safeParse(['remote', 'full-time']); // { success: true, data: [...] }

// Enums
const jobTypeSchema = z.enum(['full-time', 'part-time', 'contract']);
jobTypeSchema.safeParse('full-time'); // { success: true, data: 'full-time' }
jobSchema.safeParse('intern'); // { success: false, error: [...] }

//* 5. Combining Schemas

// Union Types
// Validate if the data matches any one of multiple schemas.
const stringOrNumberSchema = z.union([z.string(), z.number()]);
stringOrNumberSchema.safeParse(42); // { success: true, data: 42 }

// Intersection
// Combine schemas where both conditions must be true.
const baseSchema = z.object({ id: z.string() });
const detailsSchema = z.object({ description: z.string() });
const combinedSchema = z.intersection(baseSchema, detailsSchema);

combinedSchema.safeParse({ id: '123' }, { description: 'A job description' });

//* 6. Default Values and Optional Fields

// Default Values
{
  const schema = z.object({
    salary: z.number().default(50000),
  });

  schema.parse({}); // { salary: 50000 }
}

// Optional Fields
{
  const schema = z.object({
    name: z.string(),
    location: z.string().optional(),
  });

  schema.safeParse({ name: 'Job Title' }); // { success: true, data: { name: 'Job Title' } }
}

//* Error Handling
// Using `.safeParse()`
// Returns a success object or an error object.

const handleZodErrors = (error) => {
  if (!error || !error.errors) {
    throw new Error('Invalid ZodError object provided');
  }

  return error.errors.map((errorObj) => ({
    path: errorObj.path.join(''),
    message: errorObj.message,
  }));
};

const result = userSchema.safeParse({ name: 'John' });

if (!result.success) {
  const errorMsg = handleZodErrors(result.error);
  // console.log(errorMsg);

  /** Output:
   [
    { path: 'email', message: 'Required' },
    { path: 'age', message: 'Required' }
   ] 
   
  */
}

//* 8. Transforming Data
// You can transform input data while validating it.
{
  const transformSchema = z.string().transform((val) => val.toUpperCase());
  const result2 = transformSchema.parse('hello');
  // console.log(result2); // "HELLO"
}
