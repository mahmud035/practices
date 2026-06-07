import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isAxiosError } from 'axios';
import { Note } from '../types/note.types';
import { useCreateNote, useUpdateNote } from '../hooks/useNotes';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  body: z.string().min(1, 'Body is required'),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  note?: Note;
  onClose: () => void;
}

export default function NoteForm({ note, onClose }: Props) {
  const { mutateAsync: create, isPending: isCreating } = useCreateNote();
  const { mutateAsync: update, isPending: isUpdating } = useUpdateNote();
  const isPending = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { title: note?.title ?? '', body: note?.body ?? '' },
  });

  useEffect(() => {
    reset({ title: note?.title ?? '', body: note?.body ?? '' });
  }, [note, reset]);

  const onSubmit = async (values: FormValues) => {
    try {
      if (note) {
        await update({ id: note._id, payload: values });
      } else {
        await create(values);
      }
      onClose();
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data?.message as string | undefined) ?? 'Something went wrong'
        : 'Something went wrong';
      setError('root', { message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          {...register('title')}
          type="text"
          placeholder="Note title"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
        <textarea
          {...register('body')}
          placeholder="Write your note…"
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
        />
        {errors.body && <p className="mt-1 text-xs text-red-600">{errors.body.message}</p>}
      </div>

      {errors.root && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{errors.root.message}</p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          {isPending ? 'Saving…' : note ? 'Save changes' : 'Create note'}
        </button>
      </div>
    </form>
  );
}
