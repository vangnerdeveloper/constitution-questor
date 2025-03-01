
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  progress?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  locked?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  description,
  icon,
  color,
  progress = 0,
  difficulty = 'easy',
  locked = false
}) => {
  const navigate = useNavigate();
  
  const difficultyLabel = {
    easy: 'Beginner',
    medium: 'Intermediate',
    hard: 'Advanced'
  };
  
  const handleClick = () => {
    if (!locked) {
      navigate(`/quiz/${id}`);
    }
  };
  
  return (
    <div 
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card p-4 transition-all duration-300",
        "touch-scale active:shadow-inner",
        locked ? "opacity-60" : "shadow-sm hover:shadow"
      )}
    >
      <div className="flex space-x-4 items-start">
        <div 
          className={cn(
            "flex-shrink-0 p-2 rounded-md",
            `bg-${color}/10 text-${color}`
          )}
        >
          {icon}
        </div>
        
        <div className="flex-1 space-y-1">
          <h3 className="font-display font-medium text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted inline-block">
              {difficultyLabel[difficulty]}
            </span>
            
            {locked ? (
              <span className="text-xs font-medium text-muted-foreground flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="ml-1">Locked</span>
              </span>
            ) : (
              <span className="text-xs font-medium text-muted-foreground">
                {progress}% Complete
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      {!locked && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
          <div 
            className={cn(
              "h-full transition-all duration-300",
              `bg-${color}`
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
