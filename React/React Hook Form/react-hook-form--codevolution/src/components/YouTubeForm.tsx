import { DevTool } from '@hookform/devtools';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

let renderCount = 0;

interface IFormData {
  username: string;
  email: string;
  age: number;
  dateOfBirth: string; // ISO format string
  social: {
    twitter: string;
  };
  phoneNumbers: [string, string];

  // Dynamic fields
  phNumbers: {
    number: string;
  }[];
}

export default function YouTubeForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    // NOTE: Set previously loaded data as a defaultValues (When Updating Data)
    // defaultValues: async () => {
    //   const user = await getUser('1'); // Load user data
    //   return {
    //     username: user?.username,
    //     email: user?.email,
    //     age: 18,
    //     dateOfBirth: new Date().toISOString().split('T')[0], // Default to Today's Date in YYYY-MM-DD format
    //     social: {
    //       twitter: '',
    //     },
    //     phoneNumbers: ['', ''],

    //     // Dynamic fields
    //     phNumbers: [{ number: '' }],
    //   };
    // },

    // NOTE: Initialize the form with default values (When Creating Data)
    defaultValues: {
      username: '',
      email: '',
      age: 18,
      dateOfBirth: new Date().toISOString().split('T')[0], // Default to Today's Date in YYYY-MM-DD format
      social: {
        twitter: '',
      },
      phoneNumbers: ['', ''],

      // Dynamic fields
      phNumbers: [{ number: '' }],
    },
  });

  // Lec: 15 => Dynamic Fields
  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // Convert dateOfBirth to full ISO format
    data.dateOfBirth = new Date(data.dateOfBirth).toISOString();

    console.log('Submitted Data =>', data);
  };

  console.log('errors =>', errors);

  renderCount++;

  return (
    <>
      <h1>YouTube Form ({renderCount / 2})</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="number"
            id="secondary-number"
            placeholder="017XXXXXXXX"
          />
        </div>

        {/* Lec: 15 => Dynamic Fields */}
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

        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} />
    </>
  );
}
