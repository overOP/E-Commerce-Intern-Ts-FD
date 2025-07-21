import Main from "../Components/Shop/1section/Main"
import LivingRoom from "../Components/Shop/2section/LivingRoom"

const Shop = () => {
  return (
    <div className="flex flex-col gap-16 overflow-hidden">
        {/* 1st section */}
        <Main/>
        {/* 2nd section */}
        <LivingRoom/>
        </div>
  )
}

export default Shop