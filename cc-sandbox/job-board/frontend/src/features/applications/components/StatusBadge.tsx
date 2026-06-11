import { Badge } from '../../../components/ui/Badge';
import { ApplicationStatus } from '../applications.types';

const toneFor: Record<ApplicationStatus, 'warning' | 'primary' | 'danger'> = {
  pending: 'warning',
  reviewed: 'primary',
  rejected: 'danger',
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  return <Badge tone={toneFor[status]}>{status}</Badge>;
}
