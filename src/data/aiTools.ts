import type { AITool } from '@/types';

export const aiTools: Record<string, AITool> = {
  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s flagship conversational AI, excellent for creative writing, brainstorming, and general-purpose text generation.',
    icon: 'MessageSquare',
    color: 'from-emerald-500 to-teal-600',
    pros: [
      'Excellent creative writing capabilities',
      'Wide range of use cases',
      'Large knowledge base',
      'Custom GPTs available',
      'Strong conversational abilities'
    ],
    cons: [
      'Knowledge cutoff date',
      'Can be verbose',
      'May hallucinate facts',
      'Limited free tier'
    ],
    freeUsage: '~40 messages every 3 hours on GPT-4o, unlimited on GPT-4o-mini',
    useCases: [
      'Creative writing and storytelling',
      'Brainstorming ideas',
      'Drafting emails and documents',
      'Learning new topics',
      'Code explanation and debugging'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['GPT-4o-mini access', 'Limited GPT-4o messages', 'Web browsing', 'Custom GPTs']
      },
      {
        name: 'Plus',
        price: '$20/month',
        features: ['Unlimited GPT-4o', 'GPT-4 access', 'DALL-E image generation', 'Advanced data analysis', 'Priority access']
      },
      {
        name: 'Pro',
        price: '$200/month',
        features: ['o1 Pro mode', 'Unlimited everything', 'Higher message limits', 'Research capabilities']
      }
    ],
    website: 'https://chat.openai.com'
  },

  claude: {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant with exceptional coding abilities and deep analytical capabilities.',
    icon: 'Code',
    color: 'from-orange-500 to-amber-600',
    pros: [
      'Superior coding assistance',
      'Large context window (200K tokens)',
      'Thoughtful, nuanced responses',
      'Excellent at following instructions',
      'Strong analytical skills'
    ],
    cons: [
      'No internet access',
      'Knowledge cutoff',
      'Limited free tier',
      'No image generation'
    ],
    freeUsage: 'Limited messages per day on free tier',
    useCases: [
      'Software development',
      'Code review and debugging',
      'Technical documentation',
      'Deep text analysis',
      'Complex problem solving'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Claude 3.5 Sonnet', 'Limited messages', '200K context window']
      },
      {
        name: 'Pro',
        price: '$20/month',
        features: ['5x more usage', 'Claude 3 Opus access', 'Priority bandwidth', 'Early access to features']
      },
      {
        name: 'Team',
        price: '$25/user/month',
        features: ['Shared workspaces', 'Centralized billing', 'User management', 'Higher rate limits']
      }
    ],
    website: 'https://claude.ai'
  },

  'kimi-k2': {
    id: 'kimi-k2',
    name: 'Kimi K2',
    description: 'Moonshot AI\'s versatile assistant with specialized modes for coding, documents, and presentations.',
    icon: 'Sparkles',
    color: 'from-blue-500 to-indigo-600',
    pros: [
      'Multiple specialized modes',
      'Excellent long document handling',
      'Strong presentation creation',
      'Great for Chinese content',
      'Fast response times'
    ],
    cons: [
      'Newer to market',
      'Smaller ecosystem',
      'Limited third-party integrations'
    ],
    freeUsage: 'Generous free tier with daily usage limits',
    useCases: [
      'Website building (Code mode)',
      'Document creation (Docs mode)',
      'Presentation design (Slides mode)',
      'Long-form content analysis',
      'Research assistance'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['All modes access', 'Daily usage limits', 'Standard features']
      },
      {
        name: 'Premium',
        price: 'Contact for pricing',
        features: ['Higher limits', 'Priority processing', 'Advanced features', 'API access']
      }
    ],
    website: 'https://kimi.moonshot.cn'
  },

  grok: {
    id: 'grok',
    name: 'Grok',
    description: 'xAI\'s conversational AI with real-time X (Twitter) integration and fewer content restrictions.',
    icon: 'Zap',
    color: 'from-purple-500 to-pink-600',
    pros: [
      'Real-time information from X',
      'Fewer content restrictions',
      'Witty, engaging personality',
      'Fast image generation',
      'Uncensored responses'
    ],
    cons: [
      'Requires X Premium',
      'Limited availability',
      'Can be inconsistent',
      'Tied to X ecosystem'
    ],
    freeUsage: 'Limited free queries for new users',
    useCases: [
      'Real-time news and trends',
      'Image generation with fewer restrictions',
      'Social media analysis',
      'Unfiltered conversations',
      'Quick image editing'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Limited queries', 'Basic features', 'Aurora image generation']
      },
      {
        name: 'Premium',
        price: '$8/month (X Premium)',
        features: ['Unlimited Grok access', 'Higher rate limits', 'Priority access', 'Advanced features']
      }
    ],
    website: 'https://x.com/i/grok'
  },

  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'The gold standard for artistic AI image generation with stunning, dreamlike aesthetics.',
    icon: 'Palette',
    color: 'from-violet-500 to-purple-700',
    pros: [
      'Best-in-class artistic quality',
      'Beautiful, unique aesthetics',
      'Active community',
      'Excellent prompt interpretation',
      'Consistent style options'
    ],
    cons: [
      'No free tier',
      'Discord-only interface',
      'Can be slow',
      'Less realistic than alternatives'
    ],
    freeUsage: 'No free tier available',
    useCases: [
      'Artistic illustrations',
      'Concept art',
      'Creative projects',
      'Marketing visuals',
      'Book covers and posters'
    ],
    plans: [
      {
        name: 'Basic',
        price: '$10/month',
        features: ['3.3 hours GPU time', 'Commercial usage', 'General commercial terms']
      },
      {
        name: 'Standard',
        price: '$30/month',
        features: ['15 hours GPU time', 'Unlimited relax GPU', 'Stealth mode option']
      },
      {
        name: 'Pro',
        price: '$60/month',
        features: ['30 hours GPU time', 'Stealth mode included', 'Priority support']
      }
    ],
    website: 'https://midjourney.com'
  },

  sora: {
    id: 'sora',
    name: 'Sora',
    description: 'OpenAI\'s text-to-video AI that creates stunning, realistic videos from text prompts.',
    icon: 'Video',
    color: 'from-rose-500 to-red-600',
    pros: [
      'Highly realistic video generation',
      'Excellent motion understanding',
      'Long video clips (up to 60s)',
      'Complex scene composition',
      'Professional quality output'
    ],
    cons: [
      'Very limited access',
      'Expensive',
      'Long generation times',
      'Requires ChatGPT Plus/Pro'
    ],
    freeUsage: 'No free tier - requires paid subscription',
    useCases: [
      'Marketing videos',
      'Creative storytelling',
      'Prototype visualization',
      'Social media content',
      'Concept demonstrations'
    ],
    plans: [
      {
        name: 'Plus',
        price: '$20/month (includes Sora)',
        features: ['Limited video generations', 'Up to 480p resolution', 'Standard features']
      },
      {
        name: 'Pro',
        price: '$200/month',
        features: ['Unlimited generations', 'Up to 1080p', 'Longer clips', 'Priority processing']
      }
    ],
    website: 'https://openai.com/sora'
  },

  'sora-2': {
    id: 'sora-2',
    name: 'Sora 2',
    description: 'Latest version of OpenAI\'s video generation model with improved speed and quality.',
    icon: 'Video',
    color: 'from-red-500 to-rose-700',
    pros: [
      'Faster generation than original',
      'Improved video quality',
      'Better prompt adherence',
      'More consistent outputs'
    ],
    cons: [
      'Premium pricing',
      'Limited availability',
      'Requires higher tier subscription'
    ],
    freeUsage: 'No free tier available',
    useCases: [
      'Fast video prototyping',
      'High-quality content creation',
      'Professional video production',
      'Quick turnaround projects'
    ],
    plans: [
      {
        name: 'Pro',
        price: '$200/month',
        features: ['Fastest generation', 'Highest quality', 'Priority access', 'Extended features']
      }
    ],
    website: 'https://openai.com/sora'
  },

  perplexity: {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered search engine that provides cited, accurate answers with real-time information.',
    icon: 'Search',
    color: 'from-cyan-500 to-blue-600',
    pros: [
      'Real-time web search',
      'Cited sources for every answer',
      'Accurate, factual responses',
      'No hallucination issues',
      'Great for research'
    ],
    cons: [
      'Limited free searches',
      'Pro can be expensive',
      'Less creative than ChatGPT',
      'Focused on search only'
    ],
    freeUsage: '~5 Pro searches per day, unlimited quick searches',
    useCases: [
      'Finding sources and citations',
      'Current events research',
      'Academic research',
      'Fact-checking',
      'News aggregation'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Unlimited quick searches', 'Limited Pro searches', 'Basic features']
      },
      {
        name: 'Pro',
        price: '$20/month',
        features: ['Unlimited Pro searches', 'GPT-4 integration', 'File upload', 'API access']
      }
    ],
    website: 'https://perplexity.ai'
  },

  gemini: {
    id: 'gemini',
    name: 'Gemini Pro',
    description: 'Google\'s advanced AI with real-time Google Search integration and multimodal capabilities.',
    icon: 'Brain',
    color: 'from-blue-400 to-cyan-500',
    pros: [
      'Real-time Google Search',
      'Multimodal (text, image, video)',
      'Massive context window',
      'Free tier available',
      'Integrated with Google services'
    ],
    cons: [
      'Inconsistent performance',
      'Can be overly cautious',
      'Less creative than competitors',
      'Gemini Advanced required for best features'
    ],
    freeUsage: 'Generous free tier with Gemini 1.5 Flash',
    useCases: [
      'Realistic analysis',
      'Research with live data',
      'Multimodal tasks',
      'Google ecosystem integration',
      'Large document analysis'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Gemini 1.5 Flash', 'Standard features', 'Google integration']
      },
      {
        name: 'Advanced',
        price: '$20/month',
        features: ['Gemini 1.5 Pro', '2TB Google One storage', 'Priority features', 'Advanced reasoning']
      }
    ],
    website: 'https://gemini.google.com'
  },

  'higgsfield': {
    id: 'higgsfield',
    name: 'Higgsfield/Nano Banana Pro',
    description: 'Advanced AI image generation focused on photorealistic outputs with professional quality.',
    icon: 'Camera',
    color: 'from-yellow-500 to-amber-600',
    pros: [
      'Highly realistic images',
      'Professional photo quality',
      'Good for product shots',
      'Consistent character generation'
    ],
    cons: [
      'Limited free uses',
      'Newer platform',
      'Smaller community'
    ],
    freeUsage: 'Limited free generations per day',
    useCases: [
      'Realistic photo generation',
      'Product photography',
      'Portrait creation',
      'Professional visuals'
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Limited generations', 'Standard quality', 'Basic features']
      },
      {
        name: 'Pro',
        price: 'Contact for pricing',
        features: ['Unlimited generations', 'Highest quality', 'Priority processing']
      }
    ],
    website: 'https://higgsfield.ai'
  },

  'nano-banana': {
    id: 'nano-banana',
    name: 'Nano Banana Pro',
    description: 'Specialized AI for ultra-realistic image and video generation with professional-grade outputs.',
    icon: 'Aperture',
    color: 'from-green-500 to-emerald-600',
    pros: [
      'Ultra-realistic outputs',
      'Fast generation speed',
      'Professional quality',
      'Good for commercial use'
    ],
    cons: [
      'Premium pricing',
      'Limited free tier',
      'Learning curve for prompts'
    ],
    freeUsage: 'Very limited free generations',
    useCases: [
      'Realistic image generation',
      'Video content creation',
      'Commercial photography',
      'Advertising visuals'
    ],
    plans: [
      {
        name: 'Starter',
        price: '$15/month',
        features: ['Basic generations', 'Standard resolution', 'Email support']
      },
      {
        name: 'Professional',
        price: '$49/month',
        features: ['Unlimited generations', '4K resolution', 'Priority support', 'Commercial license']
      }
    ],
    website: 'https://nanobanana.ai'
  },

  kling: {
    id: 'kling',
    name: 'Kling',
    description: 'High-quality AI video generation with excellent motion and scene understanding.',
    icon: 'Clapperboard',
    color: 'from-indigo-500 to-violet-600',
    pros: [
      'High-quality video output',
      'Good motion coherence',
      'Realistic physics simulation',
      'Competitive pricing'
    ],
    cons: [
      'Requires subscription',
      'Limited free preview',
      'Interface in Chinese primarily'
    ],
    freeUsage: 'Limited preview generations',
    useCases: [
      'Video content creation',
      'Marketing videos',
      'Creative projects',
      'Social media content'
    ],
    plans: [
      {
        name: 'Basic',
        price: '$10/month',
        features: ['Standard quality', 'Limited duration', 'Basic features']
      },
      {
        name: 'Premium',
        price: '$35/month',
        features: ['High quality', 'Extended duration', 'Priority processing']
      }
    ],
    website: 'https://klingai.com'
  },

  'no-ai': {
    id: 'no-ai',
    name: 'No AI Needed',
    description: 'It seems you\'re not looking for an AI tool at this moment.',
    icon: 'XCircle',
    color: 'from-gray-500 to-slate-600',
    pros: ['Consider what you actually need', 'Sometimes manual work is better'],
    cons: ['You might be missing out on helpful tools'],
    freeUsage: 'N/A',
    useCases: ['Reconsider your needs', 'Explore when ready'],
    plans: [{ name: 'N/A', price: '$0', features: ['No features available'] }],
    website: '#'
  }
};

export const getToolById = (id: string): AITool | undefined => {
  return aiTools[id];
};
