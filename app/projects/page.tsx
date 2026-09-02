import { Header } from '@/components/layout/header';
import { ProjectList } from '@/components/projects/project-list';
import { getProjects } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  const projects = getProjects();
  const defaultFilter = 'all';

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="Projects & Workstreams"
        description="Comprehensive directory of engineering and operational initiatives."
        action={<Button size="sm">New Project</Button>}
      />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Showing {projects.length} total projects
          </p>
        </div>

        <ProjectList projects={projects} />
      </main>
    </div>
  );
}
