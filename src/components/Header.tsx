
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  score?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Constitutional Quest", 
  showBackButton = false,
  score
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-4 py-3 border-b border-border flex items-center justify-between transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-full bg-muted/80 text-foreground touch-scale"
            aria-label="Go back"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <h1 className="font-display font-semibold text-lg tracking-tight">{title}</h1>
      </div>
      
      {score !== undefined && (
        <div className="bg-constitution-amber/10 text-constitution-amber px-3 py-1 rounded-full text-sm font-medium">
          Score: {score}
        </div>
      )}
    </header>
  );
};

export default Header;
