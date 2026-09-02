import { Project, Task, TeamMember, DashboardStats } from './types';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    name: 'Cloud Infrastructure Modernization',
    description: 'Migrating legacy container workloads to AWS ECS with Terraform automation.',
    status: 'in-progress',
    priority: 'high',
    lead: 'Alex Chen',
    dueDate: '2026-10-15',
    progress: 68,
    taskCount: 14,
  },
  {
    id: 'proj-2',
    name: 'Design System 2.0',
    description: 'Unified component library with accessibility compliance and dark mode support.',
    status: 'in-progress',
    priority: 'medium',
    lead: 'Elena Rostova',
    dueDate: '2026-11-01',
    progress: 45,
    taskCount: 22,
  },
  {
    id: 'proj-3',
    name: 'SOC2 Type II Compliance',
    description: 'Annual security compliance readiness audit, policy documentation, and pen tests.',
    status: 'review',
    priority: 'urgent',
    lead: 'Marcus Vance',
    dueDate: '2026-09-30',
    progress: 90,
    taskCount: 8,
  },
  {
    id: 'proj-4',
    name: 'Customer Billing Gateway',
    description: 'Stripe webhook pipeline optimization and subscription prorating logic overhaul.',
    status: 'completed',
    priority: 'high',
    lead: 'Sarah Jenkins',
    dueDate: '2026-08-20',
    progress: 100,
    taskCount: 18,
  },
  {
    id: 'proj-5',
    name: 'Telemetry & Observability',
    description: 'Deploying OpenTelemetry collectors and structured logging across microservices.',
    status: 'planning',
    priority: 'low',
    lead: 'Devon Miller',
    dueDate: '2026-12-10',
    progress: 15,
    taskCount: 10,
  },
];

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Provision staging VPC and subnets',
    projectId: 'proj-1',
    projectName: 'Cloud Infrastructure Modernization',
    status: 'done',
    priority: 'high',
    assignee: 'Alex Chen',
    dueDate: '2026-09-05',
  },
  {
    id: 'task-2',
    title: 'Configure automated DB backup snapshots',
    projectId: 'proj-1',
    projectName: 'Cloud Infrastructure Modernization',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Alex Chen',
    dueDate: '2026-09-12',
  },
  {
    id: 'task-3',
    title: 'Audit color contrast ratios for WCAG AA',
    projectId: 'proj-2',
    projectName: 'Design System 2.0',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Elena Rostova',
    dueDate: '2026-09-18',
  },
  {
    id: 'task-4',
    title: 'Finalize access control review report',
    projectId: 'proj-3',
    projectName: 'SOC2 Type II Compliance',
    status: 'todo',
    priority: 'urgent',
    assignee: 'Marcus Vance',
    dueDate: '2026-09-15',
  },
  {
    id: 'task-5',
    title: 'Verify Stripe invoice item recalculations',
    projectId: 'proj-4',
    projectName: 'Customer Billing Gateway',
    status: 'done',
    priority: 'high',
    assignee: 'Sarah Jenkins',
    dueDate: '2026-08-19',
  },
  {
    id: 'task-6',
    title: 'Draft OpenTelemetry deployment RFC',
    projectId: 'proj-5',
    projectName: 'Telemetry & Observability',
    status: 'todo',
    priority: 'low',
    assignee: 'Devon Miller',
    dueDate: '2026-10-01',
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Alex Chen',
    role: 'Principal DevOps Engineer',
    email: 'alex.chen@example.internal',
    department: 'Infrastructure',
    activeProjects: 2,
  },
  {
    id: 'team-2',
    name: 'Elena Rostova',
    role: 'Lead Product Designer',
    email: 'elena.rostova@example.internal',
    department: 'Design',
    activeProjects: 3,
  },
  {
    id: 'team-3',
    name: 'Marcus Vance',
    role: 'Security & Compliance Lead',
    email: 'marcus.vance@example.internal',
    department: 'Security',
    activeProjects: 1,
  },
  {
    id: 'team-4',
    name: 'Sarah Jenkins',
    role: 'Senior Backend Engineer',
    email: 'sarah.jenkins@example.internal',
    department: 'Platform Engineering',
    activeProjects: 2,
  },
  {
    id: 'team-5',
    name: 'Devon Miller',
    role: 'SRE Specialist',
    email: 'devon.miller@example.internal',
    department: 'Infrastructure',
    activeProjects: 1,
  },
];

export function getProjects(): Project[] {
  return mockProjects;
}

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((p) => p.id === id);
}

export function getTasks(): Task[] {
  return mockTasks;
}

export function getTasksByProject(projectId: string): Task[] {
  return mockTasks.filter((t) => t.projectId === projectId);
}

export function getTeamMembers(): TeamMember[] {
  return mockTeamMembers;
}

export function getDashboardStats(): DashboardStats {
  const totalProjects = mockProjects.length;
  const activeProjects = mockProjects.filter((p) => p.status === 'in-progress').length;
  const pendingTasks = mockTasks.filter((t) => t.status !== 'done').length;
  const completedProjects = mockProjects.filter((p) => p.status === 'completed').length;
  const completionRate = Math.round((completedProjects / totalProjects) * 100);

  return {
    totalProjects,
    activeProjects,
    pendingTasks,
    teamMembersCount: mockTeamMembers.length,
    completionRate,
  };
}
