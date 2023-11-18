const Button = ( { label, iconURL, backgroundColor, textColor, borderColor, fullWidth, onClick, bg, banner} ) => {
  return (
   <button 
   onClick={onClick}
   className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` 
    : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'} 
     ${bg ? 'bg-slate-50 text-red-600' : ''} ${banner ? 'bg-slate-50 rounded-none text-[1rem] text-gray-700 font-bold px-5' : ''}`}>
        {label}

        {iconURL && <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button