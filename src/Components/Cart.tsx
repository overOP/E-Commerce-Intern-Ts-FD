import { useCart } from "../Store/cartStore";
import { ArrivalData } from "../Data/homeData";

// Optional but recommended: Type for a cart item
interface CartItem {
  id: number;
  name?: string;
  price: number | string;
  quantity: number;
  image?: string;
}

const Cart = () => {
  const cart: CartItem[] = useCart((state) => state.cartItem);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  const getProductImage = (id: number) => {
    const found = ArrivalData.find((item) => item.id === id);
    return found?.image || "";
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <main className="flex justify-center min-h-screen p-4 bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold text-[#d4492b] mb-4 text-center">
          Your Cart ({totalItems})
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-400 text-sm mt-2">
            Your added items will appear here
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => {
                const price = Number(item.price);

                return (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 bg-[#fafafa] p-3 rounded-md"
                  >
                    <img
                      src={item.image || getProductImage(item.id)}
                      alt={item.name || "Product Image"}
                      className="w-14 h-14 object-cover rounded-md border border-gray-200"
                    />

                    <div className="flex-1">
                      <h4 className="font-medium text-sm">
                        {item.name || "Unnamed Item"}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        ${price.toFixed(2)} × {item.quantity} = $
                        {(price * item.quantity).toFixed(2)}
                      </p>

                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          −
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Total Price Section */}
            <div className="mt-6 text-right text-sm text-gray-700 font-medium">
              Total: <span className="text-black">${totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
