import Button from '../components/Button/Button'
import image1 from '../assets/Categories/filter.svg'
import downChev from '../assets/Categories/down-chevron.svg'
import upChevron from '../assets/Categories/chevron-up.svg'
import star5 from '../assets/Categories/ratings.svg'
import HomeBanner from "../components/Home/HomeBanner"
import { TopCourses, TopInstructor } from "../data/dummy"
import leftChev from '../assets/Categories/left-chevron.svg'
import rightChev from '../assets/Categories/chevron-right.svg'



const Category = () => {
  return (
    <>
      <div className='max-w-[1440px] h-auto flex gap-[60px] my-[50px]'>
        <div className='max-w-[1280px] h-auto flex flex-col gap-[24px] mx-[40px]'>
          <h1 className='text-[24px] text-grey9 font-bold'>Design Courses</h1>
          <div className='max-w-[1280px] min-h-[1289px] flex flex-col gap-[24px]'>

            <h3 className='text-grey9 font-bold'>All Development Courses</h3>

            <div className='flex justify-between'>
              <Button text={'Filter'} icon={image1} btnClass='text-grey9 flex gap-[6px] px-[24px] border border-grey9 font-semibold place-items-center' />
              <div className='max-h-[48px] flex gap-[15px] items-center'>
                <p className='text-grey9 font-medium'>Sort By</p>
                <Button text={'Relevance'} icon={downChev} btnClass='text-grey9 flex gap-[6px] py-[10px] px-[24px] border border-grey9 font-semibold place-items-center' />
              </div>
            </div>

            <div className='w-full h-full flex gap-[40px] '>

              {/* Side Bar  */}
              <div className='min-w-[305px]'>

                <div className='w-full flex justify-between p-[16px]'>
                  <p className='font-medium text-grey9'>Rating</p>
                  <button className='border border-grey9'><img src={upChevron} alt="upanddown" /></button>
                </div>

                <div className='flex flex-col gap-[16px] px-[16px] py-[8px]'>
                  <img src={star5} className='w-[100px] h-[20px]' alt="ratings" />
                  <img src={star5} className='w-[100px] h-[20px]' alt="ratings" />
                  <img src={star5} className='w-[100px] h-[20px]' alt="ratings" />
                  <img src={star5} className='w-[100px] h-[20px]' alt="ratings" />
                  <img src={star5} className='w-[100px] h-[20px]' alt="ratings" />
                </div>

                <div className='w-full flex justify-between p-[16px]'>
                  <p className='font-medium text-grey9'>Number of Chapters</p>
                  <button className='border border-grey9'><img src={upChevron} alt="upanddown" /></button>
                </div>

                <div className='flex flex-col gap-[16px] px-[16px] py-[8px]'>
                  <div className='w-[85px] h-[26px] flex gap-[12px]'>
                    <input type="checkbox" className='w-[24px] h-[24px]' />
                    <p className='text-grey9'>1-10</p>
                  </div>
                  <div className='w-[85px] h-[26px] flex gap-[12px]'>
                    <input type="checkbox" className='w-[24px] h-[24px]' />
                    <p className='text-grey9'>10-15</p>
                  </div>
                  <div className='w-[85px] h-[26px] flex gap-[12px]'>
                    <input type="checkbox" className='w-[24px] h-[24px]' />
                    <p className='text-grey9'>15-20</p>
                  </div>
                  <div className='w-[85px] h-[26px] flex gap-[12px]'>
                    <input type="checkbox" className='w-[24px] h-[24px]' />
                    <p className='text-grey9'>20-15</p>
                  </div>
                </div>

                <div className='w-full flex justify-between p-[16px]'>
                  <p className='font-medium text-grey9'>Price</p>
                  <button className='border border-grey9'><img src={upChevron} alt="upanddown" /></button>
                </div>

                <div className='w-full flex justify-between p-[16px]'>
                  <p className='font-medium text-grey9'>Category</p>
                  <button className='border border-grey9'><img src={upChevron} alt="upanddown" /></button>
                </div>

              </div>

              {/* Main Content  */}
              <div className="w-full h-auto flex flex-col">
                <HomeBanner title="Top Courses" btnText="See All" />

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
            </div>

            {/* Popular Mentors */}
            <div className="flex flex-col gap-[24px my-[30px]">
              <HomeBanner title="Popular Mentors" btnText="See All" />

              <div className="flex flex-wrap justify-between">
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

            {/* Top Courses  */}
            <div className="w-full h-auto flex flex-col">
              <HomeBanner title="Featured Courses" btnText="See All" />

              <div className="flex flex-wrap justify-between">
                {TopCourses.map((course, index) => (
                  <div key={index} className="mt-6 p-[8px] border border-gray-300 rounded-[16px] flex flex-col gap-[8px]">
                    <img src={course.img} alt="course-img" />
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-base text-grey9 font-bold">{course.title}</p>
                      <p className="font-light text-grey7">{course.subheading}</p>
                      <div className="flex gap-[8px]">
                        <img src={course.rate[0].img} alt="img" />
                        <p className="text-sm text-grey7 font-normal">{course.rate[0].title}</p>
                      </div>
                      <p className="text-xs text-grey7">{course.para}</p>
                      <p>{course.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Category