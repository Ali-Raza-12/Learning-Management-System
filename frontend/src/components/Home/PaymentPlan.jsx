import { ChevronLeft, ChevronRight } from "lucide-react";

const PaymentPlan = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Learning Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-lg font-semibold">Personal Plan</h2>
            <p className="text-sm text-gray-500 mb-4">For you</p>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600">Individual</span>
            </div>
            <div className="mb-4">
              <div className="text-xl font-bold">
                Starting at $11.00 per month
              </div>
              <p className="text-sm text-gray-500">
                Billed monthly or annually. Cancel anytime.
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 mb-4 text-sm font-medium">
              Try it free →
            </button>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Access to 12,000+ top courses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Certification prep
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Goal-focused recommendations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  AI-powered coding exercises
                </span>
              </li>
            </ul>
          </div>

          {/* Team Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-lg font-semibold mb-1">Team Plan</h2>
            <p className="text-sm text-gray-500 mb-4">For your team</p>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600">2 to 20 people</span>
            </div>
            <div className="mb-4">
              <div className="text-xl font-bold">$30.00 a month per user</div>
              <p className="text-sm text-gray-500">
                Billed annually. Cancel anytime.
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 mb-4 text-sm font-medium">
              Try it free →
            </button>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Access to 12,000+ top courses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Certification prep
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Goal-focused recommendations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  AI-powered coding exercises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Analytics and adoption reports
                </span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h2 className="text-lg font-semibold mb-1">Enterprise Plan</h2>
            <p className="text-sm text-gray-500 mb-4">
              For your whole organization
            </p>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600">More than 20 people</span>
            </div>
            <div className="mb-4">
              <div className="text-xl font-bold">Contact sales for pricing</div>
            </div>
            <button className="w-full bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 mb-4 text-sm font-medium">
              Request a demo →
            </button>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Access to 27,000+ top courses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Certification prep
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Goal-focused recommendations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  AI-powered coding exercises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Advanced analytics and insights
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Dedicated customer success team
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  International course collection featuring 15 languages
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Customizable content
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Hands-on tech training with add-on
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm text-gray-600">
                  Strategic implementation services with add-on
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
