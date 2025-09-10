import { Brain, Heart, NotepadText, Users } from "lucide-react";

const MedicalServ = () => {
  return (
    <div className="bg-gray-100 py-35 mt-20">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-4 px-4 text-center mb-12">
        <div className="border-2 border-blue-500 flex gap-2 rounded-2xl p-2 w-fit mx-auto">
          <Heart className="text-blue-500" />
          <span className="text-blue-500 text-sm sm:text-base">Services I Provide</span>
          <Heart className="text-blue-500" />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Medical Services I Provide
        </span>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 items-center justify-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center border rounded-2xl shadow-xl w-full sm:max-w-sm py-8 px-6 hover:border-blue-500 transition duration-300">
          <NotepadText className="bg-gray-200 text-blue-600 p-2 rounded" size={50} />
          <span className="text-lg font-bold mt-4">General Health Checkups</span>
          <p className="text-sm text-gray-600 mt-2">
            Regular health check-ups help detect potential issues early, ensuring timely treatment and better outcomes.
          </p>
          <span className="mt-5 text-blue-500 font-medium">READ MORE</span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center border rounded-2xl shadow-xl w-full sm:max-w-sm py-8 px-6 hover:border-blue-500 transition duration-300">
          <Brain className="bg-gray-200 text-blue-600 p-2 rounded" size={50} />
          <span className="text-lg font-bold mt-4">Stress & Lifestyle Counseling</span>
          <p className="text-sm text-gray-600 mt-2">
            Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle.
          </p>
          <span className="mt-5 text-blue-500 font-medium">READ MORE</span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center border rounded-2xl shadow-xl w-full sm:max-w-sm py-8 px-6 hover:border-blue-500 transition duration-300">
          <Users className="bg-gray-200 text-blue-600 p-2 rounded" size={50} />
          <span className="text-lg font-bold mt-4">Referral to Specialists</span>
          <p className="text-sm text-gray-600 mt-2">
            Accurate assessments with timely referrals to trusted medical specialists, ensuring you receive expert care.
          </p>
          <span className="mt-5 text-blue-500 font-medium">READ MORE</span>
        </div>
      </div>
    </div>
  );
};

export default MedicalServ;
