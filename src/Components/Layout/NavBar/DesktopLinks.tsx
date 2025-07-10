import { NavLink } from "react-router";
import { navData } from "../../../Data/navData";

const DesktopLinks = () => (
  <div className="hidden md:flex items-center space-x-8 Space">
    {navData.map(({ id, title, url }) => (
      <NavLink
        key={id}
        to={url}
        className={({ isActive }: { isActive: boolean }) =>
          `text-button-xs ${
            isActive ? "text-black font-medium " : "text-gray-500 hover:text-gray-800"
          }`
        }
      >
        {title}
      </NavLink>
    ))}
  </div>
);

export default DesktopLinks;
