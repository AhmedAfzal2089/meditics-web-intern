import { Phone, Clock, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex text-white text-sm font-medium">
      {/* Left Section */}
      <div className="bg-blue-600 flex items-center px-6 py-2 gap-6 relative z-10 w-[40%]">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <div className=" p-1.5 rounded-full text-blue-900">
            <Phone className="text-white" size={14} />
          </div>
          <span className="font-semibold">Help Line: +208-6666-0112</span>
        </div>

        {/* Clock */}
        <div className="flex items-center gap-2">
          <div className=" p-1.5 rounded-full text-blue-900">
            <Clock className="text-white" size={14} />
          </div>
          <span className="font-semibold">
            Open Hours: Mon - Fri 8.00 am - 6.00 pm
          </span>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute right-[-20px] top-0 bottom-0 w-10 bg-blue-600 transform skew-x-12 z-0" />
      </div>

      {/* Right Section */}
      <div className="bg-[#021c35] flex items-center px-6 py-2 flex-1 justify-end z-10">
        <div className="flex items-center gap-2">
          <div className="bg-lime-300/60 p-1.5 rounded-full text-blue-900">
            <Mail size={14} />
          </div>
          <span className="font-semibold">info@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
