import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../components/ui/Button';
import { Field, Select, TextArea, TextInput } from '../../../components/ui/Field';
import { getApiErrorMessage } from '../../../lib/api';
import { useCreateJob } from '../useJobs';
import { JOB_TYPES } from '../jobs.types';

const schema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    company: z.string().min(1, 'Company is required'),
    location: z.string().min(1, 'Location is required'),
    type: z.enum(['Full-time', 'Part-time', 'Contract', 'Remote']),
    description: z.string().min(1, 'Description is required'),
    salaryMin: z.coerce.number().nonnegative('Must be ≥ 0'),
    salaryMax: z.coerce.number().nonnegative('Must be ≥ 0'),
    deadline: z.string().min(1, 'Deadline is required'),
  })
  .refine((d) => d.salaryMax >= d.salaryMin, {
    message: 'Max must be ≥ min',
    path: ['salaryMax'],
  })
  .refine((d) => new Date(d.deadline).getTime() > Date.now(), {
    message: 'Deadline must be in the future',
    path: ['deadline'],
  });

type FormValues = z.infer<typeof schema>;

export function PostJobForm({ onPosted }: { onPosted?: () => void }) {
  const createJob = useCreateJob();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: 'Full-time' },
  });

  const onSubmit = handleSubmit(async (values) => {
    await createJob.mutateAsync(values);
    reset({ type: 'Full-time' });
    onPosted?.();
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-border bg-surface-raised p-5">
      <h3 className="text-base font-semibold text-text">Post a new job</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Title" error={errors.title?.message}>
          <TextInput {...register('title')} placeholder="Senior React Engineer" />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <TextInput {...register('company')} placeholder="Acme Inc." />
        </Field>
        <Field label="Location" error={errors.location?.message}>
          <TextInput {...register('location')} placeholder="Berlin / Remote" />
        </Field>
        <Field label="Type" error={errors.type?.message}>
          <Select {...register('type')}>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Salary min" error={errors.salaryMin?.message}>
          <TextInput type="number" {...register('salaryMin')} placeholder="70000" />
        </Field>
        <Field label="Salary max" error={errors.salaryMax?.message}>
          <TextInput type="number" {...register('salaryMax')} placeholder="100000" />
        </Field>
      </div>

      <Field label="Deadline" error={errors.deadline?.message}>
        <TextInput type="date" {...register('deadline')} />
      </Field>

      <Field label="Description" error={errors.description?.message}>
        <TextArea {...register('description')} placeholder="Role, responsibilities, requirements…" />
      </Field>

      {createJob.isError && (
        <p className="text-sm text-danger">{getApiErrorMessage(createJob.error)}</p>
      )}

      <div>
        <Button type="submit" isLoading={createJob.isPending}>
          Post job
        </Button>
      </div>
    </form>
  );
}
