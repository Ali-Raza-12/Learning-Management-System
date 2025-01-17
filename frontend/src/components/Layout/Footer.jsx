import image from '../../assets/logo.svg'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 p-6 lg:p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        {/* Logo and Description */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <img src={image} alt="Byway Logo" className='w-12 h-12'/>
            <h1 className='font-inter font-bold text-2xl text-white'>Byway</h1>
          </div>
          <p className='text-gray-300 text-sm sm:text-base'>
            Empowering learners through accessible and engaging online education.
          </p>
          <p className='text-gray-300 text-sm sm:text-base'>
            Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
          </p>
        </div>

        {/* Help Section */}
        <div className='flex flex-col gap-3'>
          <h5 className='text-gray-100 font-bold text-lg'>Get Help</h5>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Contact Us</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Latest Articles</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>FAQ</a>
        </div>

        {/* Programs Section */}
        <div className='flex flex-col gap-3'>
          <h5 className='text-gray-100 font-bold text-lg'>Programs</h5>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Art & Design</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Business</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>IT & Software</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Languages</a>
          <a href='/' className='text-gray-300 text-sm sm:text-base'>Programming</a>
        </div>

        {/* Contact Us and Social Icons */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h5 className='text-gray-100 font-bold text-lg'>Contact Us</h5>
            <a href='/' className='text-gray-300 text-sm sm:text-base'>Address: 123 Main Street, Anytown, CA 12345</a>
            <a href='/' className='text-gray-300 text-sm sm:text-base'>Tel: +(123) 456-7890</a>
            <a href='/' className='text-gray-300 text-sm sm:text-base'>Mail: bywayedu@webkul.in</a>
          </div>

          <div className='flex gap-4 items-center'>
            <FaFacebook className='text-gray-400 hover:text-white text-2xl' />
            <FaGithub className='text-gray-400 hover:text-white text-2xl' />
            <FaGoogle className='text-gray-400 hover:text-white text-2xl' />
            <FaTwitter className='text-gray-400 hover:text-white text-2xl' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
