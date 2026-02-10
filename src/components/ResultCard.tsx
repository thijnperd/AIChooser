import type { AITool } from '@/types';
import * as LucideIcons from 'lucide-react';
import { ExternalLink, Check, X, Sparkles, RefreshCw, Gift, DollarSign, Target } from 'lucide-react';
import type { ComponentType } from 'react';

interface ResultCardProps {
  tool: AITool;
  onRestart: () => void;
}

const getIcon = (iconName: string): ComponentType<{ className?: string }> => {
  const icons = LucideIcons as unknown as Record<string, ComponentType<{ className?: string }>>;
  return icons[iconName] || Sparkles;
};

export function ResultCard({ tool, onRestart }: ResultCardProps) {
  const Icon = getIcon(tool.icon);

  return (
    <div className="w-full animate-fade-in-up">
      {/* Success Banner */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Perfect Match Found!</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          We recommend
        </h2>
      </div>

      {/* Main Tool Card */}
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl mb-8 animate-scale-in"
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-10`} />
        
        {/* Content */}
        <div className="relative p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-2xl`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {tool.name}
              </h1>
              <p className="text-slate-300 text-lg">
                {tool.description}
              </p>
            </div>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              Try {tool.name}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Free Usage Badge */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-8">
            <Gift className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Free Tier</span>
              <p className="text-slate-300 mt-1">{tool.freeUsage}</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Pros */}
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-green-400" />
                <h3 className="text-green-400 font-semibold">Pros</h3>
              </div>
              <ul className="space-y-2">
                {tool.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-300">
                    <span className="text-green-400 mt-1">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="text-red-400 font-semibold">Cons</h3>
              </div>
              <ul className="space-y-2">
                {tool.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-300">
                    <span className="text-red-400 mt-1">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Use Cases */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-purple-400" />
              <h3 className="text-purple-400 font-semibold">Best Use Cases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-slate-300 text-sm"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-amber-400" />
              <h3 className="text-amber-400 font-semibold">Pricing Plans</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-white font-semibold">{plan.name}</span>
                    <span className="text-amber-400 font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-1">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-amber-400/60">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 font-semibold"
        >
          <RefreshCw className="w-5 h-5" />
          Find Another Tool
        </button>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${tool.color} hover:opacity-90 transition-all duration-300 font-semibold text-white shadow-lg hover:scale-105`}
        >
          Get Started with {tool.name}
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
