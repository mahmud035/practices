import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    //* Dummy User Credential
    const user = {
      email: 'mhpcse@gmail.com',
      password: 'Password@',
    };
    const found = data.email === user.email && data.password === user.password;

    if (found) {
      return toast.success('Logged in successfully!');
    } else {
      return toast.error("User email or password didn't matched!!");
    }
  };

  return (
    <div className="mx-auto max-w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" htmlFor="email" error={errors && errors.email}>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please provide valid email address.',
                },
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? 'border-red-500 ' : 'border-gray-200'
              }`}
            />
          </Field>

          <Field
            label="Password"
            htmlFor="password"
            error={errors && errors.password}
          >
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
                  message:
                    'Your password must be at least 8 characters including one uppercase, one lowercase and one special character.',
                },
                maxLength: {
                  value: 20,
                  message: 'Password can be maximum 20 characters',
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? 'border-red-500 ' : 'border-gray-200'
              }`}
            />
          </Field>

          <Field>
            <button
              type="submit"
              className="px-3 py-2 text-white bg-purple-500 border rounded-lg text-md"
            >
              Login
            </button>
          </Field>
        </FieldSet>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default LoginForm;
