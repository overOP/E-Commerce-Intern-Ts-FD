// ProductNav.tsx
import { productData } from "../../../Data/productData";


const ProductNav = () => {
  return (
    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-1">
      {productData.map((item) => (
        <button key={item.id} className="flex items-center gap-1">
          <a href={item.url} className="hover:text-gray-900">
            {item.title}
          </a>
        </button>
      ))}
    </div>
  );
};

export default ProductNav;
