
import React, { createContext, useContext, useState, useEffect } from 'react';
import { quizzes } from '@/utils/quizData';

interface ScoreContextType {
  score: number;
  completion: number;
  addPoints: (points: number) => void;
  resetScore: () => void;
  updateCompletion: (categoryId: string, completed: boolean) => void;
}

const defaultContext: ScoreContextType = {
  score: 0,
  completion: 0,
  addPoints: () => {},
  resetScore: () => {},
  updateCompletion: () => {},
};

const ScoreContext = createContext<ScoreContextType>(defaultContext);

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [completion, setCompletion] = useState<number>(0);

  // Load score and completion from localStorage on component mount
  useEffect(() => {
    const savedScore = localStorage.getItem('userScore');
    const savedCompletedQuizzes = localStorage.getItem('completedQuizzes');
    
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
    
    if (savedCompletedQuizzes) {
      try {
        const parsedCompletedQuizzes = JSON.parse(savedCompletedQuizzes);
        setCompletedQuizzes(parsedCompletedQuizzes);
        
        // Calculate completion percentage
        calculateCompletion(parsedCompletedQuizzes);
      } catch (e) {
        console.error('Error parsing completed quizzes:', e);
        setCompletedQuizzes([]);
      }
    }
  }, []);

  // Calculate completion percentage
  const calculateCompletion = (completed: string[]) => {
    const totalQuizzes = quizzes.length;
    const completionPercentage = totalQuizzes > 0 
      ? Math.round((completed.length / totalQuizzes) * 100) 
      : 0;
    
    setCompletion(completionPercentage);
  };

  // Save score to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userScore', score.toString());
  }, [score]);

  // Save completed quizzes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
    calculateCompletion(completedQuizzes);
  }, [completedQuizzes]);

  const addPoints = (points: number) => {
    setScore(prevScore => prevScore + points);
  };

  const resetScore = () => {
    setScore(0);
    setCompletedQuizzes([]);
    setCompletion(0);
  };

  const updateCompletion = (categoryId: string, completed: boolean) => {
    if (completed) {
      if (!completedQuizzes.includes(categoryId)) {
        setCompletedQuizzes(prev => [...prev, categoryId]);
      }
    } else {
      setCompletedQuizzes(prev => prev.filter(id => id !== categoryId));
    }
  };

  return (
    <ScoreContext.Provider value={{ score, completion, addPoints, resetScore, updateCompletion }}>
      {children}
    </ScoreContext.Provider>
  );
};
