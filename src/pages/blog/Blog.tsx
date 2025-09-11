import { Calendar, Folder, Heart, MoveUpRight } from "lucide-react";

const blogs = [
  {
    image: "https://meditics.temptics.com/assets/img/blog-1.jpg",
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-2.jpg",
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-3.jpg",
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-1.jpg",
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-2.jpg",
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-3.jpg",
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-1.jpg",
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-2.jpg",
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
  },
  {
    image: "https://meditics.temptics.com/assets/img/blog-3.jpg",
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
  },
];

const Blog = () => {
  return (
    <div className="bg-[#f5f9fc] py-20 px-4">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-4 text-center mb-12">
        <div className="border-2 border-blue-500 flex gap-2 rounded-full px-4 py-1 w-fit mx-auto items-center">
          <Heart className="text-blue-500 w-4 h-4" />
          <span className="text-blue-500 text-sm sm:text-base font-medium">
            Doctor's Blog
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Your Health, My Words
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {blog.title}
              </h3>

              <div className="flex gap-4 text-sm text-gray-600 items-center mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Folder className="w-4 h-4" />
                  <span>{blog.category}</span>
                </div>
              </div>

              <div className="bg-[#001F3F] text-white py-3 px-4 rounded-b-xl text-sm font-medium text-center hover:bg-blue-800 transition cursor-pointer">
                <div className="flex items-center justify-center gap-3">
                  READ MORE
                  <MoveUpRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
