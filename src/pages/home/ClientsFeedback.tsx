import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";

type Feedback = {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
};

const feedbacks: Feedback[] = [
  {
    id: 1,
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
  },
  {
    id: 3,
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
  },
];

const ClientsFeedback: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrent(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 px-6 py-10 md:px-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 rounded-full px-3 py-1 font-semibold text-sm mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
          Client's Testimonials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Clients Feedbacks</h2>
      </div>

      <Slider {...settings}>
        {feedbacks.map((item, index) => {
          const isActive = index === current;

          return (
            <div key={item.id} className="px-2">
              <div
                className={`rounded-2xl p-6 transition duration-300 h-full ${
                  isActive
                    ? "bg-white shadow-xl scale-100 text-black"
                    : "bg-gray-200 scale-95 text-gray-400"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div
                      className={`text-lg font-semibold ${
                        isActive ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="text-sm">{item.role}</div>
                  </div>
                </div>
                <p className="text-sm">{item.feedback}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Types for arrow props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow
const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-600 hover:text-white transition"
    onClick={onClick}
    aria-label="Next"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

// Custom Prev Arrow
const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-600 hover:text-white transition"
    onClick={onClick}
    aria-label="Previous"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default ClientsFeedback;
