import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaTwitter,
    FaStar,
    FaRegStar,
    FaChevronDown,
  } from "react-icons/fa";

const CheckoutCard = () => {
  return (
    <>
         {/* Sidebar */}
                <div className="lg:w-96 flex-shrink-0">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-8">
                    <img
                      src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Course thumbnail"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold">$49.50</div>
                        <div className="text-gray-500 line-through">$99.50</div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          50% OFF
                        </div>
                      </div>
                      <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium mb-3 hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button>
                      <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Buy Now
                      </button>
        
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-medium mb-3">Share this course</h4>
                        <div className="flex gap-4">
                          <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <FaFacebook className="text-lg" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors">
                            <FaGithub className="text-lg" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                            <FaGoogle className="text-lg" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                            <FaTwitter className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default CheckoutCard
