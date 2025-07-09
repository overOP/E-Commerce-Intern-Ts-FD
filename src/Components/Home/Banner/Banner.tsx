import { GoArrowRight } from "react-icons/go";

interface Props {
  title: string;
  button: string;
  img: string;
  index: number;
  icon?: string;
}

const Banner = ({ title, button, img, index, icon }: Props) => {
  const isFirst = index === 0;

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-[#F5F8FA]
        ${isFirst
          ? "h-[377px] md:h-full lg:h-[664px] lg:w-[548px]"
          : "h-[200px] md:h-[290px] lg:h-[320px] lg:ml-[34px]"}`}
    >
      {/* inner flex wrapper */}
      <div
        className={`flex gap-2 sm:gap-4 p-8
          ${isFirst ? "flex-col" : "flex-row md:flex-col lg:flex-row"}`}
      >
        {/* text + button */}
        <div className={isFirst ? "" : "mt-16 md:mt-0 lg:mt-[142px]"}>
          <h2 className="text-h6 font-semibold leading-none flex items-center gap-2">
            {icon && <img src={icon} alt="" className="h-5 w-5" />}
            {title}
          </h2>
          <button className="group mt-2 w-[6rem] flex items-center border-b border-black text-sm font-medium">
            {button}
            <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* image */}
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`object-contain
            ${isFirst
              ? "w-[220px] sm:w-[260px] md:w-[300px] lg:w-[480px]"
              : "w-[180px] sm:w-[200px] md:w-[220px] lg:w-[320px]"}`}
        />
      </div>
    </div>
  );
};

export default Banner;
