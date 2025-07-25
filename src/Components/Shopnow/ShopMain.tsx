import { useParams } from "react-router";
import CusMain from "./Customer/CusMain";
import ShopnowMain from "./ShopnowMain";

const ShopMain = () => {
  const { id } = useParams<{ id: string }>(); // Type the route param

  if (!id) {
    return <div>Product ID not found.</div>; // Handle missing ID (optional)
  }

  return (
    <div className="flex flex-col gap-16 overflow-hidden">
      <ShopnowMain />
      <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
        <CusMain productId={id} />
      </div>
    </div>
  );
};

export default ShopMain;
