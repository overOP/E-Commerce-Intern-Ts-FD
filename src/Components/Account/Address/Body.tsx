import { CiEdit } from "react-icons/ci";

interface Props {
  h: string;
  phone: string;
  p2: string;
  title: string;
}

const Body = ({ title, h, phone, p2 }: Props) => {
  return (
    <div className="w-full border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h5 className="Inter text-base text-gray-800">{h}</h5>
        <button className="flex items-center text-sm text-blue-500 hover:underline">
          <CiEdit className="w-4 h-4 mr-1" />
          Edit
        </button>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <p>{title}</p>
        <p>{phone}</p>
        <p>{p2}</p>
      </div>
    </div>
  )
}

export default Body
