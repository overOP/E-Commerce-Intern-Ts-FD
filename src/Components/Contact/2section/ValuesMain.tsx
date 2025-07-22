import { Data } from "../../../Data/contact";
import ValuesBox from "./Valuesbox";

const ValuesMain = () => {
  return (
    <div className="w-full max-w-[1440px] px-4 md:px-12 lg:px-[160px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Data.map((item) => (
        <ValuesBox key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ValuesMain;
