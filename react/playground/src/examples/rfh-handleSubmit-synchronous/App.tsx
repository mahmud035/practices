import { useForm } from 'react-hook-form';
import './index.css';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  isDeveloper: boolean;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      isDeveloper: true,
    },
  });

  const onSubmit = (data: IFormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} placeholder="Mahmud" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} placeholder="Hasan" />
        </div>

        <div>
          <label htmlFor="isDeveloper">Is A MERN Stack Developer?</label>
          <input
            {...register('isDeveloper')}
            type="checkbox"
            value="yes"
            placeholder="Hasan"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="mahmud@gmail.com"
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
