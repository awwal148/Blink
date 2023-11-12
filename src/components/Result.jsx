import { listOfMenShoes } from "../constants"
import { useEffect, useState } from "react";

const Result = () => {

    const [numberOfMenShoes, setNumberOfMenShoes] = useState(0)

  useEffect(() => {
  const numberOfShoes = listOfMenShoes.length;
  setNumberOfMenShoes(numberOfShoes);
}, [listOfMenShoes]);

useEffect(() => {
  console.log('numberOfMenShoes:', numberOfMenShoes);
}, [numberOfMenShoes]);

  return (
    <div className="flex justify-between font-montserrat leading-normal max-container">
        <h3>{numberOfMenShoes} Results</h3>
        <h3>VIEWS</h3>
    </div>
  )
}

export default Result
