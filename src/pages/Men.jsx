import MenShoes from '../components/MenShoes';
import { menShoeHeader } from '../constants'


const Men = () => {
  return (
    <section className='padding'>

      <div className='sm:px-10 px-4 sm:py-16 py-12 flex justify-center items-center text-center font-extrabold text-lg text-slate-gray font-montserrat leading-normal bg-center bg-slate-50 shadow-3xl rounded box-border mt-6'>
        <h2 className='tracking-wider'>
          MEN'S TRAINERS AND SHOES
        </h2>
        </div> <br />
        <div className='sm:px-10 px-4 sm:py-16 py-14 flex justify-center items-center text-center  text-sm text-slate-gray font-montserrat leading-normal bg-slate-50 text-black'>
        <div className='flex flex-row lg:space-x-4 w-[700px] gap-12  flex-rows'>
  {menShoeHeader.map((menShoe) => {
    return (
      <div className='flex flex-col gap-6' key={menShoe.type}>
        <img src={menShoe.imgURL} alt= "img" width={100} className='lg:hover:w-20 cursor-pointer'/>
        <h2 className='tracking-wider'>
        {menShoe.type}
        </h2> 
      </div>
    );
  })}
</div>
  </div>
  <MenShoes />
    </section>
  )
}

export default Men