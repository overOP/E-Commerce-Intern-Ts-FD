import { useCart } from "../Store/cartStore";
import { ArrivalData } from "../Data/homeData";

const Cart = () => {
  const cart = useCart((state) => state.cartItem);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  const getProductImage = (id: number) => {
    const found = ArrivalData.find((item) => item.id === id);
    return found?.image || "";
  };

  return (
    <main className="flex  justify-center min-h-screen p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold text-[#d4492b] mb-4 text-center">
          Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-400 text-sm mt-2">
            Your added items will appear here
          </div>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
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
                  <h4 className="font-medium text-sm">{item.name || "Unnamed Item"}</h4>
                  <p className="text-gray-500 text-xs">
                    ${item.price?.toFixed(2)} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                    >
                      -
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
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Cart;
