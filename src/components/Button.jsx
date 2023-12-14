const Button = ( { label, iconURL, backgroundColor, textColor, borderColor, fullWidth, onClick, bg, about, icon, couponBtn } ) => {
  return (
   <button 
   onClick={onClick}
   className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` 
    : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full '} 
     ${bg ? 'text-[#121212]' : 'text-red-400'} ${iconURL ? ' rounded-none' : ''} ${couponBtn ? ' rounded-none' : ''} ${about ? ' rounded-none flex justify-between border-none' : ''}`}>
        {label}
        {icon}
        {iconURL && <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button