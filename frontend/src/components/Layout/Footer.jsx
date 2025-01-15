import image from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='bg-gray-800 flex justify-between'>
            <div className='w-full h-auto flex flex-wrap justify-between p-10 lg:p-8 gap-5'>
                
                <div className='w-[416px] lg:w-[380px] h-auto flex flex-col gap-[16px]'>
                    <div className='flex gap-[10px] items-center'>
                      <img src={image} alt="" />
                      <h1 className='font-inter font-bold text-[16px] text-white'>Byway</h1>
                    </div>
                    <div className='text-gray-300'>
                      <p>Empowering learners through accessible and engaging online education.</p>
                      <p>Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
                    </div>
                </div>

                <div className='w-[110px] h-auto flex flex-col gap-[8px]'>
                  <h5 className='text-gray-100 font-bold'>Get Help</h5>
                  <a href='/' className='text-gray-300' >Contact us</a>
                  <a href='/' className='text-gray-300' >Latest Articles</a>
                  <a href='/' className='text-gray-300' >FAQ</a>
                </div>

                <div className='w-[105px] flex flex-col gap-[8px]'>
                  <h5 className='text-gray-100 font-bold'>Programs</h5>
                  <a href='/' className='text-gray-300' >Art & Design</a>
                  <a href='/' className='text-gray-300' >Business</a>
                  <a href='/' className='text-gray-300' >IT & Software</a>
                  <a href='/' className='text-gray-300' >Languages</a>
                  <a href='/' className='text-gray-300' >Programming</a>
                </div>

                <div className='w-[309px] lg:w-[280px] h-auto flex flex-col gap-[24px]'>
                  <div className='flex flex-col gap-[8px]'>
                    <h5 className='text-gray-100 font-bold'>Contact Us</h5>
                    <a href='/' className='text-gray-300' >Address: 123 Main Street, Anytown, CA 12345</a>
                    <a href='/' className='text-gray-300' >Tel: +(123) 456-7890</a>
                    <a href='/' className='text-gray-300' >Mail: bywayedu@webkul.in</a>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <FaFacebook style={{ fontSize: '25px', color: 'gray'}} />
                    <FaGithub style={{ fontSize: '25px', color: 'gray'}} />
                    <FaGoogle style={{ fontSize: '25px', color: 'gray'}} />
                    <FaTwitter style={{ fontSize: '25px', color: 'gray'}} />
                  </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer