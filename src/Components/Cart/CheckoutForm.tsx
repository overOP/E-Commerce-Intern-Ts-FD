
interface CheckoutFormProps {
    onNext: () => void;
  }
  
  export const CheckoutForm = ({ onNext }: CheckoutFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onNext();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">Contact Infomation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">FIRST NAME</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div>
              <label className="text-sm font-medium">LAST NAME</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">PHONE NUMBER</label>
              <input type="tel" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">EMAIL ADDRESS</label>
              <input type="email" className="w-full mt-1 p-2 border rounded-md" />
            </div>
          </div>
        </div>
  
        {/* Shipping Address */}
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">Shipping Address</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">STREET ADDRESS</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md" />
            </div>
            <div>
              <label className="text-sm font-medium">COUNTRY</label>
              <select className="w-full mt-1 p-2 border rounded-md bg-white">
                {/* Add countries here */}
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                  <label className="text-sm font-medium">TOWN / CITY</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">STATE</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" />
              </div>
            </div>
             <div>
                <label className="text-sm font-medium">ZIP CODE</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" />
              </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="diff-billing" className="form-checkbox" />
              <label htmlFor="diff-billing">Use a different billing address (optional)</label>
            </div>
          </div>
        </div>
  
        {/* Payment Method */}
         <div className="border border-gray-200 rounded-lg p-6 mb-6">
           <h3 className="font-bold text-lg mb-4">Payment method</h3>
           <div className="space-y-4">
              <div className="border rounded-md p-4">
                  <div className="flex items-center gap-3">
                      <input type="radio" name="payment" defaultChecked className="form-radio" />
                      <label>Pay by Card Credit</label>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="col-span-2">
                          <label className="text-sm font-medium">CARD NUMBER</label>
                          <input type="text" placeholder="1234 1234 1234 1234" className="w-full mt-1 p-2 border rounded-md" />
                      </div>
                      <div>
                          <label className="text-sm font-medium">EXPIRATION DATE</label>
                          <input type="text" placeholder="MM/YY" className="w-full mt-1 p-2 border rounded-md" />
                      </div>
                      <div>
                          <label className="text-sm font-medium">CVC</label>
                          <input type="text" placeholder="CVC code" className="w-full mt-1 p-2 border rounded-md" />
                      </div>
                  </div>
              </div>
               <div className="border rounded-md p-4 flex items-center gap-3">
                  <input type="radio" name="payment" className="form-radio" />
                  <label>Paypal</label>
              </div>
           </div>
         </div>
  
        <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold text-lg hover:bg-gray-800">
          Place Order
        </button>
      </form>
    );
  };