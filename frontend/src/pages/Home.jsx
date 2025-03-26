import CoursesSection from "../components/Home/CoursesSection";
import HeroSection from "../components/Home/HeroSection";
import PaymentPlan from "../components/Home/PaymentPlan";
import TrendingNow from "../components/Home/TrendingNow";
import Companies from "../components/Home/Companies";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {

  return (
    <main className="w-full min-h-screen bg-white">

      <div className="max-w-[1900px] mx-auto">

        <HeroSection />

        <CoursesSection />

        <Companies />

        <PaymentPlan />

        <TrendingNow />

        <Testimonials />

      
      </div>
    </main>
  );
};

export default Home;
