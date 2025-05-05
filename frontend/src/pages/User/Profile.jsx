import { Routes, Route } from 'react-router-dom';
import ProfileCourses from './ProfileCourses';
import ProfileTeachers from './ProfileTeachers';
import ProfileMessages from './ProfileMessages';
import ProfileReviews from './ProfileReviews';
import ProfilePage from './ProfilePage';

import ProfileLayout from '../../components/ProfileLayout/ProfileLayout';

const Profile = () => {
  return (
    <div className='w-full h-auto'>
      <ProfileLayout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="courses" element={<ProfileCourses />} />
          <Route path="teachers" element={<ProfileTeachers />} />
          <Route path="reviews" element={<ProfileReviews />} />
          <Route path="messages" element={<ProfileMessages />} />
        </Routes>
      </ProfileLayout>
    </div>
  );
};

export default Profile;
