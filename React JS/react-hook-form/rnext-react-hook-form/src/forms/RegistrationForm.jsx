import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fullName: '',
      age: 0,
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Enter Your Details">
          <Field
            label="Full Name"
            htmlFor="fullName"
            error={errors && errors.fullName}
          >
            <input
              {...register('fullName', {
                required: 'Full Name is required',
              })}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter full name"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fullName ? 'border-red-500 ' : 'border-gray-200'
              }`}
            />
          </Field>

          <Field label="Age" htmlFor="age" error={errors && errors.age}>
            <input
              {...register('age', {
                required: 'Age is required',
                min: {
                  value: 0,
                  message: 'Age must be between 0 to 100.',
                },
                max: {
                  value: 100,
                  message: 'Age must be between 0 to 100.',
                },
              })}
              type="number"
              name="age"
              id="age"
              placeholder="Enter age"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? 'border-red-500 ' : 'border-gray-200'
              }`}
            />
          </Field>

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
              Register
            </button>
          </Field>
        </FieldSet>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default RegistrationForm;
