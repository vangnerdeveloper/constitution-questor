
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { articles } from '@/utils/quizData';
import { BookOpen, ArrowLeft, ArrowRight, Clock, Gavel, BookmarkIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
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
    
    // Check if article is bookmarked
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    setIsBookmarked(bookmarkedArticles.includes(articleId));
    
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
  
  const toggleBookmark = () => {
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarkedArticles.filter((id: string) => id !== articleId);
      localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedBookmarks));
      toast({
        title: "Bookmark removed",
        description: "Article removed from your bookmarks."
      });
    } else {
      bookmarkedArticles.push(articleId);
      localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
      toast({
        title: "Bookmarked",
        description: "Article saved to your bookmarks."
      });
    }
    
    setIsBookmarked(!isBookmarked);
  };
  
  // Find related articles
  const relatedArticles = article 
    ? articles.filter(a => a.id !== articleId && a.category === article.category).slice(0, 3)
    : [];
  
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
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-constitution-blue/10 text-constitution-blue">
                <BookOpen size={20} />
              </div>
              <h1 className="text-xl font-display font-semibold">{article.title}</h1>
            </div>
            
            <button 
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? 'bg-constitution-blue/10 text-constitution-blue' : 'bg-muted text-muted-foreground'} hover:bg-constitution-blue/10 hover:text-constitution-blue transition-colors`}
            >
              <BookmarkIcon size={18} className={isBookmarked ? 'fill-constitution-blue' : ''} />
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-xs px-2 py-1 rounded-full bg-muted inline-block">
              {article.category.split('-').map((word: string) => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock size={12} className="mr-1" />
              <span>{article.readTime} min read</span>
            </div>
            
            {article.importantCase && (
              <div className="flex items-center text-xs text-constitution-blue">
                <Gavel size={12} className="mr-1" />
                <span>Key case: {article.importantCase}</span>
              </div>
            )}
          </div>
          
          <div className="prose prose-sm max-w-none">
            {article.content.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {relatedArticles.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-md font-medium mb-3">Related Articles</h3>
              <div className="grid grid-cols-1 gap-3">
                {relatedArticles.map(relatedArticle => (
                  <div 
                    key={relatedArticle.id}
                    onClick={() => navigate('/article/' + relatedArticle.id)}
                    className="bg-muted/50 rounded-lg p-3 hover:bg-muted transition-colors cursor-pointer flex items-start gap-3"
                  >
                    <div className="p-1.5 rounded-md bg-constitution-blue/10 text-constitution-blue mt-0.5">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{relatedArticle.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {relatedArticle.content.split('\n\n')[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
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

