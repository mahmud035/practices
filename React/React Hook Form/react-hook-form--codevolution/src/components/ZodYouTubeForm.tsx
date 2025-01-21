import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FieldErrors, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

/**
 * IMPORTANT: Tips for Using Zod with React Hook Form:
 *
 * Always define validation in Zod schema and avoid duplicating rules in `register`.
 * Use `zodResolver` to let Zod handle validation automatically.
 * Use `refine` for custom business logic validations that can't be handled by built-in Zod methods.
 * For `number` fields, add `valueAsNumber` to the `register` function to convert strings to numbers.
 */

// Schema definition using Zod
const UserSchema = z.object({
  username: z.string().min(3, 'Username is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .refine((value) => value !== 'admin@example.com', {
      message: 'Enter a different email address',
    })
    .refine((value) => !value.endsWith('baddomain.com'), {
      message: 'This domain is not supported',
    }),
  age: z
    .number({ invalid_type_error: 'Age is required' })
    .min(1, 'Age must be a positive number'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  social: z.object({
    twitter: z.string().url('Invalid URL').min(1, 'Twitter URL is required'),
  }),
  phoneNumbers: z.array(
    z
      .string()
      .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, 'Invalid phone number')
      .min(1, 'Primary phone number is required')
  ),
  phNumbers: z
    .array(
      z.object({
        number: z
          .string()
          .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, 'Invalid phone number')
          .min(1, 'Phone number is required'),
      })
    )
    .min(1, 'At least one phone number is required'),
});

type TUserSchema = z.infer<typeof UserSchema>;

export default function ZodYouTubeForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors },
  } = useForm<TUserSchema>({
    // Default values for the form fields

    // NOTE: Set previously loaded data as a defaultValues (When Updating Data)
    // defaultValues: async () => {
    //   const user = await getUser('1'); // Load user data
    //   return {
    //     username: user?.username,
    //     email: user?.email,
    //     age: 18,
    //     dateOfBirth: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    //     social: {
    //       twitter: '',
    //     },
    //     phoneNumbers: ['', ''], // Default primary and secondary phone numbers
    //     phNumbers: [{ number: '' }], // One empty dynamic phone number field
    //   };
    // },

    // NOTE: Initialize the form with default values (When Creating Data)
    defaultValues: {
      username: '',
      email: '',
      age: 18,
      dateOfBirth: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
      social: {
        twitter: '',
      },
      phoneNumbers: ['', ''], // Default primary and secondary phone numbers
      phNumbers: [{ number: '' }], // One empty dynamic phone number field
    },
    mode: 'onChange', // 👈 Use carefully
    resolver: zodResolver(UserSchema),
  });

  // Lec: 15 => Dynamic fields for phone numbers using useFieldArray
  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

  /**
   * Handles successful form submission
   * - Converts the 'dateOfBirth' to ISO format for consistency
   * - Logs the submitted data for further processing
   */
  const onSubmit = (data: TUserSchema) => {
    try {
      data.dateOfBirth = new Date(data.dateOfBirth).toISOString();
      console.log('Zod Form submitted =>', data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Handles form submission errors
   * - Logs validation errors for debugging or error display
   */
  const onError = (errors: FieldErrors<TUserSchema>) => {
    console.log('Form errors =>', errors);
  };

  // Reset form after successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // console.log({ isDirty, isValid });
  // console.log({ isSubmitting });
  // console.log('errors =>', errors);

  return (
    <>
      <h1>Zod YouTube Form </h1>

      {/* Form structure */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Username */}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            {...register('username')}
            type="text"
            id="username"
            name="username"
            placeholder="John Doe"
          />

          {errors?.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />

          {errors?.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        {/* Age */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            {...register('age', {
              valueAsNumber: true, // Ensure the value is treated as a number
            })}
            type="number"
            id="age"
          />

          {errors?.age && <span className="error">{errors.age.message}</span>}
        </div>

        {/* Date Of Birth */}
        <div className="form-control">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            {...register('dateOfBirth')}
            onChange={(e) => setValue('dateOfBirth', e.target.value)} // Update form state manually
            type="date"
            id="dob"
          />

          {errors.dateOfBirth && (
            <span className="error">{errors.dateOfBirth.message}</span>
          )}
        </div>

        {/* Twitter */}
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            {...register('social.twitter')}
            type="url"
            id="twitter"
            placeholder="https://x.com/MHPAVEL19"
          />

          {errors?.social?.twitter && (
            <span className="error">{errors.social.twitter.message}</span>
          )}
        </div>

        {/* Primary Phone Number */}
        <div className="form-control">
          <label htmlFor="primary-number">Primary Phone Number</label>
          <input
            {...register('phoneNumbers.0')}
            type="text" // Use text to allow for +88 in the phone number
            id="primary-number"
            placeholder="017XXXXXXXX"
          />

          {errors?.phoneNumbers?.[0] && (
            <span className="error">{errors.phoneNumbers[0].message}</span>
          )}
        </div>

        {/* Secondary Phone Number */}
        <div className="form-control">
          <label htmlFor="secondary-number">Secondary Phone Number</label>
          <input
            {...register('phoneNumbers.1')}
            type="text"
            id="secondary-number"
            placeholder="017XXXXXXXX"
          />
        </div>

        {/* Lec: 15 => Dynamic Phone Numbers */}
        <>
          <label>List Of Phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              // Dynamic phone number field
              return (
                <div key={field.id} className="form-control">
                  <input
                    {...register(`phNumbers.${index}.number`)}
                    type="text"
                    placeholder="017XXXXXXXX"
                  />

                  {/* Display validation error for this dynamic field */}
                  {errors?.phNumbers?.[index]?.number && (
                    <span className="error">
                      {errors.phNumbers[index].number.message}
                    </span>
                  )}

                  {/* Remove button only visible for more than one field */}
                  {index > 0 && (
                    <button onClick={() => remove(index)} type="button">
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            {/* Button to dynamically add a new phone number field */}
            <button onClick={() => append({ number: '' })} type="button">
              Add phone number
            </button>
          </div>
        </>

        {/*
           Submit Button: The button is disabled if:
           1. The form hasn't been interacted with (`!isDirty`).
           2. The form contains validation errors (`!isValid`).
           3. When the form is submitting (isSubmitting).
         */}
        <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>

      {/* React Hook Form DevTool for debugging */}
      <DevTool control={control} />
    </>
  );
}
