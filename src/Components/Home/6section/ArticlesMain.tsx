import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";
import ArticlesBox from "./ArticlesBox";
import { ArticlesData } from "../../../Data/homeData";

const ArticlesMain = () => {
  return (
    <div className="w-full max-w-[1440px] px-8 md:px-12 lg:px-[160px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-col">
          <h2 className="text-2xl sm:text-3xl Poppins">Articles</h2>
        </div>
        <Link
          to="/products"
          className="group flex items-center gap-1 text-button-sm Inter border-b border-black"
        >
          More Articles <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1121px]">
        {ArticlesData.map((item) => (
          <ArticlesBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesMain;

