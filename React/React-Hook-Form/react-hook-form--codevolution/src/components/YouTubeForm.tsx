import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

// Counter to track the number of renders
let renderCount = 0;

// Interface defining the structure of form data
interface IFormData {
  username: string;
  email: string;
  age: number;
  dateOfBirth: string; // User's date of birth in ISO format
  social: {
    twitter: string; // User's Twitter account URL
  };
  phoneNumbers: [string, string]; // Primary and secondary phone numbers

  // Dynamic fields for additional phone numbers
  phNumbers: {
    number: string; // Dynamic phone number field
  }[];
}

// Main component for the YouTube Form
export default function YouTubeForm() {
  // Initializing the form with react-hook-form
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors },
  } = useForm<IFormData>({
    // Default values for the form fields
    // NOTE: Set previously loaded data as a defaultValues (When Updating Data)
    // defaultValues: async () => {
    //   const user = await getUser('1'); // Load user data
    //   return {
    //     username: user?.username,
    //     email: user?.email,
    //     age: 18, // Default age
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
      age: 18, // Default age
      dateOfBirth: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
      social: {
        twitter: '',
      },
      phoneNumbers: ['', ''], // Default primary and secondary phone numbers
      phNumbers: [{ number: '' }], // One empty dynamic phone number field
    },
    mode: 'onChange', // 👈 Use carefully
  });

  // Lec: 15 => Dynamic fields for phone numbers using useFieldArray
  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control, // Control object from react-hook-form
  });

  /**
   * Handles successful form submission
   * - Converts the 'dateOfBirth' to ISO format for consistency
   * - Logs the submitted data for further processing
   */
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    try {
      data.dateOfBirth = new Date(data.dateOfBirth).toISOString();
      console.log('Form submitted =>', data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Handles form submission errors
   * - Logs validation errors for debugging or error display
   */
  const onError: SubmitErrorHandler<IFormData> = (errors) => {
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

  renderCount++; // Increment render count for debugging

  return (
    <>
      <h1>YouTube Form ({renderCount / 2})</h1>

      {/* Form structure */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Username */}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required', // Error message for empty username
              },
            })}
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
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required', // Error message if email is not provided
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email format', // Error message if email is not in correct format
              },

              //* Custom Validation (2 ways to do it)
              // way-1: Using a simple validate function for custom rules
              // validate: (fieldValue) => {
              //   if (fieldValue === 'admin@example.com')
              //     return 'Enter a different email address';
              // },

              // way-2: Using multiple custom validation rules
              validate: {
                notAdmin: (fieldValue) => {
                  // Custom validation to prevent "admin@example.com" email
                  if (fieldValue === 'admin@example.com')
                    return 'Enter a different email address'; // Error message for this custom validation
                },
                notBlackListed: (fieldValue) => {
                  // Custom validation to prevent blacklisted domains
                  if (fieldValue.endsWith('baddomain.com'))
                    return 'This domain is not supported'; // Error message for blacklisted domains
                },
              },
            })}
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
              required: {
                value: true,
                message: 'Age is required', // Error message if age is not provided
              },
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
            {...register('dateOfBirth', {
              required: {
                value: true,
                message: 'Date of birth is required', // Error message if date of birth is not provided
              },
            })}
            onChange={(e) => setValue('dateOfBirth', e.target.value)} // Update form state manually
            type="date"
            name=""
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
            {...register('social.twitter', {
              required: {
                value: true,
                message: 'Twitter account url is required', // Error message if Twitter URL is not provided
              },
            })}
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
            {...register('phoneNumbers.0', {
              required: {
                value: true,
                message: 'Primary phone number is required', // Error message if phone number is not provided
              },
              pattern: {
                value: /^(?:\+88|88)?01[3-9]\d{8}$/, // Regex to validate Bangladeshi phone numbers
                message: 'Enter valid phone number (e.g., 017XXXXXXXX)', // Error message if phone number does not match regex
              },
            })}
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
                    {...register(`phNumbers.${index}.number`, {
                      required: {
                        value: true,
                        message: 'Phone number is required', // Error message for empty field
                      },
                      pattern: {
                        value: /^(?:\+88|88)?01[3-9]\d{8}$/, // Regex for Bangladeshi phone numbers
                        message: 'Enter valid phone number (e.g., 017XXXXXXXX)', // Error for invalid phone number
                      },
                    })}
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
