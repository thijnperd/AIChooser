import type { Question } from '@/types';

export const questions: Record<string, Question> = {
  start: {
    id: 'start',
    text: 'Do you want to use AI?',
    subtext: 'Let\'s find the perfect AI tool for your needs',
    options: [
      { id: 'yes', text: 'Yes, let\'s go!', icon: 'CheckCircle', nextQuestionId: 'purpose' },
      { id: 'no', text: 'No, not really', icon: 'XCircle', nextQuestionId: 'no-ai' }
    ]
  },

  'no-ai': {
    id: 'no-ai',
    text: 'Then why are you in this flowchart? 🤔',
    subtext: 'Just kidding! Let us know if you change your mind.',
    options: [
      { id: 'restart', text: 'Actually, yes I do!', icon: 'RefreshCw', nextQuestionId: 'purpose' }
    ]
  },

  purpose: {
    id: 'purpose',
    text: 'What do you want to use it for?',
    subtext: 'Select the category that best matches your needs',
    options: [
      { id: 'creative-text', text: 'Creative text?', icon: 'PenTool', nextQuestionId: 'creative-text' },
      { id: 'coding', text: 'Coding?', icon: 'Code', nextQuestionId: 'coding' },
      { id: 'build-website', text: 'Build website?', icon: 'Globe', nextQuestionId: 'build-website' },
      { id: 'create-images', text: 'Create images?', icon: 'Image', nextQuestionId: 'create-images' },
      { id: 'make-video', text: 'Make video?', icon: 'Video', nextQuestionId: 'make-video' },
      { id: 'make-ppt', text: 'Make PowerPoint?', icon: 'Presentation', nextQuestionId: 'make-ppt' },
      { id: 'analyze-text', text: 'Analyze text?', icon: 'FileText', nextQuestionId: 'analyze-text' },
      { id: 'find-sources', text: 'Find sources?', icon: 'BookOpen', nextQuestionId: 'find-sources' },
      { id: 'current-events', text: 'Current events?', icon: 'Newspaper', nextQuestionId: 'current-events' },
      { id: 'make-document', text: 'Make nice document?', icon: 'FileEdit', nextQuestionId: 'make-document' }
    ]
  },

  'creative-text': {
    id: 'creative-text',
    text: 'Creative text generation',
    subtext: 'Perfect for writing, storytelling, and creative content',
    options: [
      { id: 'yes', text: 'Yes, this is what I need!', icon: 'CheckCircle', toolId: 'chatgpt' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  coding: {
    id: 'coding',
    text: 'Coding assistance',
    subtext: 'Get help with programming, debugging, and code review',
    options: [
      { id: 'yes', text: 'Yes, I need coding help!', icon: 'CheckCircle', toolId: 'claude' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'build-website': {
    id: 'build-website',
    text: 'Build a website',
    subtext: 'Create websites with AI-powered development tools',
    options: [
      { id: 'yes', text: 'Yes, let\'s build!', icon: 'CheckCircle', toolId: 'kimi-k2' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'create-images': {
    id: 'create-images',
    text: 'Create images',
    subtext: 'Generate stunning images with AI',
    options: [
      { id: 'yes', text: 'Continue →', icon: 'ArrowRight', nextQuestionId: 'image-from-prompt' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'image-from-prompt': {
    id: 'image-from-prompt',
    text: 'From prompt?',
    subtext: 'Do you want to generate images from text descriptions?',
    options: [
      { id: 'yes', text: 'Yes, from text prompts', icon: 'Type', nextQuestionId: 'image-free-many' },
      { id: 'no', text: 'No, I want to edit images', icon: 'Edit3', nextQuestionId: 'image-edit' }
    ]
  },

  'image-free-many': {
    id: 'image-free-many',
    text: 'Free with many uses?',
    subtext: 'Do you need a free tool with generous usage limits?',
    options: [
      { id: 'yes', text: 'Yes, free with many uses', icon: 'Gift', nextQuestionId: 'image-need-quickly' },
      { id: 'no', text: 'No, limited uses are OK', icon: 'Clock', nextQuestionId: 'image-limited-uses' }
    ]
  },

  'image-need-quickly': {
    id: 'image-need-quickly',
    text: 'Need it quickly?',
    subtext: 'Is fast generation time important to you?',
    options: [
      { id: 'yes', text: 'Yes, speed matters', icon: 'Zap', nextQuestionId: 'image-few-restrictions' },
      { id: 'no', text: 'No, I can wait', icon: 'Coffee', toolId: 'sora' }
    ]
  },

  'image-few-restrictions': {
    id: 'image-few-restrictions',
    text: 'Few restrictions?',
    subtext: 'Do you want fewer content restrictions?',
    options: [
      { id: 'yes', text: 'Yes, fewer restrictions', icon: 'Unlock', toolId: 'grok' },
      { id: 'no', text: 'Standard restrictions OK', icon: 'Lock', toolId: 'grok' }
    ]
  },

  'image-limited-uses': {
    id: 'image-limited-uses',
    text: 'Limited uses?',
    subtext: 'Are you OK with limited free generations?',
    options: [
      { id: 'yes', text: 'Yes, limited uses are fine', icon: 'CheckCircle', toolId: 'higgsfield' },
      { id: 'no', text: 'No, I need more', icon: 'X', nextQuestionId: 'image-paid' }
    ]
  },

  'image-paid': {
    id: 'image-paid',
    text: 'Paid?',
    subtext: 'Are you willing to pay for better quality/more generations?',
    options: [
      { id: 'yes', text: 'Yes, I\'ll pay for quality', icon: 'CreditCard', nextQuestionId: 'image-priority' },
      { id: 'no', text: 'No, I want free', icon: 'X', nextQuestionId: 'image-from-prompt' }
    ]
  },

  'image-priority': {
    id: 'image-priority',
    text: 'What\'s the priority?',
    subtext: 'What matters most for your image generation?',
    options: [
      { id: 'artistic', text: 'Artistic → Midjourney', icon: 'Palette', toolId: 'midjourney' },
      { id: 'realistic', text: 'Realistic → Nano Banana Pro', icon: 'Camera', toolId: 'nano-banana' },
      { id: 'fast', text: 'Fast → Sora 2', icon: 'Zap', toolId: 'sora-2' }
    ]
  },

  'image-edit': {
    id: 'image-edit',
    text: 'Edit image?',
    subtext: 'Do you need to edit existing images?',
    options: [
      { id: 'yes', text: 'Yes, edit existing images', icon: 'Edit3', nextQuestionId: 'image-edit-many' },
      { id: 'no', text: 'No, generate new ones', icon: 'X', nextQuestionId: 'image-from-prompt' }
    ]
  },

  'image-edit-many': {
    id: 'image-edit-many',
    text: 'Need many uses?',
    subtext: 'Do you need many image editing operations?',
    options: [
      { id: 'yes', text: 'Yes, many edits needed', icon: 'Repeat', toolId: 'grok' },
      { id: 'no', text: 'No, just occasional', icon: 'Clock', toolId: 'chatgpt' }
    ]
  },

  'make-video': {
    id: 'make-video',
    text: 'Make video',
    subtext: 'Generate videos with AI',
    options: [
      { id: 'yes', text: 'Continue →', icon: 'ArrowRight', nextQuestionId: 'video-from-prompt' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'video-from-prompt': {
    id: 'video-from-prompt',
    text: 'From prompt?',
    subtext: 'Do you want to generate videos from text descriptions?',
    options: [
      { id: 'yes', text: 'Yes, from text prompts', icon: 'Type', nextQuestionId: 'video-paid' },
      { id: 'no', text: 'No, other method', icon: 'X', nextQuestionId: 'video-from-prompt' }
    ]
  },

  'video-paid': {
    id: 'video-paid',
    text: 'Paid?',
    subtext: 'Are you willing to pay for video generation?',
    options: [
      { id: 'yes', text: 'Yes, I\'ll pay', icon: 'CreditCard', toolId: 'kling' },
      { id: 'no', text: 'No, I want free', icon: 'Gift', nextQuestionId: 'video-restrictions' }
    ]
  },

  'video-restrictions': {
    id: 'video-restrictions',
    text: 'Need fewer restrictions?',
    subtext: 'Do you want fewer content restrictions?',
    options: [
      { id: 'yes', text: 'Yes, fewer restrictions', icon: 'Unlock', toolId: 'grok' },
      { id: 'no', text: 'Standard is OK', icon: 'Lock', toolId: 'grok' }
    ]
  },

  'make-ppt': {
    id: 'make-ppt',
    text: 'Make PowerPoint',
    subtext: 'Create professional presentations with AI',
    options: [
      { id: 'yes', text: 'Yes, create presentations!', icon: 'CheckCircle', toolId: 'kimi-k2' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'analyze-text': {
    id: 'analyze-text',
    text: 'Analyze text',
    subtext: 'Get insights and analysis from text content',
    options: [
      { id: 'yes', text: 'Continue →', icon: 'ArrowRight', nextQuestionId: 'text-creative' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'text-creative': {
    id: 'text-creative',
    text: 'Creative analysis?',
    subtext: 'Do you need creative or literary text analysis?',
    options: [
      { id: 'yes', text: 'Yes, creative analysis', icon: 'Palette', toolId: 'chatgpt' },
      { id: 'no', text: 'No, something else', icon: 'X', nextQuestionId: 'text-realistic' }
    ]
  },

  'text-realistic': {
    id: 'text-realistic',
    text: 'Realistic analysis?',
    subtext: 'Do you need factual, data-driven analysis?',
    options: [
      { id: 'yes', text: 'Yes, realistic/factual', icon: 'BarChart', toolId: 'gemini' },
      { id: 'no', text: 'No, deep analysis', icon: 'Search', toolId: 'claude' }
    ]
  },

  'find-sources': {
    id: 'find-sources',
    text: 'Find sources',
    subtext: 'Research and find credible sources with citations',
    options: [
      { id: 'yes', text: 'Yes, find sources!', icon: 'CheckCircle', toolId: 'perplexity' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'current-events': {
    id: 'current-events',
    text: 'Current events',
    subtext: 'Stay updated with real-time news and information',
    options: [
      { id: 'yes', text: 'Yes, current events!', icon: 'CheckCircle', toolId: 'perplexity' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  },

  'make-document': {
    id: 'make-document',
    text: 'Make nice document',
    subtext: 'Create beautifully formatted documents with AI assistance',
    options: [
      { id: 'yes', text: 'Yes, create documents!', icon: 'CheckCircle', toolId: 'kimi-k2' },
      { id: 'back', text: '← Back to categories', icon: 'ArrowLeft', action: 'back' }
    ]
  }
};

export const getQuestionById = (id: string): Question | undefined => {
  return questions[id];
};
