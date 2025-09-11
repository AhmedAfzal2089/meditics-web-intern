import { Heart, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Doe",
    role: "Patient",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Lopez",
    role: "Registered Nurse",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const PayteintSays = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, role, quote, avatar } = testimonials[currentIndex];

  return (
    <section className="bg-[#f5f5f5] py-26 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative">
        {/* Left content */}
        <div>
          <div className="flex items-center gap-2 text-blue-500 font-medium">
            <Heart size={18} className="text-blue-600" />
            <span>PATIENT SAYS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Happy Patients says
          </h2>
          <p className="text-gray-600 text-base max-w-md mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula conset.
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Testimonial Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md relative">
          <Quote size={40} className="text-blue-600 mb-4" />

          <p className="italic text-gray-800 leading-relaxed text-lg">
            {quote}
          </p>

          <hr className="my-6 border-gray-200" />

          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-base text-gray-800">{name}</h4>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayteintSays;
