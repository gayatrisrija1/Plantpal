import React, { createContext, useContext, useState, useEffect } from 'react';
import { WishlistContextType, Plant } from '../types';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Plant[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('plantpal_wishlist');
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('plantpal_wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (plant: Plant) => {
    setItems(prev => {
      if (prev.find(item => item.id === plant.id)) {
        return prev;
      }
      return [...prev, plant];
    });
  };

  const removeFromWishlist = (plantId: string) => {
    setItems(prev => prev.filter(item => item.id !== plantId));
  };

  const isInWishlist = (plantId: string) => {
    return items.some(item => item.id === plantId);
  };

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};