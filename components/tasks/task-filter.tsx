import { useState } from 'react';
import { Task, TaskStatus } from '@/lib/types';
import { TaskItem } from './task-item';

export interface TaskFilterProps {
  tasks: Task[];
}

export function TaskFilter({ tasks }: TaskFilterProps) {
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | 'all'>('all');

  const filteredTasks = selectedStatus === 'all'
    ? tasks
    : tasks.filter((task) => task.status === selectedStatus);

  const filters: { label: string; value: TaskStatus | 'all' }[] = [
    { label: 'All Tasks', value: 'all' },
    { label: 'To Do', value: 'todo' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Completed', value: 'done' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200 pb-3 dark:border-gray-800">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedStatus(filter.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedStatus === filter.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="space-y-2.5">
        {filteredTasks.length === 0 ? (
          <p className="text-sm text-gray-500 py-8 text-center dark:text-gray-400">
            No tasks match this filter.
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}
