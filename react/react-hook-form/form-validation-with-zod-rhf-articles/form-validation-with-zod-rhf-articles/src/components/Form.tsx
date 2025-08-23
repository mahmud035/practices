import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
  username: z
    .string()
    .min(4, 'Username must be at least 4 characters long')
    .max(20, 'Username must be at most 20 characters long')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Username must contain only letters, numbers and underscore (_)'
    ),
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
  isAdmin: z.boolean(),
  createdAt: z.string().min(1, 'Creation date is required'),
});

type TUserSchema = z.infer<typeof UserSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TUserSchema>({
    defaultValues: {
      username: '',
      email: '',
      isAdmin: true,
      createdAt: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    },
    resolver: zodResolver(UserSchema),
  });

  /**
   * Handles successful form submission
   * - Converts the 'dateOfBirth' to ISO format for consistency
   * - Logs the submitted data for further processing
   */
  const onSubmit = (data: TUserSchema) => {
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
          {...register('username')}
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
          {...register('email')}
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
          {...register('createdAt')}
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
