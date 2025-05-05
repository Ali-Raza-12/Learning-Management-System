import profile from '../../assets/Courses/Ellipse 5.svg'
import icon from '../../assets/Courses/Icon.svg'
import icon1 from '../../assets/Courses/Icon1.svg'
import icon2 from '../../assets/Courses/Icon2.svg'
import downChev from '../../assets/Categories/down-chevron.svg'
import star from '../../assets/Courses/iconStar.svg'
import frame from '../../assets/Courses/Frame 427318884.svg'
import { TopCourses } from "../../data/dummy"
import HomeBanner from "../../components/Home/HomeBanner"
import videoImage from '../../assets/Order/Frame 427318906.svg'
import videoIcon from '../../assets/Order/video-recorder.svg'

const Order = () => {
  return (
    <>
      <div className='w-full h-auto px-[40px] my-10 flex flex-col gap-6'>

        {/* Course Overview  */}
        <div className='w-full h-auto flex justify-between'>

          {/* Main  */}
          <div className='max-w-[840px] h-auto flex flex-col gap-[40px]'>

            <h1 className='text-grey9 text-[24px] font-bold'>Introduction to User Experience Design</h1>

            {/* Main content  */}
            <div className='w-full h-auto flex flex-col gap-[24px]'>

              <div>
                <img src={videoImage} alt="vieo" />
              </div>


              <div className='w-[664px] h-[57px] flex gap-[24px]'>
                <p className='px-[21px] py-[18px] rounded-[8px] text-grey9 border border-grey3'>Description</p>
                <p className='px-[21px] py-[18px] rounded-[8px] text-grey9 border border-grey3'>Instructor</p>
                <p className='px-[21px] py-[18px] rounded-[8px] text-grey9 border border-grey3'>Syllabus</p>
                <p className='px-[21px] py-[18px] rounded-[8px] text-grey9 border border-grey3'>Reviews</p>
              </div>

              <div className='w-full h-auto flex flex-col gap-[24px]'>

                <div className='w-full h-auto flex flex-col gap-[24px]'>
                  <div className='flex flex-col gap-[4px]'>
                    <h4 className='text-grey9 font-semibold'>Course Description</h4>
                    <p className='text-grey7'>This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </p>
                  </div>
                  <div className='flex flex-col gap-[4px]'>
                    <h4 className='text-grey9 font-semibold'>Course Description</h4>
                    <p className='text-grey7'>This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </p>
                  </div>
                </div>

                <div className='w-full h-auto flex flex-col gap-[16px]'>
                  <h4 className='text-grey9'>Instructor</h4>

                  <div className=''>
                    <h4 className='text-primary6'>Ronald Richards</h4>
                    <p className='text-grey7'>UI/UX Designer</p>
                  </div>

                  <div className='flex gap-[16px] items-center'>
                    <img src={profile} className='w-[120px] h-[120px]' alt="profile" />

                    <div className='flex flex-col gap-1 items-start justify-center'>

                      <div className='flex gap-2'>
                        <img src={icon} className='w-[24px] h-[24px]' alt="icon1" />
                        <span className='text-grey9'>40,445 Reviews</span>
                      </div>

                      <div className='flex gap-2'>
                        <img src={icon2} className='w-[24px] h-[24px]' alt="icon" />
                        <span className='text-grey9'>15 Courses</span>
                      </div>

                      <div className='flex gap-2'>
                        <img src={icon1} className='w-[24px] h-[24px]' alt="icon1" />
                        <span className='text-grey9'>500 Students</span>
                      </div>

                    </div>
                  </div>

                  <p className='text-grey7'>With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side  */}
          <div className='w-[400px] h-fit flex flex-col px-3 py-5 rounded-[16px] border border-grey3'>

            <h3 className='text-[18px] text-grey9 font-bold mb-4 '>Course Completion</h3>

            {/* course completion  */}
            <div className='flex gap-4 my-4'>
              <img src={downChev} className='border border-grey9' alt="downkey" />
              <h5 className='text-grey9 font-medium'>Introduction to UX Design</h5>
            </div>

            <p className='border border-grey3'></p>

            <div className='flex justify-between py-2'>
              <div className="flex gap-2 w-[267px] p-2 items-start">
                <input type="checkbox" className="mt-[2px] w-5 h-5" />
                <p className='text-grey9'>1.</p>
                <p className="text-grey9 text-sm leading-5">What is User Experience (UX) Design?</p>
              </div>
              <div className='w-[68px] h-auto flex gap-1 '>
                <img src={videoIcon} className='w-6 h-6' alt="icon" />
                <p className='text-grey7 text-sm'>4 min</p>
              </div>
            </div>

            <div className='flex justify-between py-2'>
              <div className="flex gap-2 w-[267px] p-2 items-start">
                <input type="checkbox" className="mt-[2px] w-5 h-5" />
                <p className='text-grey9'>1.</p>
                <p className="text-grey9 text-sm leading-5">What is User Experience (UX) Design?</p>
              </div>
              <div className='w-[68px] h-auto flex gap-1'>
                <img src={videoIcon} className='w-6 h-6' alt="icon" />
                <p className='text-grey7 text-sm'>4 min</p>
              </div>
            </div>


            <div className='flex gap-4 my-4'>
              <img src={downChev} className='border border-grey9' alt="downkey" />
              <h5 className='text-grey9 font-medium'>Introduction to UX Design</h5>
            </div>

            <p className='border border-grey3'></p>

            <div className='flex justify-between py-2'>
              <div className="flex gap-2 w-[267px] p-2 items-start">
                <input type="checkbox" className="mt-[2px] w-5 h-5" />
                <p className='text-grey9'>1.</p>
                <p className="text-grey9 text-sm leading-5">What is User Experience (UX) Design?</p>
              </div>
              <div className='w-[68px] h-auto flex gap-1 '>
                <img src={videoIcon} className='w-6 h-6' alt="icon" />
                <p className='text-grey7 text-sm'>4 min</p>
              </div>
            </div>

            <div className='flex justify-between py-2'>
              <div className="flex gap-2 w-[267px] p-2 items-start">
                <input type="checkbox" className="mt-[2px] w-5 h-5" />
                <p className='text-grey9'>1.</p>
                <p className="text-grey9 text-sm leading-5">What is User Experience (UX) Design?</p>
              </div>
              <div className='w-[68px] h-auto flex gap-1'>
                <img src={videoIcon} className='w-6 h-6' alt="icon" />
                <p className='text-grey7 text-sm'>4 min</p>
              </div>
            </div>

          </div>
        </div>

        {/* Top Courses  */}
        <div className="w-full h-auto flex flex-col">
          <HomeBanner title="More Courses by Ronald Richards" btnText="See All" />

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

        {/* Learners Reviews  */}
        <div className='my-5'>
          <h4 className='text-grey9 font-semibold'>Learner Reviews</h4>

          <div className='flex gap-[139px]'>

            {/* Review Percentage */}
            <div className='flex gap-[139px] my-5'>
              <div className='w-[186px] h-[177px] flex flex-col  gap-4'>
                <div className='flex gap-1'>
                  <img src={star} alt="star rating" />
                  <p>4.6</p>
                  <p>146,951 reviews</p>
                </div>
                <img src={frame} alt="ratings" />
              </div>
            </div>

            {/* Course Comments  */}
            <div className='max-w-[949px] h-auto flex flex-col gap-[16px] my-10'>

              <div className='flex items-center gap-20 max-w-[949px] h-40 px-2 rounded-[16px] border border-grey3'>

                <div className='w-[100px]h-auto flex flex-col justify-center gap-[12px] ml-10'>
                  <img src={profile} className='w-[60px]' alt="" />
                  <p className='font-semibold truncate w-full'>Mark Doe</p>
                </div>

                <div className='w-full h-auto flex flex-col gap-2 mt-1'>
                  <div className='flex gap-[28px]'>
                    <div className='flex gap-[4px]'>
                      <img src={star} alt="ratings" />
                      <span>5</span>
                    </div>
                    <div>
                      <p className='text-grey7'>Reviewed on 22nd March, 2024</p>
                    </div>
                  </div>
                  <p className='text-grey7'>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
                </div>
              </div>

              <div className='flex items-center gap-20 max-w-[949px] h-40 px-2 rounded-[16px] border border-grey3'>

                <div className='w-[100px]h-auto flex flex-col justify-center gap-[12px] ml-10'>
                  <img src={profile} className='w-[60px]' alt="" />
                  <p className='font-semibold truncate w-full'>Mark Doe</p>
                </div>

                <div className='w-full h-auto flex flex-col gap-2 mt-1'>
                  <div className='flex gap-[28px]'>
                    <div className='flex gap-[4px]'>
                      <img src={star} alt="ratings" />
                      <span>5</span>
                    </div>
                    <div>
                      <p className='text-grey7'>Reviewed on 22nd March, 2024</p>
                    </div>
                  </div>
                  <p className='text-grey7'>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
                </div>
              </div>

              <div className='flex items-center gap-20 max-w-[949px] h-40 px-2 rounded-[16px] border border-grey3'>
                <div className='w-[100px]h-auto flex flex-col justify-center gap-[12px] ml-10'>
                  <img src={profile} className='w-[60px]' alt="" />
                  <p className='font-semibold truncate w-full'>Mark Doe</p>
                </div>

                <div className='w-full h-auto flex flex-col gap-2 mt-1'>
                  <div className='flex gap-[28px]'>
                    <div className='flex gap-[4px]'>
                      <img src={star} alt="ratings" />
                      <span>5</span>
                    </div>
                    <div>
                      <p className='text-grey7'>Reviewed on 22nd March, 2024</p>
                    </div>
                  </div>
                  <p className='text-grey7'>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Order