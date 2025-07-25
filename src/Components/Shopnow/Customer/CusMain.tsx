import { useState } from "react";
import Reviews from "./all/Reviews";
import AdditionalInfo from "./all/AdditionalInfo";
import Questions from "./all/Questions";
import { FaChevronDown } from "react-icons/fa";

interface CusMainProps {
  productId: string;
}

const CusMain = ({ productId }: CusMainProps) => {
  const [page, setPage] = useState("Additional");
  const [activeSection, setActiveSection] = useState("Additional");

  const sections = [
    {
      title: "Additional Info",
      key: "Additional",
      content: <AdditionalInfo />,
    },
    {
      title: "Questions",
      key: "Questions",
      content: <Questions productId={productId} />,
    },
    {
      title: "Reviews",
      key: "Reviews",
      content: <Reviews productId={productId} />,
    },
  ];

  const renderContent = () => {
    switch (page) {
      case "Additional":
        return <AdditionalInfo />;
      case "Questions":
        return <Questions productId={productId} />;
      case "Reviews":
        return <Reviews productId={productId} />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div className="mt-8">
      {/* Desktop Tabs */}
      <ul className="hidden md:flex gap-[55px] cursor-pointer text-lg font-medium border-b border-gray-200 pb-2">
        {sections.map(({ title, key }) => (
          <li
            key={key}
            className={`${page === key ? "underline underline-offset-4 text-black" : "text-gray-500"}`}
            onClick={() => setPage(key)}
          >
            {title}
          </li>
        ))}
      </ul>

      {/* Desktop Content */}
      <div className="hidden md:block pt-6">
        {renderContent()}
      </div>

      {/* Mobile Accordions */}
      <div className="md:hidden flex flex-col gap-4">
        {sections.map(({ title, key, content }) => (
          <div key={key} className="border rounded-md overflow-hidden">
            <button
              onClick={() => setActiveSection(activeSection === key ? "" : key)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 text-base font-semibold"
            >
              {title}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeSection === key ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {activeSection === key && <div className="p-4 bg-white">{content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CusMain;
