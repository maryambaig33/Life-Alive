export interface Ingredient {
  name: string;
  benefits?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Warm Bowls' | 'Salads' | 'Smoothies' | 'Lattes';
  image: string;
  tags: string[]; // e.g., "Spicy", "Protein Rich", "Immunity"
  ingredients: string[];
  calories: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  CONCIERGE = 'CONCIERGE',
  LOCATIONS = 'LOCATIONS'
}