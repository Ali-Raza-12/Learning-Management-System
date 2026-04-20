import rightChevron from '../../assets/Categories/chevron-right.svg'
import courseImage from '../../assets/Shopping/image 3.svg'
import ratings from '../../assets/Categories/ratings.svg'
import Button from '../../components/Button/Button'


const Shopping = () => {
  return (
    <>
      <div className='w-full h-[100vh] px-[40px] my-10 '>

        {/* Page Details  */}
        <div className='flex w-full h-auto items-end gap-5'>
          <div className='w-[200px] h-auto'>
            <h2 className='text-[24px] font-semibold text-grey9'>Shopping Cart</h2>
          </div>
          <div className='w-full h-[24px] flex gap-[8px]'>
            <p className='text-grey7'>Categories</p>
            <img src={rightChevron} alt="" />
            <p className='text-grey7'>Details</p>
            <img src={rightChevron} alt="" />
            <p className='text-primary6'>Shopping Cart</p>
          </div>
        </div>

        {/* Cart Content Main  */}
        <div className='w-full h-auto flex justify-between'>

          {/* Cart Courses Left */}
          <div className='w-[880px] h-auto my-5'>

            {/* Border  */}
            <div className='w-full h-auto'>
              <p className='text-grey7'>1 Course in cart</p>
              <p className='border border-grey3'></p>
            </div>

            <div className='w-full h-auto my-2'>

              <div className='w-full h-auto flex rounded-[8px] border border-grey3 p-2 m-1'>
                <div className='max-w-[675px] h-auto flex gap-[8px]'>
                  <img src={courseImage} alt="course image" />
                  <div className='w-[675px] flex flex-col gap-[8px]'>
                    <h5 className='font-semibold text-grey9'>Introduction to User Experience Design</h5>
                    <p className='text-grey7'>By John Doe</p>
                    <div className='w-full h-auto flex gap-2 items-center'>
                      <p className='text-yellow-300 text-[14px]'>4.6 </p>
                      <img src={ratings} className='w-[96px] h-[19px]' alt="ratings" />
                      <p className='text-grey3 text-[14px]'>(250 rating)</p>
                      <p className='text-grey7 text-[13px]'>22 Total Hours. 155 Lectures. All levels</p>
                    </div>
                    <p className='text-primary6'>Save for later
                      <span className='text-grey3'>|</span>
                      <span className='text-orange-500'>Remove</span>
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto mr-2'>
                  <p className='flex justify-end font-bold'>$45.00</p>
                </div>
              </div>

              <div className='w-full h-auto flex rounded-[8px] border border-grey3 p-2 m-1'>
                <div className='max-w-[675px] h-auto flex gap-[8px]'>
                  <img src={courseImage} alt="course image" />
                  <div className='w-[675px] flex flex-col gap-[8px]'>
                    <h5 className='font-semibold text-grey9'>Introduction to User Experience Design</h5>
                    <p className='text-grey7'>By John Doe</p>
                    <div className='w-full h-auto flex gap-2 items-center'>
                      <p className='text-yellow-300 text-[14px]'>4.6 </p>
                      <img src={ratings} className='w-[96px] h-[19px]' alt="ratings" />
                      <p className='text-grey3 text-[14px]'>(250 rating)</p>
                      <p className='text-grey7 text-[13px]'>22 Total Hours. 155 Lectures. All levels</p>
                    </div>
                    <p className='text-primary6'>Save for later
                      <span className='text-grey3'>|</span>
                      <span className='text-orange-500'>Remove</span>
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto mr-2'>
                  <p className='flex justify-end font-bold'>$45.00</p>
                </div>
              </div>

              <div className='w-full h-auto flex rounded-[8px] border border-grey3 p-2 m-1'>
                <div className='max-w-[675px] h-auto flex gap-[8px]'>
                  <img src={courseImage} alt="course image" />
                  <div className='w-[675px] flex flex-col gap-[8px]'>
                    <h5 className='font-semibold text-grey9'>Introduction to User Experience Design</h5>
                    <p className='text-grey7'>By John Doe</p>
                    <div className='w-full h-auto flex gap-2 items-center'>
                      <p className='text-yellow-300 text-[14px]'>4.6 </p>
                      <img src={ratings} className='w-[96px] h-[19px]' alt="ratings" />
                      <p className='text-grey3 text-[14px]'>(250 rating)</p>
                      <p className='text-grey7 text-[13px]'>22 Total Hours. 155 Lectures. All levels</p>
                    </div>
                    <p className='text-primary6'>Save for later
                      <span className='text-grey3'>|</span>
                      <span className='text-orange-500'>Remove</span>
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto mr-2'>
                  <p className='flex justify-end font-bold'>$45.00</p>
                </div>
              </div>

            </div>

          </div>

          {/* Cart Right Portion  */}
          <div className='w-[330px] h-[251px] flex flex-col gap-[8px] my-10'>
            <h4 className='font-bold'>Order Details</h4>
            <div className='w-full h-auto p-2 border border-grey3 rounded-[16px]'>

              <div className='w-full h-auto my-2'>
                <div className='flex justify-between my-3'>
                  <p className='text-grey9'>Price</p>
                  <p className='text-grey9 font-bold'>$300.00</p>
                </div>

                <div className='flex justify-between my-3'>
                  <p className='text-grey9'>Discount</p>
                  <p className='text-grey9 font-bold'>-$10.00</p>
                </div>

                <div className='flex justify-between my-3'>
                  <p className='text-grey9'>Tax</p>
                  <p className='text-grey9 font-bold'>$20.00</p>
                </div>
              </div>

              <p className='border border-grey3 w-full my-3'></p>

              <div className='flex justify-between my-3'>
                <p className='text-grey9'>Total</p>
                <p className='text-grey9 font-bold'>$290.00</p>
              </div>

            </div>
            
            <Button text='Proceed to Checkout' btnClass='w-full h-auto bg-black text-white p-3 flex justify-center'/>


          </div>
        </div>
      </div>
    </>
  )
}

export default Shopping