import React from 'react';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const PaymentPlan = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Accelerate growth – for you or your organization
        </h1>
        <p className="text-base text-gray-600">
          Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8 mb-16">
        {/* Personal Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">Personal Plan</h2>
          <p className="text-sm text-gray-500 mb-4">For you</p>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm text-gray-600">Individual</span>
          </div>
          <div className="mb-4">
            <div className="text-xl font-bold">Starting at $11.00 per month</div>
            <p className="text-sm text-gray-500">Billed monthly or annually. Cancel anytime.</p>
          </div>
          <button className="w-full bg-primary text-white rounded py-2 px-4 hover:bg-primary-hover mb-4 text-sm font-medium">
            Try it free →
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Access to 12,000+ top courses</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Certification prep</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Goal-focused recommendations</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">AI-powered coding exercises</span>
            </li>
          </ul>
        </div>

        {/* Team Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">Team Plan</h2>
          <p className="text-sm text-gray-500 mb-4">For your team</p>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm text-gray-600">2 to 20 people</span>
          </div>
          <div className="mb-4">
            <div className="text-xl font-bold">$30.00 a month per user</div>
            <p className="text-sm text-gray-500">Billed annually. Cancel anytime.</p>
          </div>
          <button className="w-full bg-primary text-white rounded py-2 px-4 hover:bg-primary-hover mb-4 text-sm font-medium">
            Try it free →
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Access to 12,000+ top courses</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Certification prep</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Goal-focused recommendations</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">AI-powered coding exercises</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Analytics and adoption reports</span>
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">Enterprise Plan</h2>
          <p className="text-sm text-gray-500 mb-4">For your whole organization</p>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm text-gray-600">More than 20 people</span>
          </div>
          <div className="mb-4">
            <div className="text-xl font-bold">Contact sales for pricing</div>
          </div>
          <button className="w-full bg-primary text-white rounded py-2 px-4 hover:bg-primary-hover mb-4 text-sm font-medium">
            Request a demo →
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Access to 27,000+ top courses</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Certification prep</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Goal-focused recommendations</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">AI-powered coding exercises</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Advanced analytics and insights</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Dedicated customer success team</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">International course collection featuring 16 languages</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Customizable content</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Hands-on tech training with add-on</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span className="ml-2 text-sm text-gray-600">Strategic implementation services with add-on</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PaymentPlan;