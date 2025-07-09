import { useState } from "react";
import Notification from "../Components/Layout/Notification";
import { noti } from "../Data/navData";
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
const NotiBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative flex w-full items-center justify-center bg-primary-light py-2 px-4">
      <div className="flex flex-wrap items-center gap-4">
        {noti.map((item) => (
          <Notification key={item.id} icon={item.image} text={item.title} />
        ))}
        <button
          className="hidden md:inline-flex items-center text-secondary-blue border-b border-secondary-blue text-button-xs"
        >
          Shop Now
          <GoArrowRight className="ml-1" />
        </button>
      </div>
      <button
        aria-label="Dismiss notification bar"
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 md:right-4 lg:right-8"
      >
        <RxCross1 className="h-4 w-4 text-text7" />
      </button>
    </div>
  );
};
export default NotiBar;
