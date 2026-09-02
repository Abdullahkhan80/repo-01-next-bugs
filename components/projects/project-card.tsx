import Link from 'next/link';
import { Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ProjectStatusBadge } from '@/components/projects/project-status-badge';
import { Avatar } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:border-gray-300 transition-colors dark:hover:border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.id}`}
            className="hover:underline focus:outline-none"
          >
            <CardTitle className="text-base">{project.name}</CardTitle>
          </Link>
          <ProjectStatusBadge status={project.status} />
        </div>
        <CardDescription className="line-clamp-2 mt-1.5">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1.5 dark:text-gray-400">
            <span>Progress</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {project.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 dark:bg-gray-800">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Avatar name={project.lead} size="sm" />
            <span>{project.lead}</span>
          </div>
          <div>
            <span>Due {formatDate(project.dueDate)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
