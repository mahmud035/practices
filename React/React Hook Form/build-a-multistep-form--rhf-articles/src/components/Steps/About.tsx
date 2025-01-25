import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAppState from '../../hooks/useAppState';
import { Button, Field, Form, Input } from '../Forms';

interface IAboutFormData {
  about: string;
}

export default function About() {
  const { state, setState } = useAppState();
  const { register, handleSubmit } = useForm<IAboutFormData>({
    defaultValues: state,
  });
  const navigate = useNavigate();

  const saveData = (data: IAboutFormData) => {
    setState({ ...state, ...data });
    navigate('/confirm');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>About</legend>
        <Field label="About me">
          <Input {...register('about')} id="about" className="form-control" />
        </Field>
        <div className="button-row">
          <Button>
            <Link
              to="/education"
              className="link-underline link-underline-opacity-0 text-white"
            >
              {'<'} Previous
            </Link>
          </Button>
          <Button>Next {'>'}</Button>
        </div>
      </fieldset>
    </Form>
  );
}
