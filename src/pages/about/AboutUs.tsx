import { ArrowRight, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Images */}
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden relative w-[80%]">
            <img
              src="https://meditics.temptics.com/assets/img/about-2-img-1.jpg"
              alt="Main"
              className="rounded-3xl object-cover"
            />
            {/* Vertical Text Overlay */}
            <div className="absolute left-0 top-0 bg-blue-600 text-white text-sm lg:text-md tracking-widest px-3 py-2 rounded-br-xl rounded-tr-xl rotate-180 writing-vertical text-center font-bold">
            </div>
          </div>

          {/* Small Overlay Image */}
          <div className="absolute bottom-[-100px] left-[40%] lg:top-[40px] lg:left-[70%] w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://meditics.temptics.com/assets/img/about-2-img-2.jpg"
              alt="Doctor with patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <Heart size={20} />
            <span>ABOUT US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Committed to Your Care
            <br />
            Every Step of the Way
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            With a team of world-class doctors, experienced nurses, and
            dedicated healthcare professionals, we are committed to delivering
            compassionate, high-quality medical care to every patient.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              "Highly Qualified Specialists",
              "Advanced Medical Equipment",
              "Safe, Comfortable Environment",
              "24/7 Emergency Services",
              "Patient-Centered Approach",
              "Affordable, Transparent Pricing",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-semibold text-gray-800"
              >
                <span className="text-blue-600 bg-blue-100 rounded-full p-1">
                  <ArrowRight size={16} />
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* CEO Info */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src="https://meditics.temptics.com/assets/img/about-2-author.jpg"
              alt="CEO"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">CEO, Founder Of</p>
              <p className="text-sm text-gray-700">CarePoint</p>
            </div>
            <div className="ml-auto">
              <img
                src="https://meditics.temptics.com/assets/img/signature.png"
                alt="Signature"
                className="h-10"
              />
            </div>
          </div>

          {/* More About Button */}
          <button className="mt-4 bg-lime-200 text-black font-medium px-5 py-2 rounded hover:bg-lime-300 flex items-center gap-2 transition duration-200">
            More About
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
