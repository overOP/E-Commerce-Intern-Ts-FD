import { GoArrowRight } from "react-icons/go";

interface Props {
  sale: string;
  title: string;
  paragraph: string;
  button: string;
}

const BannerText = ({ sale, title, paragraph, button }: Props) => {
  return (
    <div className="max-w-[452px] space-y-4 ">
      <p className="text-text5 text-secondary-blue Inter w-[452px]">{sale}</p>
      <h1 className="text-h4 Poppins">{title}</h1>
      <p className="text-text4 text-neutral-7 Inter">{paragraph}</p>
      {button && (
        <button className="group mt-2 flex items-center border-b border-black text-button-sm Inter">
          {button}
          <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
};

export default BannerText;
