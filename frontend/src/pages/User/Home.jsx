import CoursesSection from "../../components/Home/CoursesSection";
import HeroSection from "../../components/Home/HeroSection";
import PaymentPlan from "../../components/Home/PaymentPlan";
import TrendingNow from "../../components/Home/TrendingNow";
import Companies from "../../components/Home/Companies";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  return (
    <main className="bg-white">
      <div className="max-x-7xl mx-auto">
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
