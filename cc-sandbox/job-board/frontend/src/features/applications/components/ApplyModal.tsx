import { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Field, TextArea } from '../../../components/ui/Field';
import { Modal } from '../../../components/ui/Modal';
import { getApiErrorMessage } from '../../../lib/api';
import { Job } from '../../jobs/jobs.types';
import { useApply } from '../useApplications';

interface ApplyModalProps {
  job: Job | null;
  onClose: () => void;
  onApplied: () => void;
}

/**
 * Apply form in a modal: cover letter (required) + optional PDF CV. Client-side
 * guards mirror the server (non-empty letter, PDF-only) but the server stays
 * the source of truth — its error message is surfaced on failure.
 */
export function ApplyModal({ job, onClose, onApplied }: ApplyModalProps) {
  const apply = useApply();
  const [coverLetter, setCoverLetter] = useState('');
  const [cv, setCv] = useState<File | undefined>();
  const [fileError, setFileError] = useState<string>();

  const close = () => {
    setCoverLetter('');
    setCv(undefined);
    setFileError(undefined);
    apply.reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    await apply.mutateAsync({ jobId: job._id, coverLetter, cv });
    close();
    onApplied();
  };

  const handleFile = (file?: File) => {
    if (file && file.type !== 'application/pdf') {
      setFileError('CV must be a PDF file');
      setCv(undefined);
      return;
    }
    setFileError(undefined);
    setCv(file);
  };

  return (
    <Modal isOpen={Boolean(job)} title={job ? `Apply: ${job.title}` : ''} onClose={close}>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <Field label="Cover letter">
          <TextArea
            required
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Why you're a great fit…"
          />
        </Field>

        <Field label="CV (PDF, optional)" error={fileError}>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="text-sm text-text-muted file:mr-3 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:py-1.5 file:text-sm"
          />
        </Field>

        {apply.isError && <p className="text-sm text-danger">{getApiErrorMessage(apply.error)}</p>}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button type="submit" isLoading={apply.isPending} disabled={!coverLetter.trim()}>
            Submit application
          </Button>
        </div>
      </form>
    </Modal>
  );
}
