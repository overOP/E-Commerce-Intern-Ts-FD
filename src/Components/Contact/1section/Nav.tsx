import { navData } from "../../../Data/contact";
import { FaAngleRight } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {navData.map(({ id, title, url }) => (
        <a
          key={id}
          href={url}
          className="text-gray-800 hover:text-gray-600 flex items-center gap-1 text-button-sm sm:text-button-xs Inter"
        >
          {title}
          <FaAngleRight />
        </a>
      ))}
    </div>
  );
};

export default Nav;
