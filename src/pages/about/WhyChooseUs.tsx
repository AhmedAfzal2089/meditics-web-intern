import { FaArrowRight, FaPlay } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#09244e] to-[#132b6b] py-16 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="relative flex justify-center items-start">
          {/* Background image with border */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border-[6px] border-[#e2f394]">
            <img
              src="https://meditics.temptics.com/assets/img/why-choose-img-1.jpg"
              alt="Compassionate care"
              className="w-full max-w-md object-cover"
            />
          </div>

          {/* Overlay video image */}
          <div className="absolute -bottom-8 -right-1 z-20 rounded-xl overflow-hidden shadow-xl">
            <div className="relative">
              <img
                src="https://meditics.temptics.com/assets/img/why-choose-img-2.jpg"
                alt="Video"
                className="w-[250px] h-auto object-cover rounded-xl"
              />
              {/* Play button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e2f394] text-black p-3 rounded-full hover:scale-105 transition">
                <FaPlay size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <div>
            <p className="text-primary font-semibold text-sm flex items-center gap-2">
              <span className="text-blue-400 text-lg">💙</span> <span className="text-blue-600">WHY CHOOSE US</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-1 leading-tight">
              Where Compassion Meets <br /> Excellence
            </h2>
            <p className="text-white/80 mt-4 text-base leading-relaxed max-w-lg">
              That's why we are committed to delivering world-class medical
              services with compassion, innovation, and integrity — putting your
              health and comfort first.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-5">
            {[
              "Personalized Patient Care",
              "World-Class Medical Experts",
              "World-Class Medical Experts",
            ].map((title, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white text-[#1a3080] font-bold rounded-full flex items-center justify-center shadow">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-white/70 text-sm mt-1 max-w-md">
                    Our team includes highly trained doctors, nurses, and
                    specialists, each dedicated to providing the best possible
                    care.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Appointment Button */}
          <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-[#1a3080] transition">
            APPOINTMENT NOW <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
