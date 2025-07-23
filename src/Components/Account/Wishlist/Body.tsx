import { useCart } from "../../../Store/cartStore";

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  color?: string;
  image: string;
}

interface Props {
  items: WishlistItem[];
  onRemove: (id: number) => void;
}

const Body = ({ items, onRemove }: Props) => {
  const addToCart = useCart((state) => state.addToCart);

  const parsePrice = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your wishlist is empty</p>
      ) : (
        <div className="w-full">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[40px_1fr_100px_120px] px-2 py-3 border-b text-sm text-gray-500 font-medium">
            <span></span>
            <span>Product</span>
            <span>Price</span>
            <span>Action</span>
          </div>

          {/* Items */}
          <div className="divide-y">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[40px_1fr_100px_120px] items-center gap-4 py-4 px-2"
              >
                {/* Remove Icon */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  ×
                </button>

                {/* Product Details */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#F5F8FA] rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/path/to/default-image.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    {item.color && (
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="text-sm font-medium text-gray-800">
                  ${parsePrice(item.price).toFixed(2)}
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.title,
                      price: parsePrice(item.price),
                    })
                  }
                  className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
