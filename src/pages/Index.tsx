import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { categories, articles } from '@/utils/quizData';
import { BookOpen, Trophy, BarChart3, Clock, Gavel } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScore } from '@/contexts/ScoreContext';

const Index = () => {
  const navigate = useNavigate();
  const { score, completion } = useScore();
  const [animateItems, setAnimateItems] = useState(false);
  const [featuredArticle, setFeaturedArticle] = useState(articles[0]);
  
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimateItems(true);
    }, 100);
    
    const randomIndex = Math.floor(Math.random() * articles.length);
    setFeaturedArticle(articles[randomIndex]);
    
    return () => {
      clearTimeout(animationTimer);
    };
  }, []);
  
  const categoriesWithRenderedIcons = categories.slice(0, 4).map(category => ({
    ...category,
    icon: React.createElement(category.icon)
  }));
  
  return (
    <div className="min-h-screen bg-background pb-24">
      <BackgroundAnimation />
      <Header score={score} />
      
      <main className="pt-20 px-4 max-w-4xl mx-auto">
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
                onClick={() => navigate('/article/' + featuredArticle.id)}
                className="bg-white/15 border border-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 touch-scale"
              >
                Explore Articles
              </button>
              
              <button
                onClick={() => navigate('/quiz/fundamental-rights')}
                className="bg-white text-constitution-blue px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-opacity-90 touch-scale"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </section>
        
        <section className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 transition-all duration-700 transform",
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
              <h3 className="text-xl font-semibold">{completion}%</h3>
            </div>
          </div>
        </section>
        
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
            {categoriesWithRenderedIcons.map((category, index) => (
              <div 
                key={category.id}
                className={cn(
                  "transition-all duration-700 transform",
                  animateItems ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <CategoryCard 
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  color={category.color}
                  difficulty={category.difficulty}
                  locked={category.locked}
                  progress={category.progress}
                />
              </div>
            ))}
          </div>
        </section>
        
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
            onClick={() => navigate('/article/' + featuredArticle.id)}
            className="bg-card border rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-constitution-blue/10 text-constitution-blue">
                <BookOpen size={20} />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">{featuredArticle.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {featuredArticle.content.split('\n\n')[0]}
                </p>
                
                <div className="flex flex-wrap items-center mt-4 gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted inline-block">
                    {featuredArticle.category.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock size={12} className="mr-1" />
                    <span>{featuredArticle.readTime} min read</span>
                  </div>
                  
                  {featuredArticle.importantCase && (
                    <div className="flex items-center text-xs text-constitution-blue">
                      <Gavel size={12} className="mr-1" />
                      <span>Key case: {featuredArticle.importantCase.length > 25 
                        ? featuredArticle.importantCase.substring(0, 25) + '...' 
                        : featuredArticle.importantCase}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-md font-medium mb-3">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {articles
                .filter(article => article.id !== featuredArticle.id && article.category === featuredArticle.category)
                .slice(0, 2)
                .map(article => (
                  <div 
                    key={article.id}
                    onClick={() => navigate('/article/' + article.id)}
                    className="bg-card border rounded-lg p-3 hover:shadow-sm transition-all cursor-pointer flex items-start gap-3"
                  >
                    <div className="p-1.5 rounded-md bg-constitution-blue/10 text-constitution-blue mt-0.5">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium line-clamp-1">{article.title}</h4>
                      <div className="flex items-center mt-1 gap-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock size={10} className="mr-1" />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
