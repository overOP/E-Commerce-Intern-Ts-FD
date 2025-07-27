
import { useState } from "react";
import { useCart } from "../../Store/cartStore";

export const CartSummary = () => {
  const { cartItem } = useCart();
  const [shippingMethod, setShippingMethod] = useState("free");

  const subtotal = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  let shippingCost = 0;
  if (shippingMethod === "express") shippingCost = 15.00;
  if (shippingMethod === "pickup") shippingCost = 21.00; 
  
  const total = subtotal + shippingCost;

  return (
    <div className="border border-gray-200 rounded-lg p-6 space-y-4">
      <h3 className="text-h7 Poppins">Cart summary</h3>
      
      <div className="space-y-3">
        <label className="flex justify-between items-center cursor-pointer p-3 border rounded-md">
          <div className="flex items-center gap-3">
            <input type="radio" name="shipping" checked={shippingMethod === 'free'} onChange={() => setShippingMethod('free')} className="form-radio"/>
            <span className="Inter text-text4">Free shipping</span>
          </div>
          <span className="Inter text-text4">$0.00</span>
        </label>
        <label className="flex justify-between items-center cursor-pointer p-3 border rounded-md">
           <div className="flex items-center gap-3">
            <input type="radio" name="shipping" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} className="form-radio"/>
            <span className="Inter text-text4">Express shipping</span>
          </div>
          <span className="Inter text-text4">+$15.00</span>
        </label>
        <label className="flex justify-between items-center cursor-pointer p-3 border rounded-md">
           <div className="flex items-center gap-3">
            <input type="radio" name="shipping" checked={shippingMethod === 'pickup'} onChange={() => setShippingMethod('pickup')} className="form-radio"/>
            <span className="Inter text-text4">Pick Up</span>
          </div>
          <span className="Inter text-text4">%21.00</span>
        </label>
      </div>
      
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-lg">
          <span className="Inter text-text5">Subtotal</span>
          <span className="Inter text-text12">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span className="Inter text-text12">Total</span>
          <span className="Inter text-text12">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};