import MainSlider  from "../Components/Home/Main/MainSlider";
import MainHeading from "../Components/Home/Main/MainHeading";
import BannerGrid  from "../Components/Home/Banner/BannerGrid";
import ArrivalsSection from "../Components/Home/Arrivals/ArrivalsSection";

const Home: React.FC = () => (
  <section className="flex flex-col gap-16">
    <MainSlider />
    <MainHeading />
    {/* banner section */}
    <BannerGrid />
    <ArrivalsSection />
  </section>
);

export default Home;
