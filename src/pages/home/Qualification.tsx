import { Heart } from "lucide-react";

const Qualification = () => {
  return (
    <div className="px-20 mt-20 py-10">
      <div className="flex flex-col justify-center items-center gap-4 px-4 text-center mb-12">
        <div className="border-2 border-blue-500 flex gap-2 rounded-2xl p-2 w-fit mx-auto">
          <Heart className="text-blue-500" />
          <span className="text-blue-500 text-sm sm:text-base">
            My Qualifications
          </span>
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Medical Services I Provide
        </span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="bg-gray-100 rounded-xl p-6 w-[45%] min-w-[280px] flex flex-col justify-center">
          <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
            <span className="font-semibold text-gray-800">
              Oxford University
            </span>
            <span className="text-gray-400 text-sm">Jan 2014 - Dec 2018</span>
          </div>
          <div className="mt-3 font-bold text-gray-900 text-md">
            Bachelor of Medicine & Bachelor of Surgery (MBBS)
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 w-[45%] min-w-[280px] flex flex-col justify-center">
          <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
            <span className="font-semibold text-gray-800">
              Oxford University
            </span>
            <span className="text-gray-400 text-sm">Jan 2014 - Dec 2018</span>
          </div>
          <div className="mt-3 font-bold text-gray-900 text-md">
            Bachelor of Medicine & Bachelor of Surgery (MBBS)
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 w-[45%] min-w-[280px] flex flex-col justify-center">
          <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
            <span className="font-semibold text-gray-800">
              Oxford University
            </span>
            <span className="text-gray-400 text-sm">Jan 2014 - Dec 2018</span>
          </div>
          <div className="mt-3 font-bold text-gray-900 text-md">
            Bachelor of Medicine & Bachelor of Surgery (MBBS)
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 w-[45%] min-w-[280px] flex flex-col justify-center">
          <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
            <span className="font-semibold text-gray-800">
              Oxford University
            </span>
            <span className="text-gray-400 text-sm">Jan 2014 - Dec 2018</span>
          </div>
          <div className="mt-3 font-bold text-gray-900 text-md">
            Bachelor of Medicine & Bachelor of Surgery (MBBS)
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg overflow-hidden max-w-full mt-10 p-4">
        {/* Awards Icons */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:gap-8 gap-4 md:px-6 md:py-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="w-full max-w-[80px] h-20 bg-white rounded-md shadow flex items-center justify-center mx-auto"
            >
              <img
                src={`https://meditics.temptics.com/assets/img/award-${num}.svg`}
                alt={`Award ${num}`}
                className="max-w-full max-h-[60px]"
              />
            </div>
          ))}
        </div>

        {/* View All Awards Button */}
        <div className="mt-4 md:mt-0 flex justify-center md:justify-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap hover:bg-blue-700 transition">
            VIEW ALL AWARDS <span className="text-xl">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
