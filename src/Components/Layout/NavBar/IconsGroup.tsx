import { Link } from "react-router";
import { MdClose } from "react-icons/md";
import { useWishlist } from "../../../Store/wishlistStore";

import shopping from "../../../assets/Icon/shopping bag.png";
import profile from "../../../assets/Icon/Vector copy 2.png";
import searchIc from "../../../assets/Icon/Vector copy.png";


interface Props {
  cartCount: number;
  searchOpen: boolean;
  onToggleSearch: () => void;
}

const IconsGroup = ({ cartCount, searchOpen, onToggleSearch }: Props) => {
  // Get wishlist items count from store
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;

  return (
    <div className="flex items-center space-x-6">
      {/* search toggle (desktop) */}
      <button onClick={onToggleSearch} className="text-gray-600 hidden md:flex">
        {searchOpen ? <MdClose size={22} /> : <img src={searchIc} alt="search" />}
      </button>

      {/* wishlist */}
      <Link
        to="/"
        className="relative text-gray-600 hover:text-black hidden md:flex"
      >
      <img src="/src/assets/Icon/Shape.png"/>
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </Link>

      {/* profile (placeholder) */}
      <Link to="/account">
        <button className="hidden md:flex">
          <img src={profile} alt="profile" />
        </button>
      </Link>

      {/* cart */}
      <Link
        to="/cart"
        className="relative text-gray-600 hover:text-black hidden md:flex"
      >
        <img src={shopping} alt="cart" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default IconsGroup;