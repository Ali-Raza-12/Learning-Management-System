import React from "react";
import { Award, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 mb-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-xs font-medium text-blue-600">
                The Future of Learning
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Your Potential with Byway Learning
              </h1>
              <p className="text-lg text-gray-600">
                Welcome to Byway, where learning becomes a seamless journey. Discover personalized courses, expert mentorship, and a community of lifelong learners, all designed to transform your educational experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Get started
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                  Explore courses
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">4,000+</span> students already enrolled
              </div>
              <div className="flex items-center ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Background blobs */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float delay-2000"></div>

            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Students learning"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none"></div>

              {/* Floating cards */}
              <div className="absolute top-10 -right-10 bg-white rounded-xl p-4 shadow-lg transform rotate-6 animate-float delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Certification</p>
                    <p className="text-xs text-gray-500">Industry recognized</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 bg-white rounded-xl p-4 shadow-lg transform -rotate-6 animate-float delay-1500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Community</p>
                    <p className="text-xs text-gray-500">Learn together</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 bg-white rounded-xl p-4 shadow-lg transform animate-float delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Personalized</p>
                    <p className="text-xs text-gray-500">Adaptive learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;