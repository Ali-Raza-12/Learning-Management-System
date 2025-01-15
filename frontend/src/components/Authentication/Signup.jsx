import image from '../../assets/Signup-page/Frame 427319048.svg'
import Form from './Form'


const Signup = () => {
  return (
    <>
        <div className='w-full h-auto flex items-center'>
            <div className='w-[628px] h-[959px]'>
                <img src={image} alt="signup-image" />
            </div>

            <div>
                <Form />
            </div>
        </div>
    </>
  )
}

export default Signup