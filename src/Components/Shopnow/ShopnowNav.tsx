import {Data} from "../../Data/shopnowData";
import {FaAngleRight } from "react-icons/fa";

const ShopnowNav = () => {
  return (
    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-1">
      {Data.map((item) => (
        <button key={item.id} className="flex items-center gap-1">
          <a href={item.url} className="hover:text-gray-900 flex items-center">
            {item.title}<FaAngleRight/>
          </a>
        </button>
      ))}
    </div>
  )
}

export default ShopnowNav