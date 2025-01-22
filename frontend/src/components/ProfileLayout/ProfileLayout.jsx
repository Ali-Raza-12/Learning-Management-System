import Sidebar from './Sidebar'

const ProfileLayout = ({children}) => {
  return (
   <>
    <div className='flex mx-10 my-5 gap-4'>
        <Sidebar />
        
        <div className='w-full'>{children}</div>
    </div>
   </>
  )
}

export default ProfileLayout