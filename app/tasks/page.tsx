import { Header } from '@/components/layout/header';
import { TaskFilterView } from '@/components/tasks/task-filter';
import { getTasks } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function TasksPage() {
  const tasks = getTasks();

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="Task Backlog"
        description="Track and triage operational action items across engineering teams."
        action={<Button size="sm">Create Task</Button>}
      />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <TaskFilterView tasks={tasks} />
      </main>
    </div>
  );
}
