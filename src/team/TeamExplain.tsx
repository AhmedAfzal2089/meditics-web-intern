// src/pages/DoctorDetails.tsx
import BreadCrumb from "@/pages/about/BreadCrumb";
import Footer from "@/pages/home/Footer";
import { Navbar } from "@/pages/home/Navbar";
import TopBar from "@/pages/home/TopBar";
import { useParams } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn, MdWork } from "react-icons/md";
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

const TeamExplain = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  if (!doctor)
    return <div className="text-center text-red-500">Doctor not found.</div>;

  return (
    <>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Our Doctors" page="Our Doctors" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-blue-600">{doctor.title}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mt-4 border rounded-lg overflow-hidden text-sm text-gray-700">
              <div className="flex items-center gap-4 p-4 bg-white">
                <div className="text-white bg-blue-600 p-2 rounded">
                  <MdEmail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white">
                <div className="text-white bg-blue-600 p-2 rounded">
                  <MdPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p>+208-6666-0112</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white">
                <div className="text-white bg-blue-600 p-2 rounded">
                  <MdLocationOn className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p>123 Main Street, City</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white">
                <div className="text-white bg-blue-600 p-2 rounded">
                  <MdWork className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Experience</p>
                  <p>3-5 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Introducing the Doctor
          </h3>
          <p className="text-gray-600 leading-relaxed">
            One of the most significant individuals in our society is the
            doctor. They can save lives. When someone is having trouble, they
            are the first to offer assistance. Many parents hope that their kids
            will grow up to be doctors. The people who know the most about
            illnesses are doctors...
          </p>
        </div>

        {/* Experience Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">55%</p>
            <p className="text-gray-600 mt-2">Surgery</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">73%</p>
            <p className="text-gray-600 mt-2">Medicine</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-blue-600">90%</p>
            <p className="text-gray-600 mt-2">Healthcare</p>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Apply For Appointment
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 p-2 rounded"
            />
            <input type="date" className="border border-gray-300 p-2 rounded" />
            <select className="border border-gray-300 p-2 rounded">
              <option>Select Doctor</option>
              <option>{doctor.name}</option>
            </select>
            <select className="border border-gray-300 p-2 rounded">
              <option>Select Treatment</option>
              <option>General Consultation</option>
              <option>Specialist Checkup</option>
            </select>
            <div className="sm:col-span-2 flex items-center gap-2">
              <input type="checkbox" id="agree" className="h-4 w-4" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree to terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition"
            >
              Appointment Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamExplain;
