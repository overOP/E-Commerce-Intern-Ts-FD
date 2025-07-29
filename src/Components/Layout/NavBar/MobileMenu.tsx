import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { useWishlist } from "../../../Store/wishlistStore";

import { navData } from "../../../Data/navData";
import shopping from "../../../assets/Icon/shopping bag.png";

interface Props {
  cartCount: number;
  onClose: () => void;
}

const MobileMenu = ({ cartCount, onClose }: Props) => {
  const [openLinks, setOpenLinks] = useState<Record<number, boolean>>({});

  const toggleLink = (id: number) =>
    setOpenLinks((prev) => ({ ...prev, [id]: !prev[id] }));

  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* ───────── Header ───────── */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <span className="text-2xl font-light tracking-wider">
          3legant<span className="text-gray-500">.</span>
        </span>
        <button onClick={onClose} className="text-gray-700">
          <MdClose size={24} />
        </button>
      </div>

      {/* ───────── Search pill ───────── */}
      <div className="px-6 pb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* ───────── Navigation links ───────── */}
      <nav className="flex-1 overflow-y-auto">
        {navData.map(({ id, title, url }) => (
          <React.Fragment key={id}>
            <NavLink
              to={url}
              onClick={onClose}
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center justify-between px-6 py-4 ${
                  isActive ? "text-black font-medium" : "text-gray-700"
                }`
              }
            >
              {title}
              {["Shop", "Product"].includes(title) && (
                <FaChevronDown
                  size={14}
                  className={`transition-transform ${
                    openLinks[id] ? "rotate-180" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLink(id);
                  }}
                />
              )}
            </NavLink>
            <div className="border-b border-gray-200" />
          </React.Fragment>
        ))}
      </nav>

      {/* ───────── Footer (cart / wishlist / sign‑in / socials) ───────── */}
      <div className="px-6 py-8 space-y-6">
        {/* cart row */}
        <div className="flex items-center justify-between">
          <span>Cart</span>
          <div className="relative">
            <img src={shopping} alt="cart" className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div className="border-b border-gray-200" />

        {/* wishlist row */}
        <div className="flex items-center justify-between">
          <span>Wishlist</span>
          <Link
            to="/"
            className="relative text-gray-600 hover:text-black"
          >
            <img src="/src/assets/Icon/Shape.png" alt="wishlist" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
        <div className="border-b border-gray-200" />

        {/* sign‑in button */}
        <button className="w-full bg-black text-white py-3 rounded-md">
          Sign In
        </button>

        {/* socials */}
        <div className="flex gap-6 text-gray-800">
          <IoLogoInstagram size={20} />
          <SlSocialFacebook size={20} />
          <PiYoutubeLogoLight size={20} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

