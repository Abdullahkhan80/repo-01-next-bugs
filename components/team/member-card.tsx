import { TeamMember } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="hover:border-gray-300 transition-colors dark:hover:border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <Avatar name={member.name} size="lg" />
          <Badge variant="primary">{member.department}</Badge>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {member.name}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">
            {member.role}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <span className="truncate max-w-[140px]">{member.email}</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {member.activeProjects} active {member.activeProjects === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
