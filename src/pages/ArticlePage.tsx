
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { articles } from '@/utils/quizData';
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Find the article
    const foundArticle = articles.find(a => a.id === articleId);
    
    if (!foundArticle) {
      toast({
        title: "Article not found",
        description: "The requested article could not be found.",
        variant: "destructive"
      });
      navigate('/articles');
      return;
    }
    
    // Simulate loading
    setTimeout(() => {
      setArticle(foundArticle);
      setIsLoading(false);
    }, 500);
  }, [articleId, navigate]);
  
  const handleNextArticle = () => {
    const currentIndex = articles.findIndex(a => a.id === articleId);
    if (currentIndex < articles.length - 1) {
      navigate(`/article/${articles[currentIndex + 1].id}`);
    }
  };
  
  const handlePrevArticle = () => {
    const currentIndex = articles.findIndex(a => a.id === articleId);
    if (currentIndex > 0) {
      navigate(`/article/${articles[currentIndex - 1].id}`);
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Article" showBackButton />
        
        <main className="pt-20 px-4 max-w-2xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Constitutional Article" showBackButton />
      
      <main className="pt-20 px-4 max-w-2xl mx-auto">
        <div className="bg-card rounded-xl border shadow-sm p-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-constitution-blue/10 text-constitution-blue">
              <BookOpen size={20} />
            </div>
            <h1 className="text-xl font-display font-semibold">{article.title}</h1>
          </div>
          
          <div className="prose prose-sm max-w-none">
            {article.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t flex justify-between">
            <button
              onClick={handlePrevArticle}
              disabled={articles.findIndex(a => a.id === articleId) === 0}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} />
              Previous Article
            </button>
            
            <button
              onClick={handleNextArticle}
              disabled={articles.findIndex(a => a.id === articleId) === articles.length - 1}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Article
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
