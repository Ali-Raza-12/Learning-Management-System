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


const Course = () => {
  return (
    <>
      <div className='w-full h-auto px-[40px] my-10'>
        <div className='w-full h-auto flex'>

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

                    <div className='w-[806px] h-auto p-[24px] flex justify-between gap-[16px] border-t border-l border-r border-grey3 rounded-b-lg'>
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

          <div className='w-[400px] flex flex-col justify-center h-auto rounded-[16px] border border-grey3'>
            <img src={teacher} className='w-[356px] h-[200px] ' alt="" />
            <div className='flex flex-col gap-[24px]'>
              <h3 className='text-grey9'>$49.5</h3>
              <h5 className='text-grey9'><del>$99.5</del></h5>
              <h4 className='text-green-600'>50% Off</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course