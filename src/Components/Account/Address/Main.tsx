import { addressData } from "../../../Data/account"
import Body from "./Body"
const Main = () => {
  return (
    <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto">
      <h2 className="Intertext-lg text-gray-700 mb-6">Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {addressData.map((address, index) => (
          <Body
            key={index}
            title={address.title}
            h={address.h}
            phone={address.phone}
            p2={address.p2}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
