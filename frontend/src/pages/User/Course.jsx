import Testimonials from "../../components/Home/Testimonials";
import AllCourses from "../../components/Home/AllCourses";
import CheckoutCard from "../../components/Home/CheckoutCard";
import ViewCourses from "../../components/Home/ViewCourses";

const Course = () => {
  return (
    <div className="w-full xs:px-6 sm:px-2 sm:container sm:mx-auto mt-12 py-8">
      {/* Course Overview */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <ViewCourses />

        {/* Sidebar */}
        <CheckoutCard />
      </div>

      {/* More Courses */}
      <AllCourses />

      {/* Testimonials */}
      <div className="mt-4">
        <Testimonials />
      </div>
    </div>
  );
};

export default Course;
