// src/pages/Team.tsx
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sohel Islam",
    title: "Chief Pathologist",
    image: "https://meditics.temptics.com/assets/img/team-member-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Tanvir Alam",
    title: "Consultant Pathologist",
    image: "https://meditics.temptics.com/assets/img/team-member-2.jpg",
  },
  {
    id: 3,
    name: "Dr. Nafisa Rahman",
    title: "Family Physician",
    image: "https://meditics.temptics.com/assets/img/team-member-3.jpg",
  },
  {
    id: 4,
    name: "Dr. Tania Akter",
    title: "Physician",
    image: "https://meditics.temptics.com/assets/img/team-member-4.jpg",
  },
  {
    id: 5,
    name: "Dr. Sumiya Ahmed",
    title: "Women’s Health Specialist",
    image: "https://meditics.temptics.com/assets/img/team-member-5.jpg",
  },
  {
    id: 6,
    name: "Dr. Arif Hossain",
    title: "Online Consultation Expert",
    image: "https://meditics.temptics.com/assets/img/team-member-6.jpg",
  },
];

const TeamCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/teams/${id}`);
  };

  return (
    <div className="px-4 py-30 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => handleCardClick(doc.id)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 border border-transparent transition-all duration-300 p-6 text-center cursor-pointer"
          >
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {doc.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{doc.title}</p>
            <div className="flex justify-center gap-3 text-gray-600">
              <FaFacebookF className="hover:text-blue-600 transition" />
              <FaInstagram className="hover:text-pink-500 transition" />
              <FaYoutube className="hover:text-red-600 transition" />
              <FaTwitter className="hover:text-blue-400 transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
