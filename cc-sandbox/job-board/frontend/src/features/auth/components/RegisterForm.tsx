import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../../components/ui/Button';
import { Field, Select, TextInput } from '../../../components/ui/Field';
import { useAuth } from '../../../context/AuthContext';
import { getApiErrorMessage } from '../../../lib/api';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'At least 6 characters'),
  role: z.enum(['employer', 'jobseeker']),
});

type FormValues = z.infer<typeof schema>;

/**
 * Registration with explicit role selection. On success the account is created
 * (no auto-login — register does not set a cookie), then the user logs in.
 */
export function RegisterForm() {
  const { register: registerUser, login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: 'jobseeker' },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await registerUser(values);
      const user = await login({ email: values.email, password: values.password });
      navigate(user.role === 'employer' ? '/employer' : '/');
    } catch (error) {
      setError('root', { message: getApiErrorMessage(error, 'Registration failed') });
    }
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Name" error={errors.name?.message}>
        <TextInput autoComplete="name" {...register('name')} />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <TextInput type="email" autoComplete="email" {...register('email')} />
      </Field>
      <Field label="Password" error={errors.password?.message}>
        <TextInput type="password" autoComplete="new-password" {...register('password')} />
      </Field>
      <Field label="I am a…" error={errors.role?.message}>
        <Select {...register('role')}>
          <option value="jobseeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </Select>
      </Field>
      {errors.root && <p className="text-sm text-danger">{errors.root.message}</p>}
      <Button type="submit" isLoading={isSubmitting}>
        Create account
      </Button>
    </form>
  );
}
