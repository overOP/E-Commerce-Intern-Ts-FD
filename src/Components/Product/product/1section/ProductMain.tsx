import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { productData, productImages } from "../../../../Data/productData";

// Breadcrumb
const ProductNav = () => {
  return (
    <div className="text-sm text-gray-500 flex gap-1">
      {productData.map((item, index) => (
        <span key={item.id} className="flex items-center gap-1">
          <a href={item.url} className="hover:underline">
            {item.title}
          </a>
          {index < productData.length - 1 && (
            <span className="text-gray-400">
              <FaAngleRight className="text-xs" />
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

const ProductMain = () => {
  return (
    <div className="w-full lg:max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
      <ProductNav />

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE – Image Gallery */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {productImages.map((image, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden">
              <img
                src={image.image}
                alt={`Tray Table ${i + 1}`}
                className="w-[262px] h-[349px] object-cover rounded-lg"
              />
              {i === 0 && (
                <>
           <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium rounded">
                    NEW
                  </div>
                  <div className="absolute top-12 left-4 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                    -50%
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – Product Info */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Reviews + Title */}
          <div className="text-sm text-gray-600">
            ★★★★★ <span className="ml-1 text-gray-400">(11 Reviews)</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Tray Table</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm">
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </p>

          {/* Price */}
          <div className="text-2xl font-bold text-black">
            $199.00{" "}
            <span className="text-base line-through text-gray-400 ml-2">
              $400.00
            </span>
          </div>

          {/* Timer */}
          <div className="text-sm text-gray-600">
            Offer expires in:
            <div className="flex gap-2 mt-1 text-center">
              {["02", "12", "45", "05"].map((time, idx) => (
                <div
                  key={idx}
                  className="w-12 py-1 bg-gray-100 rounded text-sm"
                >
                  {time}
                  <br />
                  <span className="text-xs">
                    {["Days", "Hours", "Minutes", "Seconds"][idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Measurements */}
          <div className="text-sm text-gray-700 mt-2">
            Measurements: <span className="font-medium">17 1/2 × 20 5/8”</span>
          </div>

          {/* Color Picker */}
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-700 mb-1">
              Choose Color
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 border-2 border-black rounded bg-black"></div>
              <div className="w-8 h-8 border rounded bg-[#D5CBBE]"></div>
              <div className="w-8 h-8 border rounded bg-[#EAD9D6]"></div>
              <div className="w-8 h-8 border rounded bg-[#F2DEDE]"></div>
            </div>
            <div className="text-sm text-gray-600 mt-1">Black</div>
          </div>

          {/* Quantity + Wishlist */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button className="px-3 py-1 text-lg">−</button>
              <span className="px-4 py-1 border-x">1</span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100">
              <FaHeart /> Wishlist
            </button>
          </div>

          {/* Add to Cart */}
          <button className="w-full mt-4 bg-black text-white py-3 rounded text-center hover:bg-gray-800 transition">
            Add to Cart
          </button>

          {/* SKU + Category */}
          <div className="text-xs text-gray-500 mt-4">
            SKU: <span className="font-medium">1117</span> &nbsp; | &nbsp;
            CATEGORY: <span className="font-medium">Living Room, Bedroom</span>
          </div>

          {/* Tabs / Accordion */}
          <div className="border-t mt-6 pt-4">
            <details className="mb-2">
              <summary className="cursor-pointer font-medium">
                Additional Info
              </summary>
              <div className="text-sm text-gray-600 mt-2">
                <p>
                  You can use the removable tray for serving. The design makes
                  it easy to put the tray back after use since you place it
                  directly on the table frame without having to fit it into any
                  holes.
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Package size: 1 package(s) – Width: 21 ½", Height: 19",
                  Length: 21 ½", Weight: 7 lb 6 oz
                </p>
              </div>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium">Questions</summary>
              <p className="text-sm text-gray-600 mt-2">No questions yet.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-medium">
                Reviews (11)
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                “Great table, light and stylish. Super easy to move around.”
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
