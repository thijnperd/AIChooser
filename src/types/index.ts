export interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  pros: string[];
  cons: string[];
  freeUsage: string;
  useCases: string[];
  plans: PricingPlan[];
  website: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  icon?: string;
  nextQuestionId?: string;
  toolId?: string;
  action?: 'back' | 'restart';
}

export type FlowState = {
  currentQuestionId: string;
  history: string[];
  selectedTool: AITool | null;
};
