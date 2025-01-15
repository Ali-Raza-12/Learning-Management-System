const HomeBanner = ({ title, btnText}) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <p className='text-2xl text-grey9 font-bold'>{title}</p>
            <button className='text-primary5 font-inter gap-[6px] px-[24px] py-[10px] rounded-[8px]'>{btnText}</button>
        </div>
    </>
  )
}

export default HomeBanner