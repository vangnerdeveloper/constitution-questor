
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import ProgressBar from '@/components/ProgressBar';
import FadeTransition from '@/components/FadeTransition';
import { quizzes, categories } from '@/utils/quizData';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const QuizPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  
  useEffect(() => {
    // Find the quiz for this category
    const foundQuiz = quizzes.find(q => q.categoryId === categoryId);
    const foundCategory = categories.find(c => c.id === categoryId);
    
    if (!foundQuiz || !foundCategory) {
      toast({
        title: "Quiz not found",
        description: "The requested quiz could not be found.",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
    
    setQuiz(foundQuiz);
    setCategory(foundCategory);
    // Reset the quiz state when loading a new quiz
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setCorrectAnswers(0);
  }, [categoryId, navigate]);
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
    }
    
    // Wait for a moment to let the user see the explanation
    setTimeout(() => {
      setShowQuestion(false);
      
      // Another timeout for the fade out animation
      setTimeout(() => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          setQuizCompleted(true);
        }
        
        setShowQuestion(true);
      }, 300);
    }, 2000);
  };
  
  const handleFinish = () => {
    // In a real app, we would save the score to a database
    toast({
      title: "Quiz completed!",
      description: `You earned ${score} points.`,
      variant: "default"
    });
    
    navigate('/');
  };
  
  if (!quiz || !category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-muted rounded-full mb-4"></div>
          <div className="h-4 bg-muted rounded w-32"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title={category.title} showBackButton score={score} />
      
      <main className="pt-20 px-4 max-w-3xl mx-auto">
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </p>
                <p className="text-sm font-medium">Score: {score}</p>
              </div>
              
              <ProgressBar 
                value={currentQuestionIndex + 1} 
                max={quiz.questions.length}
                color="blue"
              />
            </div>
            
            <FadeTransition show={showQuestion}>
              {quiz.questions && quiz.questions[currentQuestionIndex] && (
                <QuizCard 
                  key={quiz.questions[currentQuestionIndex].id}  
                  question={quiz.questions[currentQuestionIndex]} 
                  onAnswer={handleAnswer}
                />
              )}
            </FadeTransition>
          </>
        ) : (
          <div className="bg-card rounded-xl border shadow-sm p-6 mt-8 animate-scale-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-constitution-blue/10 flex items-center justify-center text-constitution-blue">
                <Award size={40} />
              </div>
            </div>
            
            <h2 className="text-2xl font-display font-semibold text-center mb-2">Quiz Completed!</h2>
            <p className="text-center text-muted-foreground mb-8">
              You've completed the {category.title} quiz.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h3 className="text-2xl font-semibold">{score}</h3>
                <p className="text-sm text-muted-foreground">Points Earned</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h3 className="text-2xl font-semibold">{correctAnswers}</h3>
                <p className="text-sm text-muted-foreground">Correct Answers</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <h3 className="text-2xl font-semibold">
                  {Math.round((correctAnswers / quiz.questions.length) * 100)}%
                </h3>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={handleFinish}
                className="bg-constitution-blue text-white px-6 py-3 rounded-lg font-medium touch-scale hover:bg-constitution-blue/90 transition-colors shadow-sm"
              >
                Back to Categories
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPage;
