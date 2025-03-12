
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScoreContextType {
  score: number;
  addPoints: (points: number) => void;
  resetScore: () => void;
}

const defaultContext: ScoreContextType = {
  score: 0,
  addPoints: () => {},
  resetScore: () => {},
};

const ScoreContext = createContext<ScoreContextType>(defaultContext);

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  // Load score from localStorage on component mount
  useEffect(() => {
    const savedScore = localStorage.getItem('userScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  // Save score to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userScore', score.toString());
  }, [score]);

  const addPoints = (points: number) => {
    setScore(prevScore => prevScore + points);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <ScoreContext.Provider value={{ score, addPoints, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
