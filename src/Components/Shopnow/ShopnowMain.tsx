import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShopnowNav from "./ShopnowNav";
import { FaHeart } from "react-icons/fa";
import { shopnowData } from "../../Data/shopnowData";
import { FaAngleRight } from "react-icons/fa";

import { useCart } from "../../Store/cartStore";
import { useWishlist } from "../../Store/wishlistStore";


interface Review {
  id: number;
  productId: string;
  name: string;
  message: string;
  rating: number;
}


const ShopnowMain = () => {
  const { id } = useParams<{ id: string }>();

  const product =
    shopnowData.find((item) => item.id.toString() === id) || shopnowData[0];

  const [selectedImage, setSelectedImage] = useState<string>(
    product.image[0]?.image || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.variant[0]?.name || ""
  );
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = useCart((state) => state.addToCart);
  const addToWishlist = useWishlist((state) => state.addToWishlist);
  const isInWishlist = useWishlist((state) => state.isInWishlist);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setSelectedImage(product.image[0]?.image || "");
    setSelectedColor(product.variant[0]?.name || "");
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        setTimeLeft({
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
          minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
          seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const allowedColors = ["white", "red", "blue", "black"];

  const handleAddToCart = () => {
    if (allowedColors.includes(selectedColor.toLowerCase())) {
      addToCart({
        id: product.id,
        name: product.title,
        price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0,
        image: selectedImage,
      });

      // Add quantity times - modify the addToCart in store or call multiple times? 
      // Since your store increases quantity if item exists, call addToCart multiple times:
      if (quantity > 1) {
        for (let i = 1; i < quantity; i++) {
          addToCart({
            id: product.id,
            name: product.title,
            price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0,
            image: selectedImage,
          });
        }
      }
    }
  };

  const handleAddToWishlist = () => {
    if (allowedColors.includes(selectedColor.toLowerCase())) {
      if (!isInWishlist(product.id)) {
        addToWishlist({
          id: product.id,
          title: product.title,
          price: product.price,
          color: selectedColor,
          image: selectedImage,
        });
      }
    }
  };

  // Quantity increase/decrease handlers
  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));


  const [reviewCount, setReviewCount] = useState(0);

useEffect(() => {
  const stored = localStorage.getItem("reviews");
  if (stored && id) {
    const parsed = JSON.parse(stored);
    const filtered = parsed.filter((r: Review) => r.productId === id);
    setReviewCount(filtered.length + 1); // +1 for the hardcoded review
  }
}, [id]);


  return (
    <div className="w-full lg:max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
      <ShopnowNav />
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side - Images */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[500px] bg-white border border-gray-200 rounded flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected product"
              className="object-contain max-h-full max-w-full"
              loading="lazy"
            />
            <div className="absolute top-4 left-4  px-2 py-1 text-xs Inter rounded">
              NEW
            </div>
            <div className="absolute top-12 left-4 bg-green-500 text-white px-2 py-1 text-xs Inter rounded">
              -50%
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.image.map(({ id, image }) => (
              <img
                key={id}
                src={image}
                alt={`Thumbnail ${id}`}
                onClick={() => setSelectedImage(image)}
                className={`w-[167px] h-[167px] object-cover border rounded cursor-pointer ${
                  selectedImage === image ? "ring-2 ring-black" : ""
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Right side - Product info */}
        <div className="w-full lg:w-1/2 space-y-4">
        <div className="text-sm text-gray-600">
  ★★★★★ <span className="ml-1 text-gray-400 Inter text-text7">({reviewCount} Reviews)</span>
</div>


          <h2 className=" text-gray-900 Poppins text-h4">{product.title}</h2>

          <p className="text-gray-500 text-sm Inter text-text5">{product.paragraph}</p>

          <div className=" text-black Poppins text-h6">
            {product.price}
            <span className="text-base line-through text-gray-400 ml-2 Poppins">
              {product.old}
            </span>
          </div>

          <div className="text-sm text-gray-600 Inter text-text5">
            Offer expires in:
            <div className="flex gap-2 mt-1 text-center h-[80px]">
              <div className="w-12 py-1 bg-gray-100 rounded Poppins text-h5">
                {timeLeft.days}
                <br />
                <span className="text-text7 Inter">Days</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded Poppins text-h5">
                {timeLeft.hours}
                <br />
                <span className="text-text7 Inter">Hours</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded Poppins text-h5">
                {timeLeft.minutes}
                <br />
                <span className="text-text7 Inter">Minutes</span>
              </div>
              <div className="w-12 py-1 bg-gray-100 rounded Poppins text-h5">
                {timeLeft.seconds}
                <br />
                <span className="text-text7 Inter">Seconds</span>
              </div>
            </div>
          </div>

          <h2 className="text-text12 text-gray-700 mt-2 Inter">
            Measurements: 
          </h2>
          <p className="Inter text-text3 ">{product.Measurements}</p>
          {/* Color Picker */}
          <div className="mt-4">
            <div className="text-text12 Inter text-gray-700 mb-1 flex items-center">Choose Color <FaAngleRight /></div>
            <div className="flex gap-2 ">
              {product.variant.map((variant) => (
                <div
                  key={variant.id}
                  onClick={() => {
                    setSelectedImage(variant.imageaddress);
                    setSelectedColor(variant.name);
                  }}
                  className={`w-8 h-8 border rounded cursor-pointer ${
                    selectedImage === variant.imageaddress ? "ring-2 ring-black " : ""
                  }`}
                  style={{
                    backgroundColor:
                      variant.name === "white"
                        ? "#fff"
                        : variant.name === "red"
                        ? "red"
                        : variant.name === "blue"
                        ? "blue"
                        : variant.name === "black"
                        ? "black"
                        : "#ccc",
                  }}
                  title={variant.name}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1 capitalize ">{selectedColor}</div>
          </div>

          {/* Quantity + Wishlist */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 text-lg select-none"
                type="button"
              >
                −
              </button>
              <span className="px-4 py-1 border-x select-none">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 text-lg select-none"
                type="button"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToWishlist}
              title="Add to Wishlist"
              className={`p-2 rounded w-[357px] border flex items-center justify-center Inter text-button-md ${
                isInWishlist(product.id) ? "text-red-600" : "text-gray-400"
              } hover:text-red-600`}
            >
              <FaHeart size={22} />Wishlist
            </button>
          </div>
          <button
              onClick={handleAddToCart}
              className="px-6 py-2 w-[311px] md:w-[490px] bg-black text-white rounded font-semibold hover:bg-[#b03c24] Inter text-button-md"
            >
              Add to Cart
            </button>
            <div className=" w-[311px] md:w-[508px] h-[96px] pt-[24px] pb-[24px] gap-[8px] flex flex-col">
              <div className="w-[147px] flex items-center justify-between">
                <p className="Inter text-tex7 text-neutral-4">SKU</p>
                <p className="Inter text-tex7 text-neutral-4">1117</p>
              </div>
              <div className="w-[291px] flex items-center justify-between">
                <p className="Inter text-tex7 text-neutral-4">CATEGORY</p>
                <p className="Inter text-tex7 text-neutral-4">Living Room, Bedroom</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopnowMain;
