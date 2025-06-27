import { Plant } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/6913087/pexels-photo-6913087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical houseplant known for its large, glossy leaves with distinctive splits and holes. This fast-growing climbing plant can reach impressive heights and makes a dramatic statement in any room.',
    shortDescription: 'Popular tropical plant with distinctive split leaves',
    category: 'Air Purifying',
    careLevel: 'Medium',
    lightNeeds: 'Medium',
    watering: 'Weekly',
    potSize: '10 inches',
    height: '3-8 feet',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    features: ['Fast Growing', 'Air Purifying', 'Pet Friendly', 'Low Maintenance'],
    careGuide: {
      light: 'Bright, indirect light. Can tolerate some direct morning sun.',
      water: 'Water when top 1-2 inches of soil are dry, typically weekly.',
      humidity: 'Prefers 40-60% humidity. Mist regularly or use a humidifier.',
      temperature: 'Ideal range is 65-80°F (18-27°C).',
      fertilizer: 'Feed monthly during growing season with balanced liquid fertilizer.'
    }
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 32.99,
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The Snake Plant (Sansevieria trifasciata) is one of the most resilient and low-maintenance houseplants available. With its striking upright leaves featuring green and yellow variegation, it\'s perfect for beginners and busy plant parents.',
    shortDescription: 'Extremely low-maintenance with striking upright leaves',
    category: 'Low Maintenance',
    careLevel: 'Easy',
    lightNeeds: 'Low',
    watering: 'Bi-weekly',
    potSize: '8 inches',
    height: '2-4 feet',
    rating: 4.9,
    reviews: 189,
    inStock: true,
    features: ['Low Light Tolerant', 'Drought Resistant', 'Air Purifying', 'Pet Safe'],
    careGuide: {
      light: 'Tolerates low light but prefers bright, indirect light.',
      water: 'Water every 2-3 weeks, allowing soil to dry completely between waterings.',
      humidity: 'Thrives in normal household humidity levels.',
      temperature: 'Comfortable in 60-80°F (15-27°C).',
      fertilizer: 'Feed sparingly, only 2-3 times during growing season.'
    }
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 78.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The Fiddle Leaf Fig is a stunning statement plant with large, violin-shaped leaves that create a dramatic focal point in any space. This elegant tree can grow quite tall indoors and is beloved by interior designers.',
    shortDescription: 'Elegant tree with large, violin-shaped leaves',
    category: 'Statement Plants',
    careLevel: 'Medium',
    lightNeeds: 'High',
    watering: 'Weekly',
    potSize: '12 inches',
    height: '5-10 feet',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    features: ['Statement Plant', 'Fast Growing', 'Instagram Worthy'],
    careGuide: {
      light: 'Bright, indirect light. Avoid direct afternoon sun.',
      water: 'Water when top inch of soil is dry, typically weekly.',
      humidity: 'Prefers higher humidity. Mist leaves regularly.',
      temperature: 'Keep between 65-75°F (18-24°C).',
      fertilizer: 'Feed monthly during spring and summer with balanced fertilizer.'
    }
  },
  {
    id: '4',
    name: 'Pothos Golden',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7084308/pexels-photo-7084308.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Golden Pothos is one of the easiest houseplants to grow, featuring heart-shaped leaves with beautiful golden variegation. This trailing vine is perfect for hanging baskets or as a climbing plant with proper support.',
    shortDescription: 'Easy-care trailing vine with golden variegated leaves',
    category: 'Hanging',
    careLevel: 'Easy',
    lightNeeds: 'Medium',
    watering: 'Weekly',
    potSize: '6 inches',
    height: '6-10 feet trailing',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    features: ['Trailing', 'Air Purifying', 'Low Maintenance', 'Fast Growing'],
    careGuide: {
      light: 'Bright, indirect light. Can tolerate lower light conditions.',
      water: 'Water when top inch of soil feels dry.',
      humidity: 'Adaptable to average home humidity.',
      temperature: 'Thrives in 65-85°F (18-29°C).',
      fertilizer: 'Feed monthly during growing season.'
    }
  },
  {
    id: '5',
    name: 'ZZ Plant',
    price: 42.99,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJXTh0ugMbr86hfGPBH1WgddX71Yie8C9gPNUG9kp3A8Qc08AcHVlxR3UNPnZbbpPtty_q3gIwa2ZTSuKooZ1C_Q',
    description: 'The ZZ Plant (Zamioculcas zamiifolia) is virtually indestructible, making it perfect for beginners or frequent travelers. Its glossy, dark green leaves add a modern touch to any space while requiring minimal care.',
    shortDescription: 'Nearly indestructible plant with glossy dark leaves',
    category: 'Low Maintenance',
    careLevel: 'Easy',
    lightNeeds: 'Low',
    watering: 'Monthly',
    potSize: '8 inches',
    height: '2-3 feet',
    rating: 4.8,
    reviews: 203,
    inStock: true,
    features: ['Drought Tolerant', 'Low Light', 'Air Purifying', 'Modern Look'],
    careGuide: {
      light: 'Tolerates low to bright, indirect light.',
      water: 'Water every 2-4 weeks, allowing soil to dry completely.',
      humidity: 'Tolerates dry air well.',
      temperature: 'Comfortable in 65-79°F (18-26°C).',
      fertilizer: 'Feed 2-3 times during growing season.'
    }
  },
  {
    id: '6',
    name: 'Rubber Plant',
    price: 55.99,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRV8kcrVncaxHx20xNFFDSmGt69cpmNiam6_-bFr1CDMXDVx6nN2Zc3aEYNwIyPAzX_t0W-N0PAN7QBrcmo_8MbLw',
    description: 'The Rubber Plant (Ficus elastica) is a classic houseplant with thick, glossy leaves that emerge in a beautiful burgundy color before turning deep green. It\'s an excellent air purifier and can grow quite large.',
    shortDescription: 'Classic plant with thick, glossy leaves and air-purifying qualities',
    category: 'Air Purifying',
    careLevel: 'Easy',
    lightNeeds: 'Medium',
    watering: 'Weekly',
    potSize: '10 inches',
    height: '3-6 feet',
    rating: 4.7,
    reviews: 178,
    inStock: true,
    features: ['Air Purifying', 'Easy Care', 'Fast Growing', 'Classic'],
    careGuide: {
      light: 'Bright, indirect light. Can handle some direct morning sun.',
      water: 'Water when top inch of soil is dry.',
      humidity: 'Appreciates higher humidity but adapts well.',
      temperature: 'Prefers 60-80°F (15-27°C).',
      fertilizer: 'Feed monthly during growing season.'
    }
  }
];

export const categories = [
  'All Plants',
  'Air Purifying',
  'Low Maintenance', 
  'Pet Friendly',
  'Succulents',
  'Hanging',
  'Desk Plants'
];

export const carelevels = ['Easy', 'Medium', 'Hard'];
export const lightNeeds = ['Low', 'Medium', 'High'];