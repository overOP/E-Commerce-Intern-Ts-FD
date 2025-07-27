
export const CouponBox = () => {
  return (
    <div className="mt-8">
      <h4 className="text-h7 mb-2 Poppins">Have a coupon?</h4>
      <p className="text-gray-500 text-text5 mb-2 Inter">Add your code for an instant cart discount.</p>
      <div className="flex items-center w-full max-w-[424px] gap-2">
        <img 
          src="/src/assets/Icon/Vector.png" 
          alt="search" 
          className="w-4 h-4" 
        />
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border p-2 rounded-md text-button-sm Inter"
        />
        <button className="bg-black text-white px-6 py-2 rounded-md text-button-sm Inter whitespace-nowrap">
          Apply
        </button>
      </div>
    </div>
  );
};