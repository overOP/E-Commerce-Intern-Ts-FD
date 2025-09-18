import { create } from 'zustand';

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  color?: string;
  image: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

// Load from localStorage
const loadWishlist = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem('wishlist');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const useWishlist = create<WishlistState>((set, get) => ({
  wishlistItems: loadWishlist(),

  addToWishlist: (item) => {
    const updated = [...get().wishlistItems, item];
    set({ wishlistItems: updated });
    localStorage.setItem('wishlist', JSON.stringify(updated));
  },

  removeFromWishlist: (id) => {
    const updated = get().wishlistItems.filter(item => item.id !== id);
    set({ wishlistItems: updated });
    localStorage.setItem('wishlist', JSON.stringify(updated));
  },

  isInWishlist: (id) => get().wishlistItems.some(item => item.id === id),
}));
