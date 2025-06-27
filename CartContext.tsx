import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartContextType, CartItem, Plant } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('plantpal_cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('plantpal_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (plant: Plant, quantity: number = 1) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.plant.id === plant.id);
      if (existingItem) {
        return prev.map(item =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { plant, quantity }];
    });
  };

  const removeFromCart = (plantId: string) => {
    setItems(prev => prev.filter(item => item.plant.id !== plantId));
  };

  const updateQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.plant.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};