import star5 from '../../assets/Categories/ratings.svg'


const ProfileReviews = () => {
  return (
    <>
      <div className='w-full h-auto'>

        <div>
          <h2 className='text-[24px] text-grey9 font-bold ' >Reviews <span className='text-[14px]'>(1)</span></h2>
        </div>

        {
          [...Array(3)].map((_, index) => (
            <div key={index} className='w-full bg-white p-6 rounded-lg shadow-md border border-grey9 mb-4'>
              <h3 className='text-grey9 mb-4'>
                Course Name: <span className='text-grey9 font-semibold'>Beginner’s Guide to Design</span>
              </h3>

              <div className='flex items-center mb-4'>
                <p className='text-grey9 flex gap-2'>
                  Ratings: <img src={star5} alt="5-star rating" className='w-[60px]' />
                </p>
                <span className='ml-2 text-sm text-grey7'>(5.0)</span>
              </div>

              <p className='text-grey7 text-sm mt-4'>
                This course provides an excellent foundation in modern web development, covering the basics and beyond. The instructor is highly knowledgeable, and the content is structured well for beginners. Highly recommended for anyone looking to build a career in web development!
              </p>
            </div>
          ))
        }


      </div>

    </>
  )
}

export default ProfileReviews