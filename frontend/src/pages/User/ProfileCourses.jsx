import { CiSearch } from "react-icons/ci";
import relevanceIcon from '../../assets/Profile/RelevanceIcon.svg'
import { TopCourses } from "../../data/dummy"
import leftChev from '../../assets/Categories/left-chevron.svg'
import rightChev from '../../assets/Categories/chevron-right.svg'



const ProfileCourses = () => {
  return (
    <>
      <div className='w-full h-auto'>

        {/* Header  */}
        <div className='w-full h-auto flex flex-col gap-4'>
          <div className='max-w-[920px] h-auto'>
            <h2 className='text-grey9 text-[24px] font-bold'>Courses <span className='text-[14px]'>(12)</span></h2>
          </div>
          <div className='flex justify-between'>

            {/* Search Bar */}
            <div className="relative items-center hidden sm:flex">
              <CiSearch className="absolute left-3 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 outline-none pr-4 py-2 border rounded-lg text-gray-600"
              />
            </div>

            <div className='flex gap-6 items-center'>
              <p>Sort By</p>
              <button className='flex items-center gap-[6px] px-6 py-[10px] border border-grey9 rounded-[8px]'>Relevance <span><img src={relevanceIcon} alt="" /></span></button>
              <button className='flex items-center gap-[6px] px-6 py-[10px] border border-grey9 rounded-[8px]'>Filter <span><img src={relevanceIcon} alt="" /></span></button>
            </div>
          </div>
        </div>

        {/* Content  */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="mt-6 p-[8px] border border-gray-300 rounded-[16px] flex flex-col gap-[8px]">
              <img src={TopCourses[0]?.img} alt="course-img" />
              <div className="flex flex-col gap-[8px]">
                <p className="text-base text-grey9 font-bold">{TopCourses[0]?.title}</p>
                <p className="font-light text-grey7">{TopCourses[0]?.subheading}</p>
                <div className="flex gap-[8px]">
                  <img src={TopCourses[0]?.rate[0]?.img} alt="img" />
                  <p className="text-sm text-grey7 font-normal">{TopCourses[0]?.rate[0]?.title}</p>
                </div>
                <p className="text-xs text-grey7">{TopCourses[0]?.para}</p>
                <p>{TopCourses[0]?.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full flex justify-center my-[20px] items-center'>
          <div className='flex border border-grey9 rounded-lg overflow-hidden shadow-lg'>
            <img src={leftChev} className='p-[8px] border-r border-grey9 cursor-pointer hover:bg-grey2 transition' alt="left" />
            <p className='py-[8px] px-[12px] text-grey9 font-semibold border-r border-grey9 cursor-pointer hover:bg-grey2 transition'>1</p>
            <p className='py-[8px] px-[12px] text-grey9 font-semibold border-r border-grey9 cursor-pointer hover:bg-grey2 transition'>2</p>
            <p className='py-[8px] px-[12px] text-grey9 font-semibold border-r border-grey9 cursor-pointer hover:bg-grey2 transition'>3</p>
            <p className='py-[8px] px-[12px] text-grey9 font-semibold border-r border-grey9 cursor-pointer hover:bg-grey2 transition'>4</p>
            <img src={rightChev} className='p-[8px] cursor-pointer hover:bg-grey2 transition' alt="right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCourses