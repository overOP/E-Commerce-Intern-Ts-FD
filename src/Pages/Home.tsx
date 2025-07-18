import MainSlider  from "../Components/Home/1section/MainSlider";
import MainHeading from "../Components/Home/1section/MainHeading";
import BannerGrid  from "../Components/Home/2section/BannerGrid";
import ArrivalsSection from "../Components/Home/3section/ArrivalsSection";
import ValuesMain from "../Components/Home/4section/ValuesMain";
import BannerMain from "../Components/Home/5section/BannerMain";
import ArticlesMain from "../Components/Home/6section/ArticlesMain";



const Home = () => (
  <section className="flex flex-col gap-16 overflow-hidden">
    {/* 1st section */}
    <MainSlider />
    <MainHeading />
    {/* 2nd section */}
    <BannerGrid />
    {/* 3rd section */}
    <ArrivalsSection />
    {/* 4th section */}
    <ValuesMain/>
    {/* 5th section */}
    <BannerMain/>
    {/* 6th section */}
    <ArticlesMain/>
  </section>
);

export default Home;
