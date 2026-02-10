import type { Question } from '@/types';
import * as LucideIcons from 'lucide-react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { ComponentType } from 'react';

interface QuestionCardProps {
  question: Question;
  onOptionClick: (nextQuestionId?: string, toolId?: string, action?: 'back' | 'restart') => void;
  historyLength: number;
}

// Get Lucide icon dynamically
const getIcon = (iconName?: string): ComponentType<{ className?: string }> | null => {
  if (!iconName) return null;
  const icons = LucideIcons as unknown as Record<string, ComponentType<{ className?: string }>>;
  return icons[iconName] || null;
};

export function QuestionCard({ question, onOptionClick, historyLength }: QuestionCardProps) {
  return (
    <div className="w-full animate-fade-in-up">
      {/* Question Header */}
      <div className="text-center mb-10">
        {historyLength > 0 && (
          <button
            onClick={() => onOptionClick(undefined, undefined, 'back')}
            className="mb-6 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm text-slate-400 hover:text-white animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        )}
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {question.text}
        </h1>
        {question.subtext && (
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            {question.subtext}
          </p>
        )}
      </div>

      {/* Options Grid */}
      <div className={`grid gap-4 ${question.options.length <= 2 ? 'max-w-xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
        {question.options.map((option) => {
          const Icon = getIcon(option.icon);
          const isBackAction = option.action === 'back';
          
          return (
            <button
              key={option.id}
              onClick={() => onOptionClick(option.nextQuestionId, option.toolId, option.action)}
              className={`
                relative group p-6 rounded-2xl border transition-all duration-300
                text-left flex items-center gap-4
                hover:scale-[1.02] active:scale-[0.98]
                ${isBackAction 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-blue-500/10'
                }
              `}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
              
              {/* Icon */}
              {Icon && (
                <div className={`
                  relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                  transition-all duration-300
                  ${isBackAction 
                    ? 'bg-white/10 group-hover:bg-white/20' 
                    : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30'
                  }
                `}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              )}

              {/* Text */}
              <div className="relative flex-1">
                <span className={`
                  text-lg font-semibold block
                  ${isBackAction ? 'text-slate-400 group-hover:text-white' : 'text-white'}
                `}>
                  {option.text}
                </span>
              </div>

              {/* Arrow Indicator */}
              {!isBackAction && (
                <div className="relative flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-white/60" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Step Indicator */}
      {historyLength > 0 && (
        <div className="mt-8 text-center animate-fade-in">
          <span className="text-slate-500 text-sm">
            Step {historyLength + 1}
          </span>
        </div>
      )}
    </div>
  );
}
