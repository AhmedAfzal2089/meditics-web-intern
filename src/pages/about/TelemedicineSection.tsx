import { Heart, ArrowRight, CircleArrowRight } from "lucide-react";

const TelemedicineSection = () => {
  return (
    <section className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="flex items-center text-blue-600 font-medium gap-2 mb-2">
            <Heart size={18} />
            <span>YOUR HEALTH, YOUR CONVENIENCE</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Consult Your Doctor Online — Anytime, Anywhere
          </h2>

          <p className="text-gray-600 mb-6 max-w-lg">
            Say goodbye to long queues and unnecessary travel. With our secure
            video consultation service, you can now talk to experienced doctors
            from the comfort of your home.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Speak with certified specialists in real time",
              "Easy appointment booking via mobile or web",
              "Private, secure, and confidential video calls",
              "Available 7 days a week, including evenings",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-blue-700 font-medium"
              >
                <CircleArrowRight size={16} />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition">
              Book A Video Call <ArrowRight size={16} />
            </button>
            <button className="border border-blue-600 text-blue-700 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition hover:bg-blue-50">
              See Available Doctors <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex justify-center">
          {/* Main circle image */}
          <div className="w-[420px] h-[420px] bg-blue-900 rounded-full overflow-hidden relative z-10">
            <img
              src="https://meditics.temptics.com/assets/img/inner-video-call.png"
              alt="Video Call"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small overlay image */}
          <img
            src="https://meditics.temptics.com/assets/img/inner-video-call-img-2.png"
            alt="Doctor on phone"
            className="absolute lg:top-[-10px] lg:left-[50px]  top-[-10px] left-[-0px] w-34 h-34 rounded-full ring-8 ring-white bg-white shadow-md object-cover z-20"
          />

          {/* Optional floating icon (like the chat icon in screenshot) */}
          <div className="absolute top-14 right-14 w-16 h-16 bg-[#e5f09a] rounded-full flex items-center justify-center shadow-md z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="black"
              viewBox="0 0 256 256"
            >
              <path d="M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H64v24a8,8,0,0,0,13.66,5.66L120.69,200H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemedicineSection;
