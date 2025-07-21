import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import { products } from "../../../Data/shopData";


const priceRanges = [
  { label: "$0.00 - 99.99", min: 0, max: 99.99 },
  { label: "$100.00 - 199.99", min: 100, max: 199.99 },
  { label: "$200.00 - 299.99", min: 200, max: 299.99 },
  { label: "$300.00 - 399.99", min: 300, max: 399.99 },
  { label: "$400.00+", min: 400, max: Infinity },
];

const LivingRoom = () => {
  const [layout, setLayout] = useState<"grid-2" | "grid-3" | "grid-4" | "list">("grid-3");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([0, 1, 2]);
  const [showFilter, setShowFilter] = useState(false);

  const togglePriceRange = (index: number) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const filteredProducts = products.filter((product) => {
    const priceNum = parseFloat(product.price.replace(/[$,]/g, ""));
    return selectedPriceRanges.some((rangeIndex) => {
      const range = priceRanges[rangeIndex];
      return priceNum >= range.min && priceNum <= range.max;
    });
  });

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showFilter]);

  return (
    <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 flex space-x-6 relative">

      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-black text-white px-4 py-2 rounded shadow"
        onClick={() => setShowFilter(true)}
        aria-label="Open filter"
      >
        Filter
      </button>


      {showFilter && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowFilter(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          bg-white p-6 rounded-md shadow-md
          w-64
          fixed top-0 left-0 h-full z-50
          transform transition-transform duration-300 ease-in-out
          sm:static sm:translate-x-0 sm:w-1/5 sm:shadow-none sm:p-4
          ${showFilter ? "translate-x-0" : "-translate-x-full"}
        `}
        role="region"
        aria-label="Filter options"
      >

        <button
          className="sm:hidden mb-6 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          onClick={() => setShowFilter(false)}
          aria-label="Close filter"
        >
          Close
        </button>

        <div className="flex gap-2 mb-4 items-center">
          <img src="/src/assets/Icon/filter 05.svg" alt="Filter icon" />
          <h2 className="text-tsxt3 Inter text-lg font-semibold">Filter</h2>
        </div>

        <div className="mb-8">
          <h3 className="Inter text-tsxt10 mb-2 font-semibold">CATEGORIES</h3>
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
                className={cat === "Living Room" ? "font-semibold underline" : ""}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="Inter text-text12 mb-2 font-semibold">PRICE</h3>
          <ul className="space-y-2 text-text13 Inter">
            {priceRanges.map((range, i) => (
              <li key={range.label}>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={selectedPriceRanges.includes(i)}
                    onChange={() => togglePriceRange(i)}
                  />
                  <span>{range.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="w-full sm:w-4/5">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-text10 Inter text-2xl font-semibold">Living Room</h1>
          <div className="w-[296px] flex items-center justify-between">
            <label className="text-text12 Inter flex gap-1 cursor-pointer select-none">
              Sort by
              <FaAngleDown className="mt-1" />
            </label>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/Icon/s1.png"
                onClick={() => setLayout("grid-4")}
                className="cursor-pointer"
                alt="4 columns"
              />
              <img
                src="/src/assets/Icon/s2.png"
                onClick={() => setLayout("grid-2")}
                className="cursor-pointer"
                alt="2 columns"
              />
              <img
                src="/src/assets/Icon/s3.png"
                onClick={() => setLayout("grid-3")}
                className="cursor-pointer"
                alt="3 columns"
              />
              <img
                src="/src/assets/Icon/s4.png"
                onClick={() => setLayout("list")}
                className="cursor-pointer"
                alt="List view"
              />
            </div>
          </div>
        </div>


        <div
          className={`grid gap-6 ${
            layout === "grid-2"
              ? "grid-cols-1 sm:grid-cols-2"
              : layout === "grid-3"
              ? "grid-cols-1 sm:grid-cols-3"
              : layout === "grid-4"
              ? "grid-cols-1 sm:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className={`group border p-4 rounded-md relative transition duration-300 hover:shadow-lg ${
                layout === "list" ? "flex gap-4 items-center" : ""
              }`}
            >
              <div className="absolute top-2 left-3 text-xs Inter px-2 py-1 rounded bg-gray-200">
                {product.tag}
              </div>
              <div className="absolute top-9 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>

              {product.heart && (
                <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <Heart size={16} className="text-gray-400 hover:text-red-600" />
                </div>
              )}

              <img
                src={product.image}
                alt={product.title}
                className={`${
                  layout === "list" ? "w-36 h-24" : "w-full h-40"
                } object-contain ${layout === "list" ? "mb-0" : "mb-4"}`}
              />

              <div className={`${layout === "list" ? "flex-1" : ""}`}>
                <div className="mt-2 text-black-500 text-sm">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>

                <h2 className="Inter text-tex12">{product.title}</h2>

                <div className="text-sm text-gray-500">
                  {product.oldPrice ? (
                    <span>
                      <span className="line-through mr-2">{product.oldPrice}</span>
                      <span className="text-black font-bold">{product.price}</span>
                    </span>
                  ) : (
                    <span className="font-bold">{product.price}</span>
                  )}
                </div>

                {product.button && (
                  <button className="w-full Inter mt-4 border bg-black text-white border-black py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    {product.button}
                  </button>
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
