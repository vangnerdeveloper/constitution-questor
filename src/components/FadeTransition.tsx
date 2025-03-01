
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeTransitionProps {
  show: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
  delay?: number;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  show,
  children,
  duration = 300,
  className = '',
  delay = 0
}) => {
  const [render, setRender] = useState(show);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (show) {
      setRender(true);
    } else {
      timeout = setTimeout(() => {
        setRender(false);
      }, duration);
    }
    
    return () => clearTimeout(timeout);
  }, [show, duration]);
  
  if (!render) return null;
  
  return (
    <div
      className={cn(
        'transition-opacity duration-300 ease-in-out',
        {
          'opacity-0': !show,
          'opacity-100': show
        },
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default FadeTransition;
