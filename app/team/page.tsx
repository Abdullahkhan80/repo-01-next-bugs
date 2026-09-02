import { Header } from '@/components/layout/header';
import { MemberCard } from '@/components/team/member-card';
import { getTeamMembers } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function TeamPage() {
  const members = getTeamMembers();

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="Team Directory"
        description="Active project owners, system architects, and team members."
        action={<Button size="sm">Invite Member</Button>}
      />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </main>
    </div>
  );
}
