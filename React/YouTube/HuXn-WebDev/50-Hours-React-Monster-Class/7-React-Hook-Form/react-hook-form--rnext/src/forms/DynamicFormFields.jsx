import { DevTool } from '@hookform/devtools';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';
import NumberInput from '../components/NumberInput';

const DynamicFormFields = () => {
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
      socials: [],
    },
  });

  // IMPORTANT: For Dynamically Adding Fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socials',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Enter Your Basic Details">
          {/*  File Upload */}
          <Field label="Picture" error={errors && errors.picture}>
            <input
              {...register('picture', {
                required: 'Picture is required',
              })}
              type="file"
              name="picture"
              id="picture"
            />
          </Field>

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

          {/* IMPORTANT: আমার তৈরি করা Custom Component বা External কোন Component যেমন (React-Select, ReactDatePicker, AntD, MUI etc) এর সাথে কিভাবে React-Hook-Form কে ব্যবহার করবো: */}
          <Field label="Age" htmlFor="age" error={errors && errors.age}>
            <Controller
              control={control}
              name="age"
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    errors.age ? 'border-red-500 ' : 'border-gray-200'
                  }`}
                  {...field}
                />
              )}
              rules={{
                required: 'Age is required',
                min: {
                  value: 0,
                  message: 'Age must be between 0 to 100.',
                },
                max: {
                  value: 100,
                  message: 'Age must be between 0 to 100.',
                },
              }}
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
        </FieldSet>

        {/* IMPORTANT: Add Dynamic Fields */}
        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex items-center justify-between w-max"
              >
                <Field label="Social Name">
                  <input
                    {...register(`socials[${index}].name`)}
                    type="text"
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                    className="box-border w-full p-2 border rounded-md"
                  />
                </Field>
                <Field label="Social URL">
                  <input
                    {...register(`socials[${index}].url`)}
                    type="text"
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                    className="box-border w-full p-2 border rounded-md"
                  />
                </Field>
                <button
                  onClick={() => remove(index)}
                  className="px-1.5 py-1 -mb-10 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            );
          })}

          <button
            className="p-2 m-auto mt-8 text-white bg-gray-500 border rounded-lg text-md"
            onClick={() => append({ name: '', url: '' })}
          >
            Add A Social Handle
          </button>
        </FieldSet>

        {/* Submit Form */}
        <Field>
          <button
            type="submit"
            className="px-3 py-2 text-white bg-purple-500 border rounded-lg text-md"
          >
            Register
          </button>
        </Field>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default DynamicFormFields;
