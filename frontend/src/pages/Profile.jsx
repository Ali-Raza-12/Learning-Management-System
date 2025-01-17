import Image from '../assets/Profile/Image.svg';
import profileImage from '../assets/Profile/Ellipse 53.svg';
import Button from '../components/Button/Button';
import icon from '../assets/Profile/Icon.svg';

const Profile = () => {
  return (
    <>
      <div className='container mx-auto max-w-full px-5 lg:px-10 my-10 flex gap-10 flex-col lg:flex-row'>

        {/* Sidebar */}
        <div className='max-w-[290px] w-full h-fit bg-slate-100 shadow-lg rounded-[16px] flex flex-col gap-[24px] pt-[24px]'>
          <div className='flex flex-col gap-[16px] items-center'>
            <img src={profileImage} className='w-[160px] h-[160px] rounded-full' alt="Profile" />
            <h4 className='text-grey9 font-bold text-lg'>John Doe</h4>
            <Button text='Share Profile' icon={icon} btnClass='border border-grey3 text-grey9 bg-white px-6 py-2 rounded-lg text-[16px]' />
            <div className='w-[280px] border-b border-b-grey3'></div>
            <div className='w-full'>
              <Button text='Profile' btnClass='w-full border-b border-grey p-4 text-[16px] bg-grey9 text-white rounded-none' />
              <Button text='My Course' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
              <Button text='Teacher' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
              <Button text='Message' btnClass='w-full border-b border-grey p-4 text-[16px] text-grey9 rounded-none' />
              <Button text='My Reviews' btnClass='w-full p-4 text-[16px] text-grey9 rounded-none' />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className='flex-1 max-w-[950px] flex flex-col gap-5'>

          {/* Form */}
          <div className="border border-grey3 rounded-[16px] py-6 px-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <label htmlFor="firstName" className="font-semibold text-grey9">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="font-semibold text-grey9">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="headline" className="font-semibold text-grey9">Headline</label>
                <input
                  id="headline"
                  type="text"
                  placeholder="Headline"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-1 focus:ring-grey-500"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="description" className="font-semibold text-grey9">Description</label>
                <textarea
                  id="description"
                  placeholder="Description"
                  rows="4"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex flex-col md:col-span-1">
                <label htmlFor="language" className="font-semibold text-grey9">Language</label>
                <select
                  id="language"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-[8px] hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Image Content */}
          <div className="border border-grey3 rounded-[16px] py-6 px-8">
            <div className='flex flex-col gap-6'>
              <div className='grid grid-cols-1'>
                <label className="font-semibold text-grey9">Image Preview</label>
                <input type="image" src={Image} alt="Submit" className='w-[300px] border border-grey3 p-2 rounded-lg' />
              </div>

              <div className='grid grid-cols-1'>
                <label className="font-semibold text-grey9">Add/Change Image</label>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type="text"
                    placeholder='Label'
                    className='w-full md:w-[300px] outline-none border border-grey3 p-[16px] rounded-lg'
                  />
                  <button className='w-auto md:w-[150px] px-[24px] py-[10px] text-grey9 border border-grey9 rounded-[8px] hover:bg-grey9 hover:text-white'>
                    Submit
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Links */}
          <div className="border border-grey3 rounded-[16px] py-6 px-8 flex flex-col gap-4">
            <h2 className='text-grey9 font-bold text-lg'>Links</h2>
            {['Website', 'X(Formerly twitter)', 'Linkedin', 'Youtube', 'Facebook'].map((label, index) => (
              <div className="flex flex-col" key={index}>
                <label htmlFor={label} className="font-semibold text-grey9">{label}</label>
                <input
                  id={label}
                  type="text"
                  placeholder="Label"
                  className="p-[16px] border border-grey3 rounded-[8px] outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default Profile;
