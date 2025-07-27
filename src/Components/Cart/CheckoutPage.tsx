
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutOrderSummary } from "./CheckoutOrderSummary";

interface CheckoutPageProps {
  onNext: () => void;
  onBack: () => void;
}

export const CheckoutPage = ({ onNext }: CheckoutPageProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <CheckoutForm onNext={onNext} />
      <CheckoutOrderSummary />
    </div>
  );
};