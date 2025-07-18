import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import { productData, productimg, productImg } from "../../../Data/productData";

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
        {/* LEFT SIDE – Images */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Main Image Slider */}
            <Swiper
              navigation
              modules={[Navigation]}
              className="w-full h-[500px] bg-white border border-gray-200 rounded"
            >
              {productImg.map(({ id, image }) => (
                <SwiperSlide
                  key={id}
                  className="relative flex items-center justify-center"
                >                  
                  <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium rounded">
                    NEW
                  </div>
                  <div className="absolute top-12 left-4 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                    -50%
                  </div>
                  <img
                    src={image}
                    alt="product"
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {productimg.map(({ id, image }) => (
              <img
                key={id}
                src={image}
                alt="Thumbnail"
                className="w-[167px] h-[167px] object-cover border rounded"
              />
            ))}
          </div>
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
              <div className="w-12 py-1 bg-gray-100 rounded">
                02
                <br />
                <span className="text-xs">Days</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded">
                12
                <br />
                <span className="text-xs">Hours</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded">
                45
                <br />
                <span className="text-xs">Minutes</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded">
                05
                <br />
                <span className="text-xs">Seconds</span>
              </div>
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

          {/* Quantity and Wishlist */}
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
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
