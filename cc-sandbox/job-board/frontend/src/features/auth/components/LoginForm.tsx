import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../../components/ui/Button';
import { Field, TextInput } from '../../../components/ui/Field';
import { useAuth } from '../../../context/AuthContext';
import { getApiErrorMessage } from '../../../lib/api';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const user = await login(values);
      navigate(user.role === 'employer' ? '/employer' : '/');
    } catch (error) {
      setError('root', { message: getApiErrorMessage(error, 'Login failed') });
    }
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Email" error={errors.email?.message}>
        <TextInput type="email" autoComplete="email" {...register('email')} />
      </Field>
      <Field label="Password" error={errors.password?.message}>
        <TextInput type="password" autoComplete="current-password" {...register('password')} />
      </Field>
      {errors.root && <p className="text-sm text-danger">{errors.root.message}</p>}
      <Button type="submit" isLoading={isSubmitting}>
        Log in
      </Button>
    </form>
  );
}
