import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface Props {
  open: boolean;
  onToggle: () => void;
}

const MobileBurger = ({ open, onToggle }: Props) => (
  <button
    type="button"
    aria-label={open ? "Close menu" : "Open menu"}
    className="p-2 text-gray-800 md:hidden"
    onClick={onToggle}
  >
    {open ? <MdClose size={24} /> : <FaBars size={24} />}
  </button>
);

export default MobileBurger;
