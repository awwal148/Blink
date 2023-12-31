import Button from "../components/Button"
import { shoe8 } from "../assets/assets/images"
import { useState } from "react"
const SuperQuality = () => {
  const [qualityDetails, setQualityDetails] = useState(false);

  const superQuality = () => {
    setQualityDetails(!qualityDetails)
  }
  return (
    <section id="about-us"
     className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col" >

        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         We Provide You 
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction 
        {qualityDetails && <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam commodi eum inventore tenetur quaerat, doloremque sunt expedita suscipit illum obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing. </span>}
        </p>
        <div className="mt-11">
        <Button label={`View ${qualityDetails ? "Less": "Details"}`} onClick={superQuality} bg={qualityDetails} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoes"
        width={570}
        height={522}
        className="object-container"
        />
      </div>
     </section>
  )
}

export default SuperQuality