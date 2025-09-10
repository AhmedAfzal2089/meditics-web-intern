import ClientsFeedback from "./ClientsFeedback";
import DoctorOnline from "./DoctorOnline";
import HealthProblems from "./HealthProblems";
import HeroSection from "./HeroSection";
import MedicalServ from "./MedicalServ";
import MyJourneyMed from "./MyJourneyMed";
import { Navbar } from "./Navbar";
import Qualification from "./Qualification";
import TopBar from "./TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <MyJourneyMed />
      <MedicalServ />
      <HealthProblems />
      <Qualification />
      <ClientsFeedback />
      <DoctorOnline />
    </div>
  );
};

export default HomePage;
