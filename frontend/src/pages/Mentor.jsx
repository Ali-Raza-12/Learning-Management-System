import ellipse from '../assets/Ellipse 53.svg'
import { TopCourses } from "../data/dummy"
import HomeBanner from "../components/Home/HomeBanner"
import profile from '../assets/Courses/Ellipse 5.svg'
import star from '../assets/Courses/iconStar.svg'
import frame from '../assets/Courses/Frame 427318884.svg'



const Mentor = () => {
  return (
    <>
      <div className='w-full h-auto px-[40px] my-10'>
        <div className='flex justify-between'>

          <div className='w-[840px] h-auto'>
            <div className='w-fit h-auto flex flex-col gap-2 my-10'>
              <p className='text-grey7'>Instructor</p>
              <div className=''>
                <h2 className='text-grey9 font-bold text-[22px]'>Ronald Richards</h2>
                <p className='text-grey7'>Web developer, UX/UI Designer, and Teacher</p>
              </div>
              <div className='flex gap-10'>
                <div className=''>
                  <p className='text-grey7'>Total Students</p>
                  <p className='text-grey9 font-bold'>1000</p>
                </div>
                <div>
                  <p className='text-grey7'>Review</p>
                  <p className='text-grey9 font-bold'>150</p>
                </div>
              </div>
            </div>

            <div className='w-[840px] h-[498px] flex flex-col gap-16px'>
              <div className='flex flex-col gap-[4px]'>
                <h4 className='text-grey9 font-semibold'>About Ronald Richard</h4>
                <p className='text-grey7'>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</p>
              </div>

              <div className='flex flex-col gap-[4px] my-5'>
                <h4 className='text-grey9 font-semibold'>Areas of Expertise</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">User Experience (UX) Design</li>
                  <li className="mb-2">User Interface (UI) Design</li>
                  <li className="mb-2">Information Architecture</li>
                  <li className="mb-2">Visual Design</li>
                  <li className="mb-2">Usability Testing</li>
                  <li className="mb-2">Wireframing and Prototyping </li>
                </ul>
              </div>

              <div className='flex flex-col gap-[4px]'>
                <h4 className='text-grey9 font-semibold'>Professional Experience</h4>
                <p className='text-grey7'>Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</p>
              </div>
            </div>
          </div>

          <div className='w-[220px] h-auto flex flex-col gap-4 mt-10'>
            <img src={ellipse} alt="profile" />
            <button className='border border-grey3 px-[24px] py-[10px] rounded-[8px] text-grey9'>Website</button>
            <button className='border border-grey3 px-[24px] py-[10px] rounded-[8px] text-grey9'>Twitter</button>
            <button className='border border-grey3 px-[24px] py-[10px] rounded-[8px] text-grey9'>Youtube</button>
          </div>
        </div>

        {/* Top Courses  */}
        <div className="w-full h-auto flex flex-col my-4">
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
                <div className='mt-16'>
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

export default Mentor