import React from "react";
import { Award, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-2.5 py-1 mb-1 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-xs font-medium text-blue-600">
                The Future of Learning
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Unlock Your Potential with Byway Learning
              </h1>
              <p className="text-base text-gray-600">
                Welcome to Byway, where learning becomes a seamless journey.
                Discover personalized courses, expert mentorship, and a
                community of lifelong learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="text-base group flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="text-base px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                  Explore courses
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${
                      i + 20
                    }.jpg`}
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-white bg-gray-200"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">4,000+</span> students enrolled
              </div>
              <div className="flex items-center ml-3 bg-yellow-50 px-1.5 py-0.5 rounded-full">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-0.5 text-sm font-medium text-gray-900">
                  4.9/5
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Background blobs */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-2000"></div>

            {/* Main image card */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Students learning"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none"></div>

              {/* Floating cards */}
              <div className="absolute top-6 -right-6 bg-white rounded-lg p-3 shadow-md transform rotate-3 animate-float delay-1000">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Certification
                    </p>
                    <p className="text-[0.65rem] text-gray-500">Industry recognized</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-md transform -rotate-3 animate-float delay-1500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Community
                    </p>
                    <p className="text-[0.65rem] text-gray-500">Learn together</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-3 shadow-md transform animate-float delay-2000">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Personalized
                    </p>
                    <p className="text-[0.65rem] text-gray-500">Adaptive learning</p>
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