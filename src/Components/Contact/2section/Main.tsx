import Input from "../../Input";
import ValuesMain from "./ValuesMain";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
      <h2 className="Poppins text-h4 flex justify-center">Contact Us</h2>
      <ValuesMain />
      <div className="w-full max-w-[1210px] mx-auto px-4 md:px-10 py-8 space-y-6">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 bg-[#f3f5f7]">
          <div className="w-full md:w-1/2">
            
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=85.3195952%2C27.7154512%2C85.3295952%2C27.7214512&layer=mapnik"
                  title="OpenStreetMap"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            
          </div>
          <div className="w-full md:w-1/2">
            <p className="Inter text-text5">Full Name</p>
            <Input type="text" placeholder="Your Name" className="w-full" />
            <p className="Inter text-text5 mt-2">Email address</p>
            <Input type="email" placeholder="Your Email" className="w-full" />
            <p className="Inter text-text5 mt-2">message</p>
            <Input
              type="text"
              placeholder="Your Message"
              className="w-full h-[10rem]"
            />
            <button onClick={() => toast.success("Message sent successfully")} className=" text-button-sm Inter bg-black text-white px-4 py-2 rounded-lg w-[189px] mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
