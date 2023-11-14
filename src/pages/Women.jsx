import WomenShoes from '../components/WomenShoes';
import { womenShoeHeader } from '../constants'


const Women = () => {
  return (
    <section className='padding max-container'>

      <div className='sm:px-10 px-4 sm:py-16 py-12 flex justify-center items-center text-center font-extrabold text-lg text-slate-gray font-montserrat leading-normal bg-center bg-slate-50 shadow-3xl rounded box-border mt-6 max-sm:mt-[3.8rem]'>
        <h2 className='tracking-wider'>
          WOMEN'S TRAINERS AND SHOES
        </h2>
        </div> <br />
        <div className='sm:px-10 px-4 sm:py-16 py-14 flex justify-center items-center text-center  text-sm text-slate-gray font-montserrat leading-normal bg-slate-50 text-black'>
        <div className='flex flex-row lg:space-x-4 w-[700px] gap-12  flex-rows'>
  {womenShoeHeader.map((womenShoe) => {
    return (
      <div className='flex flex-col gap-6' key={womenShoe.type}>
        <img src={womenShoe.imgURL} alt= "img" width={100} className='lg:hover:w-20 cursor-pointer'/>
        <h2 className='tracking-wider'>
        {womenShoe.type}
        </h2> 
      </div>
    );
  })}
</div>
  </div>
  <WomenShoes />
    </section>
  )
}

export default Women