import { useState, useEffect } from "react";
import { useCart } from "../Store/cartStore";

import MobileBurger from "../Components/Layout/NavBar/MobileBurger";
import BrandLogo from "../Components/Layout/NavBar/BrandLogo";
import DesktopLinks from "../Components/Layout/NavBar/DesktopLinks";
import IconsGroup from "../Components/Layout/NavBar/IconsGroup";
import SearchInput from "../Components/Layout/NavBar/SearchInput";
import MobileSearchBar from "../Components/Layout/NavBar/MobileSearchBar";
import MobileMenu from "../Components/Layout/NavBar/MobileMenu";

const NavBar: React.FC = () => {
  const cartCount = useCart((state) =>
    state.cartItem.reduce((total, item) => total + item.quantity, 0)
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearch("");
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-[1120px] mx-auto flex justify-between items-center">
        <MobileBurger open={mobileOpen} onToggle={toggleMobile} />
        <BrandLogo />
        <DesktopLinks />
        <IconsGroup
          cartCount={cartCount}
          searchOpen={searchOpen}
          onToggleSearch={toggleSearch}
        />
      </div>

      {searchOpen && <SearchInput value={search} onChange={setSearch} />}
      {searchOpen && <MobileSearchBar value={search} onChange={setSearch} />}
      {mobileOpen && (
        <MobileMenu
          cartCount={cartCount}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
