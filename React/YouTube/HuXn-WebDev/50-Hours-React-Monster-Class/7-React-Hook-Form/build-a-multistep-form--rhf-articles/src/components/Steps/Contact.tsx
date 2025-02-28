import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAppState from '../../hooks/useAppState';
import { Button, Field, Form, Input } from '../Forms';

interface IContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Contact() {
  const { state, setState } = useAppState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactFormData>({
    defaultValues: state,
  });
  const password = watch('password');
  const navigate = useNavigate();

  const saveData = (data: IContactFormData) => {
    setState({ ...state, ...data });
    navigate('/education');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First name" error={errors?.firstName}>
          <Input
            {...register('firstName', {
              required: { value: true, message: 'First name is required' },
            })}
            type="text"
            id="first-name"
          />
        </Field>
        <Field label="Last name" error={errors?.lastName}>
          <Input
            {...register('lastName', {
              required: { value: true, message: 'Last name is required' },
            })}
            type="text"
            id="last-name"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register('email', {
              required: { value: true, message: 'Email is required' },
            })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Password" error={errors?.password}>
          <Input
            {...register('password', {
              required: { value: true, message: 'Password is required' },
            })}
            type="password"
            id="password"
          />
        </Field>
        <Field label="Confirm Password" error={errors?.confirmPassword}>
          <Input
            {...register('confirmPassword', {
              required: { value: true, message: 'Confirm the password' },
              validate: (fieldValue) => {
                if (fieldValue !== password) return 'Passwords do not match';
              },
            })}
            type="password"
            id="password-confirm"
          />
        </Field>
        <Button>Next {'>'}</Button>
      </fieldset>
    </Form>
  );
}
