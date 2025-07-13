import { useForm } from 'react-hook-form';

interface IFormData {
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string; // ISO format
}

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      username: '',
      email: '',
      isAdmin: true,
      createdAt: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    },
  });

  const onSubmit = (data: IFormData) => {
    data.createdAt = new Date(data.createdAt).toISOString();
    console.info('Form submitted =>', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-10 bg-white px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 w-full lg:w-3/6 text-gray-600 lg:mx-auto"
    >
      {/* Username */}
      <div className="flex flex-col mt-4">
        <label htmlFor="username">Username</label>
        <input
          {...register('username', {
            required: {
              value: true,
              message: 'Username is required',
            },
            minLength: {
              value: 5,
              message: 'Username should be at least 5 characters long',
            },
          })}
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          type="text"
          id="username"
          name="username"
          placeholder="John Doe"
        />

        {errors?.username && (
          <span className="block text-red-500 text-sm mt-1">
            {errors.username.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col mt-4">
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
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        />

        {errors?.email && (
          <span className="block text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* IsAdmin */}
      <div className="mt-4">
        <label htmlFor="isAdmin">IsAdmin</label>
        <input
          {...register('isAdmin')}
          className="ml-2"
          id="isAdmin"
          type="checkbox"
        />
      </div>

      {/* Creation Date */}
      <div className="flex flex-col mt-4">
        <label htmlFor="createdAt">Creation Date</label>
        <input
          {...register('createdAt', {
            required: {
              value: true,
              message: 'Creation Date is required', // Error message if creation date not provided
            },
          })}
          onChange={(e) => setValue('createdAt', e.target.value)} // Update form state manually
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          id="createdAt"
          type="date"
        />

        {errors?.createdAt && (
          <span className="block text-red-500 text-sm mt-1">
            {errors.createdAt.message}
          </span>
        )}
      </div>

      <button
        className="bg-purple-600 p-3 mt-12 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
