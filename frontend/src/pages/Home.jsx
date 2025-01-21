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

      <div className="w-full h-auto px-[5px] xs:px-[10px] sm:px-[20px] md:px-[40px]  flex flex-col items-center">

        {/* Hero Section */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 items-center my-6 gap-8">
          {/* Text Content */}
          <div className="w-full h-auto flex flex-col gap-6">
            <HalfComp
              title="Unlock Your Potential with Byway"
              titleClass="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-extrabold text-gray-900 leading-tight"
              content="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success."
              contentClass="text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] leading-7"
              btntext="Start your instructor journey"
              btnClass="mx-auto md:mx-0 bg-black text-white p-2 sm:p-4 text-xs sm:text-sm"
            />
          </div>

          {/* Hero Image */}
          <div className="w-full h-auto flex justify-center items-center">
            <img
              src={heroimg}
              alt="heroimg"
              className="max-w-[300px] md:max-w-[480px] lg:max-w-[600px] object-cover"
            />
          </div>
        </div>


        {/* Counts */}
        <div className="w-full h-auto flex justify-center items-center py-[40px] my-[10px]">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {counts.map((count, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center gap-[6px]"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  {count.no}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700">
                  {count.title}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Top Categories  */}
        <div className="w-full h-auto flex flex-col my-[30px]">
          <HomeBanner title='Top Categories' btnText="See All" />

          <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {TopCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-4 py-[24px] px-[32px] rounded-[16px] border border-gray-300 shadow-lg">
                <img src={category.Image} alt="" className="w-20 h-20 sm:w-[120px] sm:h-[120px] object-contain" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-700">{category.no}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Top Courses  */}
        <div className="w-full h-auto flex flex-col my-[30px]">
          <HomeBanner title="Top Courses" btnText="See All" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TopCourses.map((course, index) => (
              <div
                key={index}
                className="mt-6 p-4 border border-gray-300 rounded-[16px] flex flex-col gap-4 shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={course.img}
                  alt="course-img"
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <p className="text-base sm:text-lg font-bold text-gray-900">{course.title}</p>
                  <p className="font-light text-sm text-gray-600">{course.subheading}</p>
                  <div className="flex gap-2 items-center">
                    <img src={course.rate[0].img} alt="rate-img" className="w-20" />
                    <p className="text-sm text-gray-600 font-normal">{course.rate[0].title}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{course.para}</p>
                  <p className="font-semibold text-base sm:text-lg text-gray-800">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Top Instructor */}
        <div className="w-full h-auto flex flex-col gap-[24px my-[30px]">
          <HomeBanner title="Top Instructor" btnText="See All" />

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

        {/* Testimonials  */}
        <div className="w-full h-auto my-[30px]">
          <div className="flex justify-between">
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-grey9 font-bold'>What Our Customer Say
              <br />
              <span>About Us</span>
            </p>
            <div className="flex gap-[6px]">
              <button className="bg-grey3 px-[16px] py-[10px] rounded-[8px]"><img src={left} alt="left" /></button>
              <button className="bg-grey3 px-[16px] py-[10px] rounded-[8px]"><img src={right} alt="right" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] mt-[25px]">
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
        <div className="w-full h-auto flex flex-col items-center gap-[60px] py-[30px]">
          <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between items-center">
            <img
              className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] h-auto object-cover"
              src={image1}
              alt=""
            />

            <div className='w-full max-w-full md:max-w-[400px] lg:max-w-[549px] h-auto'>
              <HalfComp
                title="Become an Instructor"
                titleClass="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-extrabold text-gray-900 leading-tight"
                content="Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love."
                contentClass="text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] leading-7"
                btntext="Start Your Instructor Journey"
                btnClass="mx-auto md:mx-0 bg-black text-white p-2 sm:p-4 text-xs sm:text-sm"
                icon={arrow}
                iconClass="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between items-center">
            <div className='w-full max-w-full md:max-w-[400px] lg:max-w-[549px] h-auto'>
              <HalfComp
                title='Transform your life through education'
                titleClass="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-extrabold text-gray-900 leading-tight"
                content="Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                contentClass="text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] leading-7"
                btntext="Checkout Courses"
                btnClass="mx-auto md:mx-0 bg-black text-white p-2 sm:p-4 text-xs sm:text-sm"
                icon={arrow}
                iconClass="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>

            <img className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] h-auto object-cover" src={image2} alt="" />
          </div>
        </div>


      </div>

    </>
  )
}

export default Home