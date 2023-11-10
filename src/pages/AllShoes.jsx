import { listOfMenShoes } from "../constants"


const AllShoes = () => {
  return (
    <section className="shoe-grid w-full mt-12 bg-slate-50">
    {listOfMenShoes.map((shoe) => {
      return (
        <div key={shoe.rating} className="shoe-grid-item shoe-flex">
        <div className="w-[100%] h-[300px] bg-slate-400">
        <img src={shoe.imgURL} alt="img"
        //  width={100 + "%"}
        // height={100 + "%"}
        className="bg-slate-50 cursor-pointer object-fill h-full w-full flex justify-center items-center"
        />
        </div>
        <div className="flex flex-col text-center justify-center">
          {shoe.rating}
        </div>
        </div>
      )
    })}
  </section>
  )
}

export default AllShoes
