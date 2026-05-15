export const products = [
  {
    id: 1,
    name: 'Fresh Milk',
    price: '₹70 / litre',
    description: 'Pure farm-fresh milk delivered every morning with natural cream and nutrition.',
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Organic Curd',
    price: '₹60 / 500g',
    description: 'Thick, creamy curd made from fresh milk using traditional natural culture.',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Pure Ghee',
    price: '₹650 / 500ml',
    description: 'Aromatic desi ghee prepared slowly for rich taste, purity, and everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Paneer',
    price: '₹120 / 250g',
    description: 'Soft handmade paneer with a fresh texture, perfect for curries and snacks.',
    image:
      'https://images.unsplash.com/photo-1631452180775-6b62d4a1655b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Butter',
    price: '₹180 / 250g',
    description: 'Fresh farm butter with a smooth taste for rotis, toast, and home cooking.',
    image:
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Farm Vegetables',
    price: '₹299 / basket',
    description: 'Seasonal vegetables harvested from local farms and packed with freshness.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Farm Fresh Eggs',
    price: '₹120 / tray',
    description: 'Fresh eggs from free-range hens, rich in protein and perfect for daily cooking.',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 8,
    name: 'Cool Drinks',
    price: '₹50 / bottle',
    description: 'Refreshing cool drinks including Coca-Cola, Pepsi, Sprite, Thumbs Up, and more.',
    image:
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  }
]
