import { Heart, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import image from "../../assets/banner-img.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-5 lg:px-15 bg-[#021c35] relative overflow-hidden">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <div className="border-2 border-green-200 flex gap-2 rounded-2xl p-2 w-fit mx-auto md:mx-0">
          <Heart className="text-green-200" />
          <span className="text-green-200">HI I AM</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-4xl md:text-5xl font-bold text-white">
            Meet Dr.Tushar Raja
          </span>
          <span className="text-4xl md:text-5xl font-bold text-white">
            - Your Trusted
          </span>
          <span className="text-4xl md:text-5xl font-bold text-white">
            Healthcare Partner
          </span>
        </div>

        <div className="text-gray-400 w-full md:w-11/12">
          Dr. Tushar is a highly experienced and compassionate [Specialization,
          e.g., General Physician / Cardiologist / Dermatologist] dedicated.
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <Button className="w-full sm:w-50 h-15 bg-blue-500">
            BOOK APPOINTMENT
          </Button>
          <Button className="w-full sm:w-50 h-15 bg-[#021c35] border-2">
            VIEW SCHEDULE
          </Button>
        </div>
      </div>

      {/* Doctor Image */}
      <div className="w-full mt-10 md:mt-0 flex justify-center md:justify-start">
        <img
          src={image}
          alt="Doctor"
          className="w-110 max-w-md md:max-w-lg p-14 lg:p-1"
        />
      </div>

      {/* Right Floating Icons and Quote */}
      {/* Social Icons */}

      <div className="hidden md:flex flex-col gap-4 items-center fixed top-[40%] right-4 z-50 bg-blue-600 rounded-3xl p-2">
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <Facebook size={18} />
        </div>
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <Twitter size={18} />
        </div>
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <Youtube size={18} />
        </div>
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
          <Instagram size={18} />
        </div>
      </div>

      {/* Quote Box - hidden on mobile */}
      <div className="absolute top-10 right-10 bg-gray-800 text-gray-100 p-10 rounded-lg max-w-md shadow-lg hidden md:block">
        <p className="italic">
          My mission is to treat every patient with care, respect, and the
          highest standard of medical knowledge
        </p>
        <p className="mt-2 text-lime-300 font-semibold">— Robel Roy .USY</p>
      </div>
    </div>
  );
};

export default HeroSection;
