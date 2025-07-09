import { create } from "zustand";

/* ---------------------------------- Types --------------------------------- */

/** Shape of a single product in the cart */
export interface CartItem {
  id: string | number;
  /** Other product props you care about (price, image, etc.) */
  name?: string;
  price?: number;
  image?: string;
  /** Always controlled by the store */
  quantity: number;
}

/** State + actions */
interface CartState {
  /* ---- state ---- */
  cartItem: CartItem[];
  cartCount: number;

  /* ---- actions ---- */
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: CartItem["id"]) => void;
  increaseQuantity: (id: CartItem["id"]) => void;
  decreaseQuantity: (id: CartItem["id"]) => void;
  clearCart: () => void;
}

/* ------------------------------- The store -------------------------------- */

export const useCart = create<CartState>((set) => ({
  /* --------------------------- initial state -------------------------- */
  cartItem: [],
  cartCount: 0,

  /* ----------------------------- actions ------------------------------ */
  addToCart: (item) =>
    set((state) => {
      const idx = state.cartItem.findIndex((i) => i.id === item.id);
      const updated = [...state.cartItem];

      if (idx !== -1) {
        // item exists – bump quantity
        updated[idx].quantity += 1;
      } else {
        // new item – start at 1
        updated.push({ ...item, quantity: 1 });
      }

      return {
        cartItem: updated,
        cartCount: updated.reduce((acc, cur) => acc + cur.quantity, 0),
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updated = state.cartItem.filter((i) => i.id !== id);
      return {
        cartItem: updated,
        cartCount: updated.reduce((acc, cur) => acc + cur.quantity, 0),
      };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updated = state.cartItem.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      );
      return {
        cartItem: updated,
        cartCount: updated.reduce((acc, cur) => acc + cur.quantity, 0),
      };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updated = state.cartItem
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
      return {
        cartItem: updated,
        cartCount: updated.reduce((acc, cur) => acc + cur.quantity, 0),
      };
    }),

  clearCart: () => set({ cartItem: [], cartCount: 0 }),
}));
