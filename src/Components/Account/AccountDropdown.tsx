"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { links } from "../../Data/account";

interface LinkType {
  id: string | number;
  title: string;
  url?: string;
  onClick?: () => void;
  onClickOnly?: boolean;
}
import { Link, useNavigate } from "react-router";

export const AccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link: LinkType) => {
    setOpen(false); 

    if (link.onClick) {
      link.onClick(); 
    }
    if (link.url && !link.onClickOnly) {
      navigate(link.url);
    }
  };

  return (
    <div className="w-full max-w-xs">
      {/* Mobile dropdown */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-[280px] h-[48px] flex justify-between items-center px-4 py-2 gap-[18px] bg-white border-2 border-[#6C7275] rounded-[8px]"
        >
          <span className="text-gray-700">Account</span>
          <ChevronDown className="text-gray-500 w-5 h-5" />
        </button>

        {open && (
          <ul className="mt-2 border border-gray-300 rounded-md shadow-sm bg-white">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => handleLinkClick(link)}
                className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop vertical list */}
      <aside className="hidden lg:block bg-gray-100 p-6 rounded-xl w-full">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold">Sofia Havertz</h2>
        </div>
        <nav className="space-y-3 text-left">
          <h1 className="Inter text-text12">Account</h1>
          <hr className="w-full border-neutral-4" />
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              onClick={link.onClick}
              className="block text-gray-700 hover:text-black"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};
