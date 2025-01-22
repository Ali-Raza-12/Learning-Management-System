import { CiSearch } from "react-icons/ci";
import relevanceIcon from '../assets/Profile/RelevanceIcon.svg'
import leftChev from '../assets/Categories/left-chevron.svg'
import rightChev from '../assets/Categories/chevron-right.svg'
import { TopInstructor } from "../data/dummy"
import HomeBanner from "../components/Home/HomeBanner"


const ProfileTeachers = () => {
  return (
    <>
        <div className='w-full h-auto'>

          {/* Header  */}
          <div className='w-full h-auto flex flex-col gap-4'>
            <div className='w-full h-auto'>
              <h2 className='text-grey9 text-[24px] font-bold'>Teachers <span className='text-[14px]'>(12)</span></h2>
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

          {/* Top Instructor */}
          <div className="w-full h-auto flex flex-col gap-[24px my-[30px]">
            {/* <HomeBanner title="Top Instructor" btnText="See All" /> */}

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
              {TopInstructor.map((instructor, index) => (
                <div key={index} className="mt-6 p-[16px] border border-gray-300 rounded-[16px] flex flex-col gap-[16px] items-center justify-center">
                  <img src={instructor.img} alt="instructor" />
                  <h1 className="text-base text-grey9 font-bold">{instructor.name}</h1>
                  <p className="text-grey7">{instructor.expertise}</p>

                  <div className="w-full border border-gray-200"></div>

                  <div className="flex justify-between w-full">
                    <div className="flex gap-[4px]">
                      <img src={instructor.rate[0].star} alt="" />
                      <p className="text-grey9">{instructor.rate[0].points}</p>
                    </div>
                    <p className="text-grey7">{instructor.rate[0].stdNo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Page Numbers  */}
          <div className='w-full flex justify-center my-[20px] items-center'>
            <div className='flex border border-grey3 rounded-lg overflow-hidden shadow-lg'>
              <img src={leftChev} className='p-[8px] border-r border-grey3 cursor-pointer hover:bg-grey2 transition' alt="left" />
              <p className='py-[8px] px-[12px] text-grey7 font-semibold border-r border-grey3 cursor-pointer hover:bg-grey2 transition'>1</p>
              <p className='py-[8px] px-[12px] text-grey7 font-semibold border-r border-grey3 cursor-pointer hover:bg-grey2 transition'>2</p>
              <p className='py-[8px] px-[12px] text-grey7 font-semibold border-r border-grey3 cursor-pointer hover:bg-grey2 transition'>3</p>
              <p className='py-[8px] px-[12px] text-grey7 font-semibold border-r border-grey3 cursor-pointer hover:bg-grey2 transition'>4</p>
              <img src={rightChev} className='p-[8px] cursor-pointer hover:bg-grey2 transition' alt="right" />
            </div>
          </div>
        </div>
    </>
  )
}

export default ProfileTeachers