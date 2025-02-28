import styled from '@emotion/styled';
import { useFieldArray, useForm } from 'react-hook-form';
import { IRecipe } from '../types/recipe';
import Field from './Field';
import FieldSet from './FieldSet';

export default function RecipeForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRecipe>({
    defaultValues: {
      name: '',
      picture: '',
      description: '',
      amount: 0,
      ingredients: [{ name: '', amount: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'ingredients', // Dynamic field name
    control,
  });

  const onSubmit = (data: IRecipe) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>New Recipe</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label="Basics">
          <Field label="Name" error={errors.name}>
            <Input
              {...register('name', {
                required: {
                  value: true,
                  message: 'Recipe name is required',
                },
                minLength: {
                  value: 5,
                  message: 'Recipe name must be at least 5 characters long',
                },
              })}
              type="text"
              name="name"
              id="name"
            />
          </Field>
          <Field label="Description" error={errors.description}>
            <TextArea
              {...register('description', {
                required: {
                  value: true,
                  message: 'Recipe description is required',
                },
                maxLength: {
                  value: 100,
                  message: 'Description cannot be longer than 100 characters',
                },
              })}
              name="description"
              id="description"
              rows={10}
            />
          </Field>
          <Field label="Servings" error={errors.amount}>
            <Input
              {...register('amount', {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: 'Number of servings is required',
                },
                min: {
                  value: 1,
                  message: 'Amount to servings has to be at least 1',
                },
                max: {
                  value: 10,
                  message: 'Maximum number of servings is 10',
                },
              })}
              type="number"
              name="amount"
              id="amount"
            />
          </Field>
          <Field label="Picture" error={errors.picture}>
            <Input
              {...register('picture', {
                required: {
                  value: true,
                  message: 'Recipe picture is required',
                },
              })}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              name="picture"
              id="picture"
            />
          </Field>
        </FieldSet>

        {/* Dynamic Fields */}
        <FieldSet label="Ingredients">
          {fields.map((field, index) => {
            return (
              <Row key={field.id}>
                <Field label="Name">
                  <Input
                    type="text"
                    {...register(`ingredients.${index}.name`)}
                    id={`ingredients[${index}].name`}
                  />
                </Field>
                <Field label="Amount">
                  <Input
                    type="number"
                    {...register(`ingredients.${index}.amount`, {
                      valueAsNumber: true,
                    })}
                    defaultValue={field.amount}
                    id={`ingredients[${index}].name`}
                  />
                </Field>

                <Button
                  type="button"
                  onClick={() => remove(index)}
                  aria-label={`Remove ingredient ${index}`}
                >
                  &#8722;
                </Button>
              </Row>
            );
          })}

          {/* Add ingredient dynamically when button clicked */}
          <Button type="button" onClick={() => append({ name: '', amount: 0 })}>
            Add ingredient
          </Button>
        </FieldSet>

        <Field>
          <Button variant="primary">Save</Button>
        </Field>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 4px 11px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  font-size: 14px;
  cursor: pointer;
  padding: 0.6em 1.2em;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-right: auto;
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#3b82f6' : 'white'};
  color: ${({ variant }) => (variant === 'primary' ? 'white' : '#213547')};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > * {
    margin-right: 20px;
  }

  button {
    margin: 25px 0 0 8px;
  }
`;
