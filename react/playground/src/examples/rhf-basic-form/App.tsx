import { useForm } from 'react-hook-form';

type FormValues = { email: string };

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <div>
      <h1>RHF Basic Form (.tsx)</h1>
      <form onSubmit={handleSubmit((data) => alert(data.email))}>
        <input {...register('email')} placeholder="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
