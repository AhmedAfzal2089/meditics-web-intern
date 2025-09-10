import { ArrowRight, Heart } from "lucide-react";

const DoctorOnline = () => {
  return (
    <section className="bg-[#031B34] text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded-full w-fit text-sm">
            <Heart className="w-4 h-4" />
            <span className="font-medium uppercase">
              Your Health, Your Convenience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Consult Your Doctor Online —
            <br className="hidden sm:block" /> Anytime, Anywhere
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Say goodbye to long queues and unnecessary travel. With our secure
            video consultation service, you can now talk to experienced doctors
            from the comfort of your home.
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Speak with certified specialists in real time",
              "Easy appointment booking via mobile or web",
              "Private, secure, and confidential video calls",
              "Available 7 days a week, including evenings",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-5 py-2.5 rounded-md w-fit flex items-center gap-2 mt-4 text-sm">
            Book A Video Call <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* BACKGROUND IMAGE (leave src empty or set your background image later) */}
          <img
            src="https://meditics.temptics.com/assets/img/video-call-2.png" // placeholder or future image
            alt="Doctor Background"
            className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[250px] xl:w-[260px] rounded-xl object-cover absolute -right-10 top-6 opacity-90 z-0"
          />

          {/* FOREGROUND IMAGE */}
          <img
            src=" https://meditics.temptics.com/assets/img/video-call-1.png"
            alt="Doctor Foreground"
            className="w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] rounded-xl z-10 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorOnline;
