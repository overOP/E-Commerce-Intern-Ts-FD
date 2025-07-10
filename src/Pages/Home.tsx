import MainSlider  from "../Components/Home/1section/MainSlider";
import MainHeading from "../Components/Home/1section/MainHeading";
import BannerGrid  from "../Components/Home/2section/BannerGrid";
import ArrivalsSection from "../Components/Home/3section/ArrivalsSection";
import ValuesMain from "../Components/Home/4section/ValuesMain";
import BannerMain from "../Components/Home/5section/BannerMain";


const Home = () => (
  <section className="flex flex-col gap-16">
    <MainSlider />
    <MainHeading />
    {/* banner section */}
    <BannerGrid />
    <ArrivalsSection />
    {/* 4th section */}
    <ValuesMain/>
    {/* 5th section */}
    <BannerMain/>
  </section>
);

export default Home;
