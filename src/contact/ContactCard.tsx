import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import image from "../images/image.png";
const ContactCard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-36 space-y-12">
      {/* Info Cards (Address, Email, Phone) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <MapPin size={24} className="text-white" />,
            title: "House #5, Street Number #98, brasilia-70000-000, Brazil.",
          },
          {
            icon: <Mail size={24} className="text-white" />,
            title: (
              <>
                <p>info@exmple.com</p>
                <p>info@exmple.com</p>
              </>
            ),
          },
          {
            icon: <Phone size={24} className="text-white" />,
            title: (
              <>
                <p>+208-666-01112</p>
                <p>+380961381877</p>
              </>
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl text-center py-15 px-10"
          >
            <div className="mx-auto mb-4 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div className="text-gray-700 text-sm">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Image + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch py-16">
        {/* Left: Replace with your image */}
        <div className="w-full h-[500px] overflow-hidden rounded-lg">
          <img
            src={image} // <-- Replace with your uploaded image
            alt="Contact Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="bg-[#021c35] text-white rounded-lg p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Let's talk...</h2>

          <form className="space-y-4">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 rounded bg-white text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Your Email *</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-white text-gray-800"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 rounded bg-white text-gray-800"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Messages"
                className="w-full p-2 rounded bg-white text-gray-800"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
              >
                Submit Now →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
