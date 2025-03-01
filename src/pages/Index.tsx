
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/utils/quizData';
import { BookOpen, Trophy, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [animateItems, setAnimateItems] = useState(false);
  
  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setScore(120);
    }, 500);
    
    // Trigger animations after a slight delay
    const animationTimer = setTimeout(() => {
      setAnimateItems(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header score={score} />
      
      <main className="pt-20 px-4 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className={cn(
          "transition-all duration-700 transform",
          animateItems ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <div className="bg-gradient-to-br from-constitution-blue to-constitution-navy text-white rounded-2xl p-6 mt-4 mb-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full" />
            
            <h1 className="text-2xl font-display font-semibold mb-2 relative z-10">Constitutional Quest</h1>
            <p className="text-white/80 mb-4 max-w-md relative z-10">
              Embark on an educational journey through India's Constitution. Test your knowledge and earn points!
            </p>
            
            <div className="flex items-center gap-3 mt-6 relative z-10">
              <button 
                onClick={() => navigate('/articles')}
                className="bg-white/15 border border-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 touch-scale"
              >
                Explore Articles
              </button>
              
              <button
                onClick={() => navigate('/leaderboard')}
                className="bg-white text-constitution-blue px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-opacity-90 touch-scale"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className={cn(
          "grid grid-cols-2 gap-4 mb-8 transition-all duration-700 transform",
          animateItems ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          "animate-delay-200"
        )}>
          <div className="bg-card border rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="p-2 rounded-full bg-constitution-amber/10 text-constitution-amber">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Score</p>
              <h3 className="text-xl font-semibold">{score} points</h3>
            </div>
          </div>
          
          <div className="bg-card border rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="p-2 rounded-full bg-constitution-green/10 text-constitution-green">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completion</p>
              <h3 className="text-xl font-semibold">15%</h3>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-semibold">Categories</h2>
            
            <button 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/categories')}
            >
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.slice(0, 4).map((category, index) => (
              <div 
                key={category.id}
                className={cn(
                  "transition-all duration-700 transform",
                  animateItems ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Featured Article */}
        <section className={cn(
          "mt-10 transition-all duration-700 transform",
          animateItems ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          "animate-delay-500"
        )}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-semibold">Featured Article</h2>
            
            <button 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/articles')}
            >
              Browse Articles
            </button>
          </div>
          
          <div 
            onClick={() => navigate('/article/article-21')}
            className="bg-card border rounded-xl p-5 shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-constitution-blue/10 text-constitution-blue">
                <BookOpen size={20} />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Article 21 - Protection of Life and Personal Liberty</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  One of the most important articles that has been interpreted expansively by the Supreme Court to include various rights essential for a dignified life.
                </p>
                
                <div className="flex items-center mt-4">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted inline-block mr-3">
                    Fundamental Right
                  </span>
                  <span className="text-xs text-muted-foreground">
                    5 min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
