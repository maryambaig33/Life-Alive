import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'swami',
    name: 'Swami',
    description: 'A sweet & savory curry with broccoli, carrots, onions, kale & roasted almonds.',
    price: 12.95,
    category: 'Warm Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', // Bowl with greens
    tags: ['Curry', 'Warm', 'Comforting'],
    ingredients: ['Brown Rice', 'Broccoli', 'Carrots', 'Onions', 'Kale', 'Tamari Almonds', 'Sweet Curry Miso Sauce'],
    calories: 450
  },
  {
    id: 'green-goddess',
    name: 'Green Goddess',
    description: 'Avocado, broccoli, kale, tofu & ginger tamari sauce.',
    price: 13.50,
    category: 'Warm Bowls',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop', // Green healthy bowl
    tags: ['Protein Rich', 'Greens', 'Vegan'],
    ingredients: ['Brown Rice', 'Avocado', 'Broccoli', 'Kale', 'Tofu', 'Ginger Tamari Sauce'],
    calories: 510
  },
  {
    id: 'adventurer',
    name: 'The Adventurer',
    description: 'Corn, beets, broccoli, kale, cheddar, tamari almonds & sesame ginger sauce.',
    price: 13.25,
    category: 'Warm Bowls',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop', // Colorful bowl
    tags: ['Cheesy', 'Crunchy', 'Hearty'],
    ingredients: ['Quinoa', 'Corn', 'Beets', 'Broccoli', 'Kale', 'Aged Cheddar', 'Tamari Almonds', 'Sesame Ginger Sauce'],
    calories: 580
  },
  {
    id: 'rainbow-harvest',
    name: 'Rainbow Harvest',
    description: 'Whipped sweet potato, beets, carrots, broccoli, kale, tofu & ginger tamari sauce.',
    price: 12.75,
    category: 'Warm Bowls',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop', // Bowl with sweet potato/orange hues
    tags: ['Colorful', 'Sweet Potato', 'Vitamin A'],
    ingredients: ['Brown Rice', 'Whipped Sweet Potato', 'Beets', 'Carrots', 'Broccoli', 'Kale', 'Tofu', 'Ginger Tamari Sauce'],
    calories: 490
  },
  {
    id: 'super-green-smoothie',
    name: 'Super Green',
    description: 'Kale, spinach, mango, pineapple, banana & coconut water.',
    price: 9.50,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop', // Green smoothie
    tags: ['Detox', 'Energizing', 'Refreshing'],
    ingredients: ['Kale', 'Spinach', 'Mango', 'Pineapple', 'Banana', 'Coconut Water'],
    calories: 280
  },
  {
    id: 'blue-magic',
    name: 'Blue Magic',
    description: 'Blue majik spirulina, banana, pineapple, coconut milk & vanilla.',
    price: 10.50,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1550505191-49faae21226b?q=80&w=800&auto=format&fit=crop', // Blue drink/smoothie bowl
    tags: ['Antioxidant', 'Exotic', 'Creamy'],
    ingredients: ['Blue Majik Spirulina', 'Banana', 'Pineapple', 'Coconut Milk', 'Vanilla'],
    calories: 320
  },
  {
    id: 'golden-latte',
    name: 'Golden Latte',
    description: 'Turmeric, ginger, cinnamon, honey & oat milk.',
    price: 6.50,
    category: 'Lattes',
    image: 'https://images.unsplash.com/photo-1596711684368-20d0d8262744?q=80&w=800&auto=format&fit=crop', // Golden latte
    tags: ['Anti-inflammatory', 'Warm', 'Spiced'],
    ingredients: ['Turmeric', 'Ginger', 'Cinnamon', 'Honey', 'Oat Milk'],
    calories: 180
  },
    {
    id: 'elixir-salad',
    name: 'Life Elixir Salad',
    description: 'Massaged kale, arugula, beets, carrots, apples, hemp seeds & balsamic glaze.',
    price: 11.95,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop', // Fresh salad
    tags: ['Raw', 'Light', 'Nutrient Dense'],
    ingredients: ['Kale', 'Arugula', 'Beets', 'Carrots', 'Apples', 'Hemp Seeds', 'Balsamic Glaze'],
    calories: 340
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Life Alive Wellness Concierge". Your goal is to help customers choose a meal from the Life Alive menu based on their current mood, physical feeling, or health goals.
You must ONLY recommend items from the following menu data provided in context.
If a user says they are tired, suggest energizing items (like Super Green Smoothie or Swami).
If a user wants comfort, suggest warm bowls (like The Adventurer or Swami).
If a user wants light/detox, suggest salads or green juices.
Keep your responses friendly, vibrant, earthy, and concise. Use emojis like 🌿, ✨, 🥣, 🥑.
Do not invent menu items. Only use the ones listed.
Explain WHY you are recommending an item (e.g., "The ginger in the Green Goddess is great for digestion!").
`;