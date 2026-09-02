import { Task, Priority } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { PRIORITY_LABELS, TASK_STATUS_LABELS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const priorityVariant: Record<Priority, 'default' | 'info' | 'warning' | 'danger'> = {
    low: 'default',
    medium: 'info',
    high: 'warning',
    urgent: 'danger',
  };

  const isDone = task.status === 'done';

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700">
      <div className="flex items-center gap-3">
        <div
          className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
            isDone
              ? 'border-emerald-500 bg-emerald-500 text-white'
              : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          {isDone && (
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <div>
          <h4
            className={`text-sm font-medium ${
              isDone
                ? 'line-through text-gray-400 dark:text-gray-500'
                : 'text-gray-900 dark:text-gray-100'
            }`}
          >
            {task.title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {task.projectName}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Badge variant={priorityVariant[task.priority]}>
          {PRIORITY_LABELS[task.priority]}
        </Badge>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Due {formatDate(task.dueDate)}
        </span>
        <div className="flex items-center gap-2">
          <Avatar name={task.assignee} size="sm" />
          <span className="text-xs font-medium text-gray-700 hidden sm:inline-block dark:text-gray-300">
            {task.assignee}
          </span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {TASK_STATUS_LABELS[task.status]}
        </span>
      </div>
    </div>
  );
}
