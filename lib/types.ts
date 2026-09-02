export type ProjectStatus = 'planning' | 'in-progress' | 'review' | 'completed';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: Priority;
  lead: string;
  dueDate: string;
  progress: number;
  taskCount: number;
}

export interface Task {
  id: string;
  title: string;
  projectId: string;
  projectName: string;
  status: TaskStatus;
  priority: Priority;
  assignee: string;
  dueDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  department: string;
  activeProjects: number;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  pendingTasks: number;
  teamMembersCount: number;
  completionRate: number;
}
