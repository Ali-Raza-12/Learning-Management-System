import rightChevron from '../assets/Categories/chevron-right.svg'
import ratings from '../assets/Categories/ratings.svg'
import ellipse from '../assets/Courses/Ellipse 5.svg'
import global from '../assets/Courses/globe-02.svg'
import profile from '../assets/Courses/Ellipse 5.svg'
import icon from '../assets/Courses/Icon.svg'
import icon1 from '../assets/Courses/Icon1.svg'
import icon2 from '../assets/Courses/Icon2.svg'
import downChev from '../assets/Categories/down-chevron.svg'
import teacher from '../assets/Courses/image 4.svg'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import star from '../assets/Courses/iconStar.svg'
import frame from '../assets/Courses/Frame 427318884.svg'
import { Testimonials } from "../data/dummy"
import left from '../assets/left-chevron.svg'
import right from '../assets/chevron-right.svg'
import { TopCourses } from "../data/dummy"
import HomeBanner from "../components/Home/HomeBanner"


const Course = () => {
  return (
    <>
      <div className='w-full h-auto px-[40px] my-10 flex flex-col gap-6'>

        {/* Course Overview  */}
        <div className='w-full h-auto flex'>

          {/* Main  */}
          <div className='max-w-[840px] h-auto flex flex-col gap-[40px]'>

            <div className='w-full h-[24px] flex gap-[8px]'>
              <p className='text-grey7'>Home</p>
              <img src={rightChevron} alt="" />
              <p className='text-grey7'>Categories</p>
              <img src={rightChevron} alt="" />
              <p className='text-primary6'>Introduction to User Experience</p>
            </div>


            {/* Main content  */}
            <div className='w-full h-auto flex flex-col gap-[24px]'>
              <div className='flex flex-col gap-[17px]'>
                <h1 className='font-inter text-grey9 font-bold text-[40px] leading-[140%] '>Introduction to User Experience Design</h1>
                <p className='w-full h-auto text-grey7'>
                  This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.
                </p>
              </div>

              <div className='w-full h-auto flex flex-col gap-[24px]'>

                <p className='flex gap-[5px] text-warning'>4.6
                  <span className='flex gap-[5px] text-grey7'><img src={ratings} alt="ratings" /> (651651 rating)</span>
                  <span className='text-grey7'>| 22 Total Hours. 155 Lectures. All levels</span>
                </p>

                <div className='flex gap-[5px] items-center'>
                  <img src={ellipse} alt="img" />
                  <p className='text-grey7'>Created by
                    <span className='text-primary6'>Ronal Richards</span></p>
                </div>

                <div className='flex gap-[12px]'>
                  <img src={global} alt="Duniya" />
                  <span className='text-grey7'>English, Spanish, Italian, German</span>
                </div>

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

                <div className='w-full h-auto flex flex-col gap-[16px]'>
                  <h3 className='text-[18px] text-grey9 font-bold'>Syllabus</h3>
                  <div className='flex flex-col'>

                    <div className='w-[806px] h-auto p-[24px] flex justify-between gap-[16px] border-t border-l border-r border-grey3 rounded-t-lg'>
                      <div className='flex gap-[16px]'>
                        <img src={downChev} className='w-[24px] h-[24px] border border-grey7' alt="downarrow" />
                        <h5 className='text-grey9 font-semibold'>Introduction to UX Design</h5>
                      </div>
                      <div className='flex gap-[16px]'>
                        <p className='text-grey7'>5 Lessons</p>
                        <p className='text-grey7'>1 hour</p>
                      </div>
                    </div>

                    <div className='w-[806px] h-auto p-[24px] flex justify-between gap-[16px] border-t border-l border-r border-grey3 '>
                      <div className='flex gap-[16px]'>
                        <img src={downChev} className='w-[24px] h-[24px] border border-grey7' alt="downarrow" />
                        <h5 className='text-grey9 font-semibold'>Introduction to UX Design</h5>
                      </div>
                      <div className='flex gap-[16px]'>
                        <p className='text-grey7'>5 Lessons</p>
                        <p className='text-grey7'>1 hour</p>
                      </div>
                    </div>

                    <div className='w-[806px] h-auto p-[24px] flex justify-between gap-[16px] border-t border-l border-r border-grey3'>
                      <div className='flex gap-[16px]'>
                        <img src={downChev} className='w-[24px] h-[24px] border border-grey7' alt="downarrow" />
                        <h5 className='text-grey9 font-semibold'>Introduction to UX Design</h5>
                      </div>
                      <div className='flex gap-[16px]'>
                        <p className='text-grey7'>5 Lessons</p>
                        <p className='text-grey7'>1 hour</p>
                      </div>
                    </div>

                    <div className='w-[806px] h-auto p-[24px] flex justify-between gap-[16px] border-t border-b border-l border-r border-grey3 rounded-b-lg'>
                      <div className='flex gap-[16px]'>
                        <img src={downChev} className='w-[24px] h-[24px] border border-grey7' alt="downarrow" />
                        <h5 className='text-grey9 font-semibold'>Introduction to UX Design</h5>
                      </div>
                      <div className='flex gap-[16px]'>
                        <p className='text-grey7'>5 Lessons</p>
                        <p className='text-grey7'>1 hour</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Side  */}
          <div className='w-[400px] h-[508px] flex flex-col items-center py-5 justify-between rounded-[16px] border border-grey3'>
            <img src={teacher} className='w-[356px] h-[200px] ' alt="" />

            <div className='flex flex-col gap-[24px] border-b-grey7'>
              <div className='flex gap-[24px]'>
                <h3 className='text-grey9'>$49.5</h3>
                <h5 className='text-grey9'><del>$99.5</del></h5>
                <h4 className='text-green-600'>50% Off</h4>
              </div>

              <div className='flex flex-col gap-[16px]'>
                <button className='w-[352px] h-[48px] px-[24px] py-[10px] rounded-lg bg-gray-900 text-white'>Add To Cart</button>
                <button className='w-[352px] h-[48px] px-[24px] py-[10px] rounded-lg border border-gray-900 text-grey9'>Buy Now</button>
              </div>
            </div>

            <div className='w-full flex flex-col gap-2 ml-[50px]'>
              <p className='text-grey9 font-semibold'>Share</p>
              <div className='flex gap-8 items-center'>
                <FaFacebook style={{ fontSize: '35px', color: 'gray' }} />
                <FaGithub style={{ fontSize: '35px', color: 'gray' }} />
                <FaGoogle style={{ fontSize: '35px', color: 'gray' }} />
                <FaTwitter style={{ fontSize: '35px', color: 'gray' }} />
              </div>
            </div>

          </div>
        </div>

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

        {/* Testimonials  */}
        <div className="w-full h-auto mb-10">
          <div className="flex justify-between">
            <p className="text-2xl text-grey9 font-bold">What Our Customer Say
              <br />
              <span>About Us</span>
            </p>
            <div className="flex gap-[6px]">
              <button className="bg-grey3 px-[16px] py-[10px] rounded-[8px]"><img src={left} alt="left" /></button>
              <button className="bg-grey3 px-[16px] py-[10px] rounded-[8px]"><img src={right} alt="right" /></button>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-[8px] mt-[25px]">
            {Testimonials.map((testimonial, index) => (
              <div key={index} className="mt-4 flex flex-col gap-[8px] p-[24px] rounded-[16px] border border-grey3 shadow-md">
                <img className="w-[36px] h-[36px]" src={testimonial.img} alt="img" />
                <p className="text-left text-black">{testimonial.para}</p>
                <div className="flex gap-[8px] mt-2">
                  <img className="w-[60px] h-[60px]" src={testimonial.person} alt="person" />
                  <div>
                    <h1 className="text-black font-bold">{testimonial.name}</h1>
                    <p className="text-grey7">{testimonial.exp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Courses  */}
        <div className="w-full h-auto flex flex-col mb-10">
          <HomeBanner title="More Courses Like This" btnText="See All" />

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
    </>
  )
}

export default Course