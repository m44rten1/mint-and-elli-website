'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import type { CartItem, Product } from '@/lib/types';

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; size?: string; personalization?: string }
  | { type: 'REMOVE_ITEM'; productId: string; size?: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number; size?: string }
  | { type: 'SET_ITEMS'; items: CartItem[] }
  | { type: 'CLEAR_CART' };

interface CartContextValue extends CartState {
  addItem: (product: Product, size?: string, personalization?: string) => void;
  removeItem: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
  hydrated: boolean;
}

function itemKey(productId: string, size?: string) {
  return `${productId}__${size ?? ''}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const idx = state.items.findIndex(
        (item) => itemKey(item.product.id, item.size) === itemKey(action.product.id, action.size)
      );
      if (idx >= 0) {
        const next = [...state.items];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return { items: next };
      }
      return {
        items: [
          ...state.items,
          {
            product: action.product,
            quantity: 1,
            size: action.size,
            personalization: action.personalization,
          },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (item) => itemKey(item.product.id, item.size) !== itemKey(action.productId, action.size)
        ),
      };
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (item) => itemKey(item.product.id, item.size) !== itemKey(action.productId, action.size)
          ),
        };
      }
      return {
        items: state.items.map((item) =>
          itemKey(item.product.id, item.size) === itemKey(action.productId, action.size)
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }
    case 'SET_ITEMS':
      return { items: action.items };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'mint-elli-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [hydrated, setHydrated] = useState(false);

  // Rehydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: CartState = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: 'SET_ITEMS', items: parsed.items });
        }
      }
    } catch {
      // Ignore parse errors
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage whenever cart changes (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors
    }
  }, [state, hydrated]);

  const addItem = (product: Product, size?: string, personalization?: string) =>
    dispatch({ type: 'ADD_ITEM', product, size, personalization });

  const removeItem = (productId: string, size?: string) =>
    dispatch({ type: 'REMOVE_ITEM', productId, size });

  const updateQuantity = (productId: string, quantity: number, size?: string) =>
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity, size });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce(
    (sum, item) => sum + item.product.priceMin * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, clearCart, itemCount, total, hydrated }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
