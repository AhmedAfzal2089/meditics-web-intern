import type { FC } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AccordionItem from "./Accortion";

const ServiceDetailPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10">
        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://meditics.temptics.com/assets/img/service-details-img.jpg"
            alt="Counseling"
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* Main Title + Paragraph */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Personalized Stress & Lifestyle Counseling
          </h2>
          <p className="text-gray-600 mt-2">
            Our Stress & Lifestyle Counseling service is designed to help you
            take control of your mental well-being and daily habits. Whether
            you're dealing with anxiety, burnout, or life imbalance, we offer
            expert support that fits your personal needs.
          </p>
        </div>

        {/* Quote */}
        <blockquote className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 italic text-indigo-900">
          This blog post hits the mark perfectly for our target audience — busy
          professionals who care about their health but struggle with time. —{" "}
          <span className="font-medium text-indigo-600">John Doe</span>
        </blockquote>

        {/* Offer List */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              What We Offer:
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "One-on-one virtual sessions with certified counselors",
                "Stress and anxiety management techniques",
                "Sleep improvement & energy-boosting strategies",
                "Personalized nutrition and wellness plans",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">
                    <ArrowRight
                      size={15}
                      className="text-white bg-blue-600 rounded-full p-0.5"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden max-w-md">
            <img
              src="https://meditics.temptics.com/assets/img/service-details-inner.jpg"
              alt="Therapy session"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Key Features:</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              {
                title: "Stress Reduction Coaching",
                desc: "Learn to manage pressure burnout, and daily anxiety with proven techniques",
              },
              {
                title: "Personalized Nutrition & Wellness Plans",
                desc: "Build healthier routines that support productivity and rest.",
              },
              {
                title: "Lifestyle Planning",
                desc: "Create sustainable habits for nutrition, exercise, and sleep.",
              },
              {
                title: "One-on-One Counseling",
                desc: "Talk to licensed professionals in a private, secure online setting.",
              },
              {
                title: "Mental Wellness Support",
                desc: "Gain tools to improve focus, mood, and overall life satisfaction.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">
                  <ArrowRight
                    size={15}
                    className="text-white bg-blue-600 rounded-full p-0.5"
                  />
                </span>
                <p>
                  <strong>{item.title}:</strong> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Why It Matters */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Why It Matters:</h3>
          <p className="text-gray-600 mt-2">
            Improving your lifestyle isn’t just about avoiding illness — it’s
            about living better, feeling stronger, and thinking clearer every
            day.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {[
            {
              title: "Do I need a diagnosis to book a session?",
              content:
                "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Jusique eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
            },
            {
              title: "Why Join Us as a Volunteer?",
              content:
                "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Jusique eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
            },
            {
              title: "Be Part of a Community",
              content:
                "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Jusique eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={idx}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block space-y-6">
        <div className="sticky top-20 space-y-6">
          {/* Services List */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "General Health Consultation",
                "Chronic Disease Management",
                "Online Video Consultation",
                "Preventive Health Checkups",
                "Women's & Men's Health",
                "Family Health Services",
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 rounded-md ${
                    i === 0 ? "bg-blue-600 text-white" : "hover:bg-blue-50"
                  }`}
                >
                  {item}
                  <ArrowUpRight size={16} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-blue-900 text-white rounded-lg p-5 space-y-4">
            <h4 className="text-lg font-bold">Have Additional Questions?</h4>
            <div className="text-sm space-y-1">
              <p>3rd Avenue, 83 Manhattan, London, UK</p>
              <p className="font-semibold text-lg">+1890 123 456</p>
              <p>support@example.com</p>
            </div>
            <button className="mt-3 bg-lime-300 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-lime-400 flex items-center gap-1">
              Contact Us <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
