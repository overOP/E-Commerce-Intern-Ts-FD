import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  color?: string;
}

interface CartState {
  cartItem: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cartItem: [],
      addToCart: (item) => {
        const cart = get().cartItem;
        const existing = cart.find((i) => i.id === item.id);
        if (existing) {
          set({
            cartItem: cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            cartItem: [...cart, { ...item, quantity: 1 }],
          });
        }
      },
      removeFromCart: (id) => {
        const updated = get().cartItem.filter((i) => i.id !== id);
        set({ cartItem: updated });
        if (updated.length === 0) localStorage.removeItem("cart-storage");
      },
      increaseQuantity: (id) => {
        set((state) => ({
          cartItem: state.cartItem.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }));
      },
      decreaseQuantity: (id) => {
        const updated = get()
          .cartItem.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0);
        set({ cartItem: updated });
        if (updated.length === 0) localStorage.removeItem("cart-storage");
      },
      clearCart: () => {
        set({ cartItem: [] });
        localStorage.removeItem("cart-storage");
      },
    }),
    {
      name: "cart-storage",
      // @ts-ignore
      getStorage: () => localStorage,
    }
  )
);
