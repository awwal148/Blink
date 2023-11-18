import { useState } from "react"
import { Link } from "react-router-dom";
import bannerImg from "../assets/assets/images/AdobeStock_632289622_Preview.jpeg"
import bannerImg2 from "../assets/assets/images/shoes-2425122_1280.jpg"
import Button from "../components/Button"
const ShoeBanner = () => {
    const [img, setImg] = useState(true);

  return (
    <section className="relative">
        <div className="">
        <img src={bannerImg} alt="img" className="w-[100%] h-[23rem]  object-center lg:h-[28rem] object-fill flex items-center justify-center"/>
        {/* <img src={bannerImg2} alt="img" className="w-[100%] h-[23rem]  object-center lg:h-[28rem] object-fill flex items-center justify-center"/> */}
        </div>
        <div className="flex flex-col justify-start text-left absolute z-50 w-[25.75rem] lg:w-[26.75rem] sm:h-[9.5rem] lg:h-[11.5rem] sm:top-[35%] lg:top-[30%] max-sm:left-[25%] sm:left-[25%] lg:left-4 text-white ">
            <h1 className="font-bold font-palanquin text-[1.8rem] capitalize">GIFTING SHOP</h1>
            <p className="font-semibold tracking-widest">Get prepared for the holiday season</p>
            <div className="mt-4 flex  mr-14 justify-between">
                <Link to="/men">
            <Button label="SHOP MEN'S" banner={img}/>
            </Link>
            <Link to="/women">
            <Button label="SHOP WOMEN'S" banner={img}/>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default ShoeBanner