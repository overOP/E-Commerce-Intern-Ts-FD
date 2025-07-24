import { BannerData } from "../../../Data/homeData";
import Banner from "./Banner";

const BannerGrid = () => (
  <div className="h-auto bg-white flex justify-center">
    <div className="w-full max-w-[1440px] px-8 md:px-12 lg:px-[160px]">
      <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:gap-6">
        {BannerData.map((item, idx) => (
          <div key={item.id} className={idx === 0 ? "md:row-span-2" : ""}>
            <Banner
              index={idx}
              title={item.title}
              button={item.button}
              img={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BannerGrid;
