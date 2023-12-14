import PopularProducts from "../sections/PopularProducts"
import SuperQuality from '../sections/SuperQuality';
import Services from '../sections/Services';
import SpecialOffers from '../sections/SpecialOffer';
import CustomersReviews from '../sections/CustomerReviews';
import Hero from "../sections/Hero";
import Subscribe from '../sections/Subscribe';
const Home = () => {
  return (
    <div>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
        <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomersReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    </div>
  )
}

export default Home