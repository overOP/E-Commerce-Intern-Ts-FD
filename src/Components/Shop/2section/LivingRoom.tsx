import { Heart } from "lucide-react";
import { products } from "../../../Data/shopData";
import { FaAngleDown } from "react-icons/fa";
interface Product {
  tag: string;
  discount: string;
  heart: boolean;
  image: string;
  title: string;
  oldPrice?: string;
  price: string;
  rating: number;
  button: string;
}

const LivingRoom = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 flex space-x-6">
      {/* Sidebar */}
      <aside className="w-1/5">
        <div className="flex gap-2">
          <img src="/src/assets/Icon/filter 05.svg" className=" mb-4" />
          <h2 className="text-tsxt3 Inter mb-4">Filter</h2>
        </div>
        <div className="mb-6">
          <h3 className="Inter text-tsxt10 mb-2">CATEGORIES</h3>
          <ul className="space-y-1 text-text7 Inter">
            {[
              "All Rooms",
              "Living Room",
              "Bedroom",
              "Kitchen",
              "Bathroom",
              "Dining",
              "Outdoor",
            ].map((cat) => (
              <li
                key={cat}
                className={
                  cat === "Living Room" ? "font-semibold underline" : ""
                }
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="Inter text-text12 mb-2">PRICE</h3>
          <ul className="space-y-1 text-text13 Inter">
            {[
              "$0.00 - 99.99",
              "$100.00 - 199.99",
              "$200.00 - 299.99",
              "$300.00 - 399.99",
              "$400.00+",
            ].map((range, i) => (
              <li key={range}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-black"
                    defaultChecked={i < 3}
                  />
                  <span>{range}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="w-4/5">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-text10 Inter">Living Room</h1>
          <div className="w-[296px] flex items-center justify-between">
            <label className="text-text12 Inter flex gap-1">
              Sort by
              <FaAngleDown className="mt-1" />
            </label>
            <div className="flex items-center gap-2">
                <img src="/src/assets/Icon/s1.png" />
                <img src="/src/assets/Icon/s2.png" />
                <img src="/src/assets/Icon/s3.png" />
                <img src="/src/assets/Icon/s4.png" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product: Product, idx: number) => (
            <div
              key={idx}
              className="group border  p-4 rounded-md relative transition duration-300 hover:shadow-lg"
            >
              <div className="absolute top-2 left-3 text-xs Inter px-2 py-1 rounded">
                {product.tag}
              </div>

              <div className="absolute top-9  bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>

              {product.heart && (
                <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Heart
                    size={16}
                    className="text-gray-400 hover:text-red-600"
                  />
                </div>
              )}

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
                            {product.button && (
                <button className="w-full Inter mt-4 border bg-black text-white border-black py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                  {product.button}
                </button>
              )}
              <div className="mt-2 text-black-500 text-sm">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <h2 className="Inter text-tex12">{product.title}</h2>

              <div className="text-sm text-gray-500">
                {product.oldPrice ? (
                  <span>
                    <span className="line-through mr-2">
                      {product.oldPrice}
                    </span>
                    <span className="text-black font-bold">
                      {product.price}
                    </span>
                  </span>
                ) : (
                  <span className="font-bold">{product.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="border border-black Inter text-button-sm px-4 py-2 rounded-full transition duration-200">
            Show more
          </button>
        </div>
      </main>
    </div>
  );
};

export default LivingRoom;
