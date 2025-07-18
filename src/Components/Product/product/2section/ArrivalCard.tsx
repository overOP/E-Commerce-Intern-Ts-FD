import RatingStars from "./RatingStars";
import { useCart } from "../../../../Store/cartStore";
import { GoHeart } from "react-icons/go";

interface Arrival {
  id: number;
  title: string;
  price: string;
  old: string;
  button: string;
  image: string;
  new: string;
  discount: string;
  favrate: string;
}

const parsePrice = (p: string) => Number(p.replace(/[^0-9.]/g, ""));

const ArrivalCard = ({
  id,
  title,
  price,
  image,
  new: isNew,
  discount,
}: Arrival) => {
  const addToCart = useCart((state) => state.addToCart);

  const currentPrice = parsePrice(price);
  const oldPrice = discount
    ? (currentPrice / (1 - Number(discount.replace("%", "")) / 100)).toFixed(2)
    : "";

  return (
    <>
      <div className="group rounded-lg border border-gray-200  hover:shadow-sm transition">
        {/* image area */}
        <div className="relative bg-[#F5F8FA] rounded-lg flex items-center justify-center h-[220px]">
          {/* badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {isNew && (
              <span className="text-[18px] py-0.5 rounded Inter">{isNew}</span>
            )}
            {discount && (
              <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded Inter">
                -{discount}
              </span>
            )}
          </div>
          {/* fav icon */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-red-600 hidden group-hover:flex">
            <GoHeart size={18} />
          </button>

          <img
            src={image}
            alt={title}
            loading="lazy"
            className="object-contain h-[140px] transition-transform group-hover:scale-105"
          />
        </div>
        {/* add‑to‑cart */}
        <button
          onClick={() => addToCart({ id, name: title, price: currentPrice })}
          className="Inter absolute top-[11.5rem] justify-center right-2  w-[230px] md:w-[180px] xl:w-[230px] py-2 bg-black text-white text-xs rounded-[8px] hover:bg-gray-800 hidden group-hover:flex"
        >
          Add to cart
        </button>
      </div>
      {/* content */}
      <div className="mt-4 space-y-1">
        <RatingStars />
        <h3 className="text-text12 Inter truncate">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="Inter">{price}</span>
          {oldPrice && (
            <span className="text-xs line-through text-gray-400">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ArrivalCard;
