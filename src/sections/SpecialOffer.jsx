import { arrowRight } from "../assets/assets/icons"
import { offer } from "../assets/assets/images"

import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}
        className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col" >

        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span> offer
        </h2>
        <p className="mt-4 max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore architecto harum aliquam quod rem doloremque magnam!</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <a href="/men/nike">
        <Button label="Shop now" iconURL={arrowRight} />
        </a>
        <a href="about-us">
        <Button
        label="Learn more"
        backgroundColor="bg-white"
        borderColor="text-slate-gray" />
        </a>
        </div>
      </div>
    </section>

  )
}
export default SpecialOffer