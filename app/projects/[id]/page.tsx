import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById, getTasksByProject } from '@/lib/mock-data';
import { Header } from '@/components/layout/header';
import { ProjectStatusBadge } from '@/components/projects/project-status-badge';
import { Badge } from '@/components/ui/badge';
import { PRIORITY_LABELS } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TaskItem } from '@/components/tasks/task-item';
import { formatDate } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const tasks = getTasksByProject(id);

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title={project.name}
        description={`Project ID: ${project.id}`}
        action={
          <div className="flex gap-2">
            <Link href="/projects">
              <Button variant="outline" size="sm">Back to Projects</Button>
            </Link>
            <Button size="sm">Edit Details</Button>
          </div>
        }
      />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5 dark:text-gray-400">
                    <span>Overall Progress</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-800">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Associated Tasks ({tasks.length})
                </h3>
              </div>
              {tasks.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  No tasks assigned to this project yet.
                </div>
              ) : (
                <div className="space-y-2.5">
                  {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Metadata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Status</span>
                  <ProjectStatusBadge status={project.status} />
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Priority</span>
                  <Badge variant="warning">{PRIORITY_LABELS[project.priority]}</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500 dark:text-gray-400">Target Date</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {formatDate(project.dueDate)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 dark:text-gray-400">Lead</span>
                  <div className="flex items-center gap-2">
                    <Avatar name={project.lead} size="sm" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {project.lead}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
