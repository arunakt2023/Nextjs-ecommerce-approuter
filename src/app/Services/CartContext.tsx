"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cartItems: any[]; 
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
