
import { useCart } from "../../Store/cartStore";
import { ArrivalData } from "../../Data/homeData";

export const CheckoutOrderSummary = () => {
  const { cartItem, increaseQuantity, decreaseQuantity } = useCart();

  const getProductImage = (id: number) => {
    return ArrivalData.find((item) => item.id === id)?.image || "https://via.placeholder.com/64";
  };
  
  // Dummy values from the image
  const couponDiscount = 25.00;
  const shippingCost = 0.00;
  const subtotal = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - couponDiscount + shippingCost;


  return (
    <div className="border border-gray-200 rounded-lg p-6 h-fit">
      <h3 className="font-bold text-lg mb-4">Order summary</h3>

      <div className="space-y-4">
        {cartItem.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <img src={getProductImage(item.id)} alt={item.name} className="w-20 h-20 object-cover rounded"/>
            <div className="flex-grow">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <div className="flex items-center border rounded-md w-fit mt-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1">+</button>
              </div>
            </div>
            <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2 mt-6">
        <input type="text" placeholder="Input" defaultValue="JenkateMW" className="border p-2 rounded-md w-full text-sm" />
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm">Apply</button>
      </div>

      <div className="border-t mt-6 pt-4 space-y-2">
        <div className="flex justify-between items-center text-gray-600">
          <span>Discount</span>
          <div className="flex items-center gap-2">
            <span className="text-red-500">-${couponDiscount.toFixed(2)}</span>
            <button className="text-gray-400 text-sm">[Remove]</button>
          </div>
        </div>
         <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};