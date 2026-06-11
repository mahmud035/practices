import { Field, Select, TextInput } from '../../../components/ui/Field';
import { JobFilters as Filters, JOB_TYPES, JobType } from '../jobs.types';

interface JobFiltersProps {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
}

/**
 * Browse filter bar. Every change resets to page 1 (handled by the parent via
 * onChange) so results stay consistent with the active filters.
 */
export function JobFilters({ filters, onChange }: JobFiltersProps) {
  return (
    <div className="grid gap-3 rounded-lg border border-border bg-surface-raised p-4 sm:grid-cols-3">
      <Field label="Keyword">
        <TextInput
          placeholder="Title or company"
          value={filters.keyword ?? ''}
          onChange={(e) => onChange({ keyword: e.target.value || undefined })}
        />
      </Field>
      <Field label="Location">
        <TextInput
          placeholder="e.g. Berlin"
          value={filters.location ?? ''}
          onChange={(e) => onChange({ location: e.target.value || undefined })}
        />
      </Field>
      <Field label="Type">
        <Select
          value={filters.type ?? ''}
          onChange={(e) => onChange({ type: (e.target.value || undefined) as JobType | undefined })}
        >
          <option value="">All types</option>
          {JOB_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </Field>
    </div>
  );
}
