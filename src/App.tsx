import { useState, useCallback, useEffect } from 'react';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultCard } from '@/components/ResultCard';
import { ProgressBar } from '@/components/ProgressBar';
import { getQuestionById } from '@/data/decisionTree';
import { getToolById } from '@/data/aiTools';
import type { AITool } from '@/types';
import { Sparkles, RotateCcw } from 'lucide-react';

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = getQuestionById(currentQuestionId);

  const handleOptionClick = useCallback((nextQuestionId?: string, toolId?: string, action?: 'back' | 'restart') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);

    setTimeout(() => {
      if (action === 'back' && history.length > 0) {
        const prevQuestionId = history[history.length - 1];
        setHistory(prev => prev.slice(0, -1));
        setCurrentQuestionId(prevQuestionId);
        setIsTransitioning(false);
        return;
      }

      if (action === 'restart') {
        setHistory([]);
        setCurrentQuestionId('start');
        setSelectedTool(null);
        setIsTransitioning(false);
        return;
      }

      if (toolId) {
        const tool = getToolById(toolId);
        if (tool) {
          setSelectedTool(tool);
        }
        setIsTransitioning(false);
        return;
      }

      if (nextQuestionId) {
        setHistory(prev => [...prev, currentQuestionId]);
        setCurrentQuestionId(nextQuestionId);
      }
      setIsTransitioning(false);
    }, 200);
  }, [currentQuestionId, history, isTransitioning]);

  const handleRestart = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setHistory([]);
      setCurrentQuestionId('start');
      setSelectedTool(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  }, []);

  // Calculate progress
  const progress = Math.min((history.length / 6) * 100, 100);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedTool) {
        handleRestart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTool, handleRestart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 animate-fade-in"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              AI Chooser
            </span>
          </div>

          {(history.length > 0 || selectedTool) && (
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm font-medium animate-fade-in"
            >
              <RotateCcw className="w-4 h-4" />
              Start Over
            </button>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      {!selectedTool && <ProgressBar progress={progress} />}

      {/* Main Content */}
      <main className="relative z-10 px-6 py-8 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
        <div className={`w-full max-w-4xl transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {selectedTool ? (
            <ResultCard 
              key="result"
              tool={selectedTool} 
              onRestart={handleRestart}
            />
          ) : currentQuestion ? (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onOptionClick={handleOptionClick}
              historyLength={history.length}
            />
          ) : null}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-6 text-center">
        <p className="text-slate-500 text-sm">
          Find the perfect AI tool for your needs
        </p>
      </footer>
    </div>
  );
}

export default App;
