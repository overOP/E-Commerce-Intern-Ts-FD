// Main.tsx
import { ordersData } from "../../../Data/account"
  
  const Main = () => {
    return (
      <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto">
        <h2 className="Inter text-lg text-gray-700 mb-6">Orders History</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-50 p-4 font-medium text-gray-700">
            <div>Number ID</div>
            <div>Dates</div>
            <div>Status</div>
            <div>Price</div>
          </div>
          
          {ordersData.map((order, index) => (
            <div 
              key={order.id} 
              className={`grid grid-cols-4 p-4 ${index !== ordersData.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="text-blue-600 font-medium">{order.id}</div>
              <div>{order.date}</div>
              <div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {order.status}
                </span>
              </div>
              <div className="font-medium">{order.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Main;