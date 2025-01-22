import profileImage from '../../assets/Profile/Ellipse 53.svg';
import Button from '../Button/Button';
import icon from '../../assets/Profile/Icon.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            {/* Sidebar */}
            <div className='w-full max-w-[290px] h-fit bg-slate-100 shadow-lg rounded-[16px] flex flex-col gap-[24px] pt-[24px]'>
                <div className='flex flex-col gap-[16px] items-center'>
                    <img src={profileImage} className='w-[160px] h-[160px] rounded-full' alt="Profile" />
                    <h4 className='text-grey9 font-bold text-lg'>John Doe</h4>
                    <Button text='Share Profile' icon={icon} btnClass='border border-grey3 text-grey9 bg-white px-6 py-2 rounded-lg text-[16px]' />
                    <div className='w-full border-b border-b-grey3'></div>
                    <div className='w-full'>
                        <NavLink to="/profile" className={({isActive})=> isActive ? "block bg-black px-4 py-2 text-white text-[16px]" : "block border-b border-grey p-4 text-[16px] text-grey9 hover:bg-blue-100"}>Profile</NavLink>
                        <NavLink to="/profile/courses" className="block border-b border-grey p-4 text-[16px] text-grey9 hover:bg-blue-100">My Course</NavLink>
                        <NavLink to="/profile/teachers" className="block border-b border-grey p-4 text-[16px] text-grey9 hover:bg-blue-100">Teacher</NavLink>
                        <NavLink to="/profile/messages" className="block border-b border-grey p-4 text-[16px] text-grey9 hover:bg-blue-100">Message</NavLink>
                        <NavLink to="/profile/reviews" className="block p-4 text-[16px] text-grey9 hover:bg-blue-100">My Reviews</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar