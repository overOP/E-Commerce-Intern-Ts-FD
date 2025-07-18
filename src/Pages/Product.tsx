import Main from "../Components/Product/product/1section/Main"
import ArrivalsSection from "../Components/Product/product/2section/ArrivalsSection"


const Product = () => {
  return (
    <div className="flex flex-col gap-16 overflow-hidden">
        {/* 1st section */}
        <Main />
        {/* 2nd section */}
        <ArrivalsSection/>
    </div>
  )
}

export default Product