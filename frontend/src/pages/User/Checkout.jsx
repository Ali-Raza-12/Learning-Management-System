import rightChevron from '../../assets/Categories/chevron-right.svg'
import card from '../../assets/Checkout/image 17.svg'
import courseImage from '../../assets/Checkout/Rectangle 1133.svg'
import Button from '../../components/Button/Button'
import coupon from '../../assets/Checkout/percent-03.svg'



const Checkout = () => {
  return (
    <>
      <div className='w-full h-auto px-[40px] my-10'>

        {/* Page Details  */}
        <div className='flex w-full h-auto items-end gap-5'>
          <div className='w-[210px] h-auto'>
            <h2 className='text-[24px] font-semibold text-grey9'>Checkout Page</h2>
          </div>
          <div className='w-full h-[24px] flex gap-[8px]'>
            <p className='text-grey7'>Details</p>
            <img src={rightChevron} alt="" />
            <p className='text-grey7'>Details</p>
            <img src={rightChevron} alt="" />
            <p className='text-primary6'>Checkout</p>
          </div>
        </div>

        <div className='w-full h-auto flex justify-between'>

          {/* Form  */}
          <div className='w-[840px] h-auto px-2 py-4 my-6 border border-grey3 rounded-[16px]'>

            <div className='w-full h-auto flex gap-[17px] px-2'>
              <div className='w-full h-auto flex flex-col gap-[8px]'>
                <label className='font-semibold text-grey9'>Country</label>
                <input type="text" placeholder='Enter Country' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
              </div>

              <div className='w-full h-auto flex flex-col gap-[8px]'>
                <label className='font-semibold text-grey9'>State/Union Territory</label>
                <input type="text" placeholder='Enter State' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
              </div>

            </div>

            <div className='w-full h-auto flex flex-col gap-[8px] my-2 py-2'>
              <p className='font-bold text-grey9'>Payment Method</p>
              <div className='w-full h-auto flex flex-col gap-[16px] p-2'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-[11px] items-center'>
                    <input type="checkbox" className="appearance-none w-4 h-4 
                          border rounded-full border-pink-400 
                          cursor-pointer  
                          checked:bg-green-600" />
                    <p className='font-bold text-grey9'>Credit/Debit Card</p>
                  </div>
                  <div>
                    <img src={card} alt="card" />
                  </div>
                </div>

                <div className='w-full h-auto flex flex-col gap-[8px]'>
                  <label className='font-medium text-grey9'>Name of Card</label>
                  <input type="text" placeholder='Name of Card' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
                </div>

                <div className='w-full h-auto flex flex-col gap-[8px]'>
                  <label className='font-medium text-grey9'>Card Number</label>
                  <input type="text" placeholder='Card Number' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
                </div>

                <div className='w-full h-auto flex gap-[17px]'>
                  <div className='w-full h-auto flex flex-col gap-[8px]'>
                    <label className='font-medium text-grey9'>Expiry Date</label>
                    <input type="date" placeholder='Expiry Date' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
                  </div>

                  <div className='w-full h-auto flex flex-col gap-[8px]'>
                    <label className='font-medium text-grey9'>CVC/CVV</label>
                    <input type="text" placeholder='Enter Country' className='w-full h-auto p-[16px] border border-grey3 rounded-[8px] outline-none' />
                  </div>

                </div>

                <div className='flex justify-between items-center'>
                  <div className='flex gap-[11px] items-center'>
                    <input type="checkbox" className="appearance-none w-4 h-4 
                          border rounded-full border-pink-400 
                          cursor-pointer  
                          checked:bg-green-600" />
                    <p className='font-bold text-grey9'>Stripe</p>
                  </div>
                  <div>
                    <img src={card} alt="card" />
                  </div>
                </div>


              </div>
            </div>
          </div>


          {/* Right course Details  */}
          <div className='w-[400px] h-auto flex flex-col gap-4 '>

            <p className='text-grey9 font-bold'>Order Details</p>

            <div className='w-full h-auto flex rounded-[8px] border border-grey3 px-2'>
              <div className='max-full h-auto flex gap-[8px] items-center'>
                <img src={courseImage} className='w-[131px] h-[161px]' alt="course image" />
                <div className='w-full flex flex-col gap-[6px]'>
                  <p className='text-primary5'>Design</p>
                  <h5 className='font-semibold text-grey9'>Introduction to User Experience Design</h5>
                  <p className='text-grey7 text-[14px]'>155 Lectures . 22 Total Hours</p>
                  <p className='font-bold'>$45.00</p>
                </div>
              </div>
            </div>

            {/* Coupon  */}
            <div className='flex gap-2 border border-grey3 rounded-[8px]  w-full h-auto p-2'>
              <img src={coupon} alt="coupon" />
              <p className='text-grey7'>APPLY COUPON CODE</p>
            </div>

            {/* Cart Right Portion  */}
            <div className='w-ful h-auto flex flex-col gap-[8px]'>
              <div className='w-full h-auto p-2 border border-grey3 rounded-[8px]'>

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
              <Button text='Proceed to Checkout' btnClass='w-full h-auto bg-black text-white p-3 flex justify-center' />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Checkout