export default function Header(){
    return (
      <nav className="flex space-x-6 border-b pb-2 mb-4">
        <a className="text-gray-500 hover:text-black cursor-pointer">Additional Info</a>
        <a className="text-gray-500 hover:text-black cursor-pointer">Questions</a>
        <a className="text-black font-semibold cursor-pointer border-b-2 border-black">Reviews</a>
      </nav>
    );
  }