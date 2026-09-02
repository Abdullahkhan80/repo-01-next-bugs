import { Card, CardContent } from './card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  change,
  trend = 'neutral',
  className,
}: StatCardProps) {
  const trendColor = {
    up: 'text-emerald-600 dark:text-emerald-400',
    down: 'text-rose-600 dark:text-rose-400',
    neutral: 'text-gray-500 dark:text-gray-400',
  }[trend];

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardContent className="p-5">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
          {title}
        </p>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {value}
          </p>
          {change && (
            <span className={cn('text-xs font-semibold', trendColor)}>
              {change}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
