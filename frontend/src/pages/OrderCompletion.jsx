import tic from '../assets/Group 126.svg'

const OrderCompletion = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="w-[506px] h-auto flex flex-col items-center justify-center gap-2 p-4">
          <img src={tic} alt="Success Icon" className="w-auto h-auto" />
          <h1 className="text-[24px] text-grey9 font-bold text-center">Order Complete</h1>
          <h4 className="text-[18px] text-grey9 font-semibold text-center">
            You Will Receive a confirmation email soon!
          </h4>
        </div>
      </div>
    </>
  )
}

export default OrderCompletion