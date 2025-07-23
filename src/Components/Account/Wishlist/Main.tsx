// Components/Account/Wishlist/Main.tsx
import { useWishlist } from "../../../Store/wishlistStore";
import Body from "./Body";

const Main = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto">
      <h2 className="Inter text-lg text-gray-700 mb-6">Your Wishlist</h2>
      <Body 
        items={wishlistItems}
        onRemove={removeFromWishlist}
      />
    </div>
  );
};

export default Main;