
import { useCart } from "../../Store/cartStore";
import { ArrivalData } from "../../Data/homeData";
import { CartSummary } from "./CartSummary";
import { CouponBox } from "./CouponBox";

export const CartPage = ({ onNext }: { onNext: () => void }) => {
  const { cartItem, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const getProductImage = (id: number) => {
    return ArrivalData.find((item) => item.id === id)?.image || "https://via.placeholder.com/80";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Side: Product List & Coupon */}
      <div className="lg:col-span-2">
        {/* Headers */}
        <div className="hidden md:grid grid-cols-5 gap-4 text-left text-gray-500 font-medium mb-4">
          <span className="col-span-2 Inter text-text12">Product</span>
          <span className="Inter text-text12">Quantity</span>
          <span className="Inter text-text12">Price</span>
          <span className="Inter text-text12">Subtotal</span>
        </div>

        {/* Product Items */}
        <div className="space-y-6">
          {cartItem.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b pb-4 Inter text-text123">
              {/* Product Info */}
              <div className="col-span-2 flex items-center gap-4">
                <img src={getProductImage(item.id)} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500 ">Color: {item.color || "N/A"}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-gray-400 hover:text-red-500 mt-1">
                    ✕ Remove
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center border rounded-md w-fit ">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1">+</button>
              </div>

              {/* Price */}
              <span className="Inter text-text4">${item.price.toFixed(2)}</span>

              {/* Subtotal */}
              <span className="Inter text-text11">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <CouponBox />
      </div>

      {/* Right Side: Cart Summary */}
      <div className="lg:col-span-1">
        <CartSummary />
        <button
          onClick={onNext}
          disabled={cartItem.length === 0}
          className="mt-6 w-full bg-black text-white py-3 rounded-md Inter text-button-md hover:bg-gray-800 disabled:bg-gray-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};