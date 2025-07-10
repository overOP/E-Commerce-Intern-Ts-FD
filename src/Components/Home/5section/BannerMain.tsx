import { Banner5Data } from "../../../Data/homeData";
import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

const BannerMain = () => {
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-[160px] mx-auto space-y-10">
      {Banner5Data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 bg-[#f3f5f7]"
        >
          <div className="w-full md:w-1/2">
            <BannerText
              sale={item.sale}
              title={item.title}
              paragraph={item.paragraph}
              button={item.button}
            />
          </div>
          <div className="w-full md:w-1/2">
            <BannerImg img={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerMain;
