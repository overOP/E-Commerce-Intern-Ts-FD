// Store/wishlistStore.ts
import { create } from 'zustand';

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  color?: string;
  image: string; // Make sure this contains the correct image path
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlist = create<WishlistState>((set, get) => ({
  wishlistItems: [],
  addToWishlist: (item) => 
    set((state) => ({ wishlistItems: [...state.wishlistItems, item] })),
  removeFromWishlist: (id) =>
    set((state) => ({ wishlistItems: state.wishlistItems.filter(item => item.id !== id) })),
  isInWishlist: (id) => get().wishlistItems.some(item => item.id === id),
}));