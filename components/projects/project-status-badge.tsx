import { ProjectStatus } from '@/lib/types';
import { PROJECT_STATUS_LABELS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

export interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const variantMap: Record<ProjectStatus, 'default' | 'success' | 'warning' | 'info'> = {
    planning: 'default',
    'in-progress': 'info',
    review: 'warning',
    completed: 'success',
  };

  return (
    <Badge variant={variantMap[status]}>
      {PROJECT_STATUS_LABELS[status]}
    </Badge>
  );
}
