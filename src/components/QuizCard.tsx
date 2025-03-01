
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  timeLimit?: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  onAnswer,
  timeLimit = 15
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isTimerActive, setIsTimerActive] = useState(true);
  
  // Timer effect
  useEffect(() => {
    if (!isTimerActive) return;
    
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    if (timeLeft === 0) {
      setIsRevealed(true);
      onAnswer(false);
      setIsTimerActive(false);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft, isTimerActive, onAnswer]);
  
  const handleOptionSelect = (index: number) => {
    if (isRevealed) return;
    
    setSelectedOption(index);
    setIsRevealed(true);
    setIsTimerActive(false);
    
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
  };
  
  const getOptionClass = (index: number) => {
    if (!isRevealed) {
      return cn(
        "border border-border bg-card p-4 rounded-lg transition-all",
        "hover:bg-muted/50 active:bg-muted cursor-pointer touch-scale"
      );
    }
    
    if (index === question.correctAnswer) {
      return "border border-constitution-green bg-constitution-green/10 p-4 rounded-lg";
    }
    
    if (index === selectedOption) {
      return "border border-constitution-red bg-constitution-red/10 p-4 rounded-lg";
    }
    
    return "border border-border bg-card opacity-60 p-4 rounded-lg";
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto bg-card rounded-xl shadow-sm border p-5 animate-scale-in">
      {/* Timer */}
      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className={cn(
            "h-full transition-all duration-1000 ease-linear",
            timeLeft < timeLimit * 0.3 ? "bg-constitution-red" : "bg-constitution-blue"
          )}
          style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
        />
      </div>
      
      <h3 className="text-lg font-medium mb-6 leading-snug text-balance">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleOptionSelect(index)}
          >
            <p className="text-base">{option}</p>
          </div>
        ))}
      </div>
      
      {isRevealed && (
        <div className="mt-6 p-4 bg-muted rounded-lg animate-fade-in">
          <p className="text-sm text-foreground/80">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
