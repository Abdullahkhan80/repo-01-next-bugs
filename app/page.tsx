import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { StatCard } from '@/components/ui/stat-card';
import { ProjectCard } from '@/components/projects/project-card';
import { TaskItem } from '@/components/tasks/task-item';
import { Button } from '@/components/ui/button';
import { getDashboardStats, getProjects, getTasks } from '@/lib/mock-data';

export default function DashboardOverviewPage() {
  const stats = getDashboardStats();
  const recentProjects = getProjects().slice(0, 3);
  const recentTasks = getTasks().slice(0, 4);

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="Executive Overview"
        description="High-level visibility into operational initiatives and team workload."
        action={
          <Link href="/projects">
            <Button size="sm">Explore All Projects</Button>
          </Link>
        }
      />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            description="Active & completed initiatives"
            trend="neutral"
          />
          <StatCard
            title="In Progress"
            value={stats.activeProjects}
            description="Currently active"
            change="+2 this month"
            trend="up"
          />
          <StatCard
            title="Pending Tasks"
            value={stats.pendingTasks}
            description="Awaiting completion"
            change="-4 resolved"
            trend="up"
          />
          <StatCard
            title="Completion Rate"
            value={`${stats.completionRate}%`}
            description="Initiatives finished"
            change="+12%"
            trend="up"
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Key Initiatives
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Strategic projects requiring ongoing attention
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Urgent & High Priority Tasks
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Action items due in the current milestone
              </p>
            </div>
            <Link
              href="/tasks"
              className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Manage tasks
            </Link>
          </div>
          <div className="space-y-2.5">
            {recentTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
