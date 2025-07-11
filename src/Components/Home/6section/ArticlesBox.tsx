import { GoArrowRight } from "react-icons/go";

interface Props {
    img: string;
    title: string;
    btn: string;
}

const ArticlesBox = ({ img, title, btn }: Props) => {
    return (
        <div className="w-full max-w-[357px] max-h-[413px] flex flex-col gap-4">
            <img src={img} className="w-[357px] h-[325px]" />
            <div className="flex flex-col gap-2 w-[352px] h-[64px]">
                <p className="text-h7 Poppins">{title}</p>
                <button className="group w-[110px] mt-2 flex items-center border-b border-black text-button-sm Inter">
          {btn}
          <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
            </div>
        </div>
    );
};

export default ArticlesBox;
