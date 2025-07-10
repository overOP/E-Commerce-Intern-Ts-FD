import { mainSectionData } from "../../../Data/homeData";

const MainHeading = () => (
    <div className="w-full lg:max-w-[1128px] mx-auto">
  <div className="flex flex-col gap-6 ml-5">
    <h2 className="leading-tight">
      <span className="block text-3xl Poppins tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {mainSectionData.title.part1}
        <span className="text-primary">
          {mainSectionData.title.separator}
        </span>
      </span>
      <span className="block text-3xl Poppins tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {mainSectionData.title.part2}
      </span>
    </h2>

    <p
      className="Inter max-w-xl text-text4 text-gray-600 sm:text-lg lg:absolute lg:mt-[30px] lg:text-text2 lg:ml-[35rem]
                 md:absolute md:mt-[7px]  md:text-text3  md:ml-[25rem]"
      dangerouslySetInnerHTML={{ __html: mainSectionData.description.text }}
    />
  </div></div>
);

export default MainHeading;
