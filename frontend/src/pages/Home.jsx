import heroimg from '../assets/Group 469348.svg'
import { counts, TopCategories, TopCourses, TopInstructor, Testimonials } from "../data/dummy"
import HomeBanner from "../components/Home/HomeBanner"
import left from '../assets/left-chevron.svg'
import right from '../assets/chevron-right.svg'
import HalfComp from "../components/Home/HalfComp"
import image1 from '../assets/image.svg'
import image2 from '../assets/image1.svg'
import arrow from '../assets/arrow-narrow-right.svg'

const Home = () => {
  return (
    <>

      {/* Border  */}
      <p className="w-full border-t border-gray-300"></p>

      <div className="w-full h-auto md:px-6 lg:px-8 px-10">

        {/* Hero Section  */}
        <div className="w-full h-auto flex items-center justify-between my-6 gap-4">
          <HalfComp
            title='Unlock Your Potential with Byway'
            titleClass="text-[40px] font-extrabold text-gray-900 leading-10 sm:text-[30px] md:text-[35px] lg:text-[40px]"
            content= "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success."
            contentClass="text-gray-700 sm:text-[12px] md:text-[14px] lg:text-[18px]"
            btntext="Start your instructor journey"
            btnClass="bg-black text-white sm:text-[10px] md:text-[13px] lg:text-[16px]"
          />
          <div>
            <img src={heroimg} alt="heroimg" className="md:w-[410px] lg:w-[500px] w-[500px] " />
          </div>
        </div>

        {/* Counts  */}
        <div className="w-full h-auto items-center py-[40px] flex flex-wrap justify-between my-[30px]">
          {counts.map((count, index) => (
            <div key={index} className="mt-6 gap-[6px] flex flex-col items-center justify-center">
              <h2 className="text-3xl text-grey9 font-bold">{count.no}</h2>
              <p className="text-grey9 font-normal">{count.title}</p>
            </div>
          ))}
        </div>

        {/* Top Categories  */}
        <div className="w-full h-auto flex flex-col my-[30px]">
          <HomeBanner title='Top Categories' btnText="See All" />

          <div className="w-full h-auto flex flex-wrap justify-between">
            {TopCategories.map((category, index) => (
              <div key={index} className="w-[286px] h-[224px] mt-6 py-[24px] px-[93px] flex flex-col items-center justify-center gap-[8px] rounded-[16px] border border-gray-300 shadow-lg">
                <img src={category.Image} alt="" />
                <h3 className="text-xl text-grey9 font-bold">{category.name}</h3>
                <p className="text-grey7">{category.no}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Courses  */}
        <div className="w-full h-auto flex flex-col">
          <HomeBanner title="Top Courses" btnText="See All" />

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

        {/* Top Instructor */}
        <div className="flex flex-col gap-[24px my-[30px]">
          <HomeBanner title="Top Instructor" btnText="See All" />

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

        {/* Testimonials  */}
        <div className="w-full h-auto my-[30px]">
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

        {/* Become Instructor  */}
        <div className="w-full h-auto flex flex-col gap-[60px] py-[30px]">

          <div className="flex items-center justify-between mx-10 gap-5">
            <img className="w-[400px] h-[425px]" src={image1} alt="" />

              <HalfComp 
                title='Become an Instructor'
                titleClass="text-xl text-black font-bold"
                content= "Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love."
                contentClass="text-gray-800"
                btntext="Start Your Instructor Journey"
                btnClass="bg-black text-white"
                icon={arrow}
              />

          </div>

          <div className="flex items-center justify-between mx-10 gap-5">

              <HalfComp 
                title='Transform your life through education'
                titleClass="text-xl text-black font-bold"
                content= "Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                contentClass="text-gray-800"
                btntext="Checkout Courses"
                btnClass="bg-black text-white"
                icon={arrow}
              />

            <img className="w-[400px] h-[425px] object-contain" src={image2} alt="" />
          
          </div>
        </div>

      </div>

    </>
  )
}

export default Home