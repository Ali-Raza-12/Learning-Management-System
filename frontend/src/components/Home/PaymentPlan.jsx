import { ChevronLeft, ChevronRight } from "lucide-react";

const PaymentPlan = () => {
  return (
    <section className="pb-12 bg-white">
      <div className="xs:px-6 sm:px-2 sm:container sm:mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Choose Your Learning Plan
          </h2>
          <p className="text-base text-gray-600">
            Flexible options to fit your learning needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Personal Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Personal Plan</h3>
              <p className="text-gray-500 text-sm">For individual learners</p>
            </div>
            
            <div className="mb-5">
              <div className="text-xl font-bold text-gray-900 mb-1">
                $11<span className="text-base">.00</span>
                <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <p className="text-gray-500 text-xs">
                Billed monthly or annually. Cancel anytime.
              </p>
            </div>
            
            <button className="w-full mb-5 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-sm hover:shadow">
              Try it free →
            </button>
            
            <ul className="space-y-2.5">
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Access to 12,000+ top courses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Certification prep</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Goal-focused recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">AI-powered coding exercises</span>
              </li>
            </ul>
          </div>

          {/* Team Plan */}
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-bl-md rounded-tr-md">
              POPULAR
            </div>
            
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Team Plan</h3>
              <p className="text-gray-500 text-sm">For 2-20 people</p>
            </div>
            
            <div className="mb-5">
              <div className="text-xl font-bold text-gray-900 mb-1">
                $30<span className="text-base">.00</span>
                <span className="text-sm font-normal text-gray-500">/user/month</span>
              </div>
              <p className="text-gray-500 text-xs">
                Billed annually. Cancel anytime.
              </p>
            </div>
            
            <button className="w-full mb-5 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-sm hover:shadow">
              Try it free →
            </button>
            
            <ul className="space-y-2.5">
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Access to 12,000+ top courses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Certification prep</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Goal-focused recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">AI-powered coding exercises</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Analytics and adoption reports</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Enterprise Plan</h3>
              <p className="text-gray-500 text-sm">For organizations</p>
            </div>
            
            <div className="mb-5">
              <div className="text-xl font-bold text-gray-900 mb-1">
                Custom pricing
              </div>
              <p className="text-gray-500 text-xs">
                Volume discounts available
              </p>
            </div>
            
            <button className="w-full mb-5 px-5 py-2.5 bg-white border-2 border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200 font-medium shadow-xs">
              Request a demo →
            </button>
            
            <ul className="space-y-2.5">
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Access to 27,000+ top courses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Certification prep</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Goal-focused recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">AI-powered coding exercises</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Advanced analytics and insights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">Dedicated customer success</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;