const HomeBanner = ({ title, btnText}) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-grey9 font-bold'>{title}</p>
            <button className='text-primary5 font-inter text-sm sm:text-base gap-[6px] px-[24px] py-[10px] rounded-[8px]'>{btnText}</button>
        </div>
    </>
  )
}

export default HomeBanner