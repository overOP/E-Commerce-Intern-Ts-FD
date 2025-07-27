
import { useState } from "react";
import { StepProgress } from "./StepProgress";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderCompletePage } from "./OrderCompletePage";

export const MainCartFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev > 0 ? prev - 1 : 0);
  
  // Allows clicking on previous steps in the progress bar
  const goToStep = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-center text-4xl font-bold mb-12">
          {currentStep === 0 && "Cart"}
          {currentStep === 1 && "Check Out"}
          {currentStep === 2 && "Complete!"}
        </h1>

        <StepProgress currentStep={currentStep} onStepClick={goToStep} />

        <div className="mt-12">
          {currentStep === 0 && <CartPage onNext={nextStep} />}
          {currentStep === 1 && <CheckoutPage onNext={nextStep} onBack={prevStep} />}
          {currentStep === 2 && <OrderCompletePage />}
        </div>
      </div>
    </div>
  );
};