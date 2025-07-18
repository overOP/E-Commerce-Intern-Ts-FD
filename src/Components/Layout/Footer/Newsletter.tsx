import Input from "../../Input";
import { CiMail } from "react-icons/ci";
import DresserImg from "../../../assets/Img/2.png";
import ChairImg from "../../../assets/Img/R.png";

const Newsletter = () => {
  return (
    <div className="h-[230px] mt-10 w-full max-w-[1140px] bg-[#f3f5f7] overflow-hidden py-10 px-4 md:px-12 lg:px-[80px] mx-auto flex items-center justify-between gap-8">
      
      {/* Left Image (cut from left) */}
      <div className="hidden md:flex lg:flex w-[300px] -ml-[180px] flex-shrink-0">
        <img
          src={DresserImg}
          alt="Dresser"
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center text-center max-w-[500px] mx-auto">
        <h2 className="text-h4 md:text-3xl Poppins font-semibold">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 Inter text-text4 mt-2 mb-4">
          Sign up for deals, new products and promotions
        </p>

        <div className="flex items-center gap-2 border-b w-full max-w-[400px] py-2">
          <CiMail className="text-gray-500" size={20} />
          <Input
            type="email"
            placeholder="Email address"
            className="border-0 text-[#6c7275] focus:ring-0 p-0 w-full bg-transparent text-button-sm Inter"
          />
          <button className="text-[#6c7275] hover:underline whitespace-nowrap text-button-sm Inter">
            Signup
          </button>
        </div>
      </div>

      {/* Right Image (cut from right) */}
      <div className="hidden md:flex lg:flex w-[500px] -mr-[350px] flex-shrink-0 justify-end">
        <img
          src={ChairImg}
          alt="Chair"
          className="object-cover w-full h-auto"
        />
      </div>
      
    </div>
  );
};

export default Newsletter;
