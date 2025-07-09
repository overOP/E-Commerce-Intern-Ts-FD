import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";

interface Props {
    size?: number;
    className?: string;
}

const SocialIcons = ({ size = 24, className}: Props) => (
  <div className={`flex gap-6 text-neutral-1 ${className}`}>
    <IoLogoInstagram size={size} className="hover:text-red-600" />
    <SlSocialFacebook size={size} className="hover:text-blue-600" />
    <PiYoutubeLogoLight size={size} className="hover:text-red-600" />
  </div>
);

export default SocialIcons;

