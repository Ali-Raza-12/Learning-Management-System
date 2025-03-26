import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonials as TestimonialData } from "../../data/dummy";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                What Our Students Say
              </h2>
              <p className="mt-2 text-gray-600">
                Real stories from real learners
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TestimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <img src={testimonial.img} alt="Quote" className="w-8 h-8" />
                  <p className="text-gray-600 line-clamp-4">
                    {testimonial.para}
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <img
                      src={testimonial.person}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.exp}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
