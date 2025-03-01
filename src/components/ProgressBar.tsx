
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'accent' | 'green' | 'blue';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  className,
  showLabel = false,
  size = 'md',
  color = 'primary'
}) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-constitution-orange',
    green: 'bg-constitution-green',
    blue: 'bg-constitution-blue'
  };
  
  return (
    <div className={cn("w-full", className)}>
      <div className="bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "transition-all duration-500 ease-out rounded-full",
            sizeClasses[size],
            colorClasses[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {showLabel && (
        <div className="text-xs text-muted-foreground mt-1 font-medium">
          {percentage}% Complete
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
