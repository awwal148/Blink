import Tabs from '../AcountTab/Tab'


const Account = () => {
  return (
    <section className='padding max-container'>
        <h1 className='font-bold text-[3rem] mt-14'>My account </h1>
      <div className="w-[45%] mx-auto max-sm:w-full max-lg:w-full">
        <Tabs />
        </div>
    </section>
  )
}

export default Account


