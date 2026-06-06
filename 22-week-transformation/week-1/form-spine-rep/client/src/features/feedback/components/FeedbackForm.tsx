import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  CreateFeedbackFormValues,
  CreateFeedbackInput,
  createFeedbackSchema,
} from '../../../../../shared/feedback.schema';
import { useCreateFeedback } from '../feedback.hooks';

export default function FeedbackForm() {
  const mutation = useCreateFeedback();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFeedbackFormValues, any, CreateFeedbackInput>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: 5,
      category: 'general',
      message: '',
    },
  });

  const onSubmit = (data: CreateFeedbackInput) => {
    mutation.mutate(data, { onSuccess: () => reset() });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'grid', gap: '12px', maxWidth: 440 }}
    >
      <div>
        <label>Name</label>
        <input type="text" {...register('name')} />
        {errors.name && (
          <p style={{ color: 'crimson', margin: 0 }}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register('email')} />
        {errors.email && (
          <p style={{ color: 'crimson', margin: 0 }}>{errors.email?.message}</p>
        )}
      </div>

      <div>
        <label>Rating (1-5)</label>
        <input type="number" {...register('rating')} />
        {errors.rating && (
          <p style={{ color: 'crimson', margin: 0 }}>{errors.rating.message}</p>
        )}
      </div>

      <div>
        <label>Category</label>
        <select {...register('category')}>
          <option value="general">General</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>
        {errors.category && (
          <p style={{ color: 'crimson', margin: 0 }}>
            {errors.category.message}
          </p>
        )}
      </div>

      <div>
        <label>Message</label>
        <textarea rows={4} {...register('message')}></textarea>
        {errors.message && (
          <p style={{ color: 'crimson', margin: 0 }}>
            {errors.message.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Submitting...' : 'Submit feedback'}
      </button>

      {mutation.isError && (
        <p style={{ color: 'crimson' }}>
          Something went wrong - please try again.
        </p>
      )}

      {mutation.isSuccess && (
        <p style={{ color: 'green' }}>Thanks - your feedback was submitted.</p>
      )}
    </form>
  );
}

/*
  Teaches — this is the centerpiece:

  useForm<CreateFeedbackFormValues, any, CreateFeedbackInput> is useForm<z.input, context, z.output> — the three-generic signature straight from the resolver docs. The form holds the input type; onSubmit receives the output type (rating already coerced to number). This is the z.input/z.output split you drilled, now load-bearing.

  rating registers on a number input with no valueAsNumber — Zod's z.coerce.number() does the conversion, so doubling it up would be redundant.

  Validation fires client-side via zodResolver(createFeedbackSchema) — the same schema the server uses. Bad input never leaves the browser.

  isPending / isError / isSuccess render all three states. Silence is a bug.
*/
