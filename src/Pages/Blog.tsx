import { useState } from "react";

type LayoutType = "grid-2" | "grid-3" | "grid-4" | "list";

const blogPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: i < 3
    ? ["7 ways to decor your home like a professional", "Inside a beautiful kitchen organization", "Decor your bedroom for your children"][i]
    : "Modern texas home is beautiful and completely kid-friendly",
  date: "October 18, 2023",
  image: `https://source.unsplash.com/400x300?interior,home,${i}`,
}));

const Blog = () => {
  const [layout, setLayout] = useState<LayoutType>("grid-3");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Sort by */}
        <div>
          <label htmlFor="sort" className="mr-2 font-medium text-gray-700">Sort by</label>
          <select id="sort" className="border rounded px-2 py-1 text-sm">
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Layout Toggle Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => setLayout("grid-2")}
            className="p-2 border rounded hover:bg-gray-100"
            title="2 Columns"
          >
            2️⃣
          </button>
          <button
            onClick={() => setLayout("grid-3")}
            className="p-2 border rounded hover:bg-gray-100"
            title="3 Columns"
          >
            3️⃣
          </button>
          <button
            onClick={() => setLayout("grid-4")}
            className="p-2 border rounded hover:bg-gray-100"
            title="4 Columns"
          >
            4️⃣
          </button>
          <button
            onClick={() => setLayout("list")}
            className="p-2 border rounded hover:bg-gray-100"
            title="List"
          >
            📄
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div
        className={`grid gap-6 ${
          layout === "grid-2"
            ? "grid-cols-1 md:grid-cols-2"
            : layout === "grid-3"
            ? "grid-cols-1 md:grid-cols-3"
            : layout === "grid-4"
            ? "grid-cols-1 md:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} layout={layout} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 border rounded-full hover:bg-gray-100">Show more</button>
      </div>
    </div>
  );
};

type BlogCardProps = {
  post: {
    id: number;
    title: string;
    date: string;
    image: string;
  };
  layout: LayoutType;
};

const BlogCard = ({ post, layout }: BlogCardProps) => {
  if (layout === "list") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 border p-4 rounded">
        <img src={post.image} alt={post.title} className="w-full sm:w-48 h-32 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-base font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
      </div>
    </div>
  );
};

export default Blog;
