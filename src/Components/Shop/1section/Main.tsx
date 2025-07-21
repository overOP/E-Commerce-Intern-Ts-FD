import { navData, sectionData } from "../../../Data/shopData";
import { FaAngleRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
      {sectionData.map(({ id, image }) => (
        <div key={id} className="relative">
          <img
            src={image}
            alt={`Section ${id}`}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg p-4">
            <div className="flex flex-row md:flex-col flex-wrap gap-4 items-center justify-center  px-4 py-4 rounded-lg w-[90%] max-w-[1000px]">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {navData.map(({ id, title, url }) => (
                  <a
                    key={id}
                    href={url}
                    className="text-gray-800 hover:text-gray-600 flex items-center gap-1 text-sm sm:text-button-xs Inter"
                  >
                    {title}
                    <FaAngleRight />
                  </a>
                ))}
              </div>
              <h1 className="text-h3 font-Poppins text-center">Shop Page</h1>
              <p className="text-text4 text-center Inter">
                Let’s design the place you always imagined.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
