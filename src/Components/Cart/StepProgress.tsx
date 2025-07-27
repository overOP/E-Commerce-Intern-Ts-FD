
import { FaCheck } from "react-icons/fa";

interface StepProgressProps {
  currentStep: number;
  onStepClick: (index: number) => void;
}

const steps = ["Shopping cart", "Checkout details", "Order complete"];

export const StepProgress = ({ currentStep, onStepClick }: StepProgressProps) => {
  return (
    <div className="flex justify-center items-start max-w-2xl mx-auto Inter text-text12">
      {steps.map((step, idx) => {
        const isComplete = currentStep > idx;
        const isActive = currentStep === idx;
        const isFuture = currentStep < idx;

        return (
          <div key={idx} className="flex-1 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${
                  isComplete ? "bg-black text-white" : ""
                } ${isActive ? "bg-black text-white" : ""} ${
                  isFuture ? "bg-gray-200 text-gray-400" : ""
                }`}
                onClick={() => onStepClick(idx)}
              >
                {isComplete ? <FaCheck /> : idx + 1}
              </div>

              {/* Step Label and Active Indicator */}
              <div className="text-center mt-2 w-full">
                <span className={`text-sm md:text-base ${isActive ? 'font-bold' : 'text-gray-500'}`}>
                  {step}
                </span>
                {isActive && (
                  <div className="mt-2 h-1 w-full bg-black"></div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};