import Button from "../components/Button/Button"
import profileImage from '../assets/Profile/Ellipse 53.svg';
import icon from '../assets/Profile/Icon.svg';

const ProfileCourses = () => {
  return (
    <>
    <div className='container mx-auto max-w-full px-5 lg:px-10 my-10 flex gap-10 flex-col lg:flex-row'>

      {/* Sidebar */}
      <div className='max-w-[290px] w-full h-fit bg-slate-100 shadow-lg rounded-[16px] flex flex-col gap-[24px] pt-[24px]'>
        <div className='flex flex-col gap-[16px] items-center'>
          <img src={profileImage} className='w-[160px] h-[160px] rounded-full' alt="Profile" />
          <h4 className='text-grey9 font-bold text-lg'>John Doe</h4>
          <Button text='Share Profile' icon={icon} btnClass='border border-grey3 text-grey9 bg-white px-6 py-2 rounded-lg text-[16px]' />
          <div className='w-[280px] border-b border-b-grey3'></div>
          <div className='w-full'>
            <Button text='Profile' btnClass='w-full border-b border-grey p-4 text-[16px] bg-grey9 text-white rounded-none' />
            <Button text='My Course' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
            <Button text='Teacher' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
            <Button text='Message' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
            <Button text='My Reviews' btnClass='w-full p-4 text-[16px] text-grey9 rounded-none' />
          </div>
        </div>
      </div>

      {/* Courses Content */}
      <div className='flex-1 max-w-[950px] flex flex-col gap-5'>
        
      </div>
      </div>
      </>
  )
}

export default ProfileCourses