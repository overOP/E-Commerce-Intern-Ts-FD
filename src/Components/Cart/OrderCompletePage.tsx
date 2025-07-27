
import { useCart } from "../../Store/cartStore";
import { ArrivalData } from "../../Data/homeData";

export const OrderCompletePage = () => {
  const { cartItem } = useCart(); 
  
  // Dummy data matching the image
  const orderDetails = {
    code: "#0123_45678",
    date: "October 19, 2023",
    total: "$1,345.00",
    paymentMethod: "Credit Card"
  };

  const getProductImage = (id: number) => {
    return ArrivalData.find((item) => item.id === id)?.image || "https://via.placeholder.com/80";
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center text-center">
      <div className="border rounded-lg p-8 md:p-12 w-full">
        <h2 className="text-3xl font-bold">Thank you! 🎉</h2>
        <p className="text-gray-500 mt-2">Your order has been received</p>

        <div className="flex justify-center gap-4 my-8">
            {cartItem.map(item => (
                <div key={item.id} className="relative">
                    <img src={getProductImage(item.id)} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                        {item.quantity}
                    </span>
                </div>
            ))}
        </div>

        <div className="text-left space-y-4 border-t pt-6">
            <div className="flex justify-between">
                <span className="text-gray-500">Order code:</span>
                <span className="font-semibold">{orderDetails.code}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-semibold">{orderDetails.date}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-semibold">{orderDetails.total}</span>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Payment method:</span>
                <span className="font-semibold">{orderDetails.paymentMethod}</span>
            </div>
        </div>
      </div>
       <button className="mt-8 w-full max-w-xs bg-black text-white py-3 rounded-full font-bold text-lg hover:bg-gray-800">
        Purchase history
      </button>
    </div>
  );
};