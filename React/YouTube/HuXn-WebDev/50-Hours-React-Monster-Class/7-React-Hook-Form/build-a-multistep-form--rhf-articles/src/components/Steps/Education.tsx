import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAppState from '../../hooks/useAppState';
import { Button, Field, Form, Input } from '../Forms';

interface IEducationFormData {
  university: string;
  degree: string;
}

export default function Education() {
  const { state, setState } = useAppState();
  const { register, handleSubmit } = useForm<IEducationFormData>({
    defaultValues: state,
  });
  const navigate = useNavigate();

  const saveData = (data: IEducationFormData) => {
    setState({ ...state, ...data });
    navigate('/about');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Education</legend>
        <Field label="University">
          <Input {...register('university')} id="university" />
        </Field>
        <Field label="Degree">
          <Input {...register('degree')} id="degree" />
        </Field>
        <div className="button-row">
          <Button>
            <Link
              to="/"
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
