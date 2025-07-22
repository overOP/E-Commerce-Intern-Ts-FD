import { Banner1Data } from "../../../Data/contact";
import BannerImg from "./BannerImg";
import BannerText from "./BannerText";
import Nav from "./Nav";
import Text from "./Text";

const BannerMain = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
      <Nav/>
      <Text/>
      {Banner1Data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 bg-[#f3f5f7]"
        >
          <div className="w-full md:w-1/2">
            <BannerText
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
