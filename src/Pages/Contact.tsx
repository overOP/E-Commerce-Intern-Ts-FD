import ValuesMain from "../Components/Contact/3section/ValuesMain"
import BannerMain from "../Components/Contact/1section/BannerMain"
import Main from "../Components/Contact/2section/Main"

const Contact = () => {
  return (
    <div className="flex flex-col gap-16 overflow-hidden">
        {/* 1st section */}
        <BannerMain/>
        {/* 2nd section */}
        <Main/>
        {/* 3st section */}
        <ValuesMain/>
    </div>
  )
}

export default Contact