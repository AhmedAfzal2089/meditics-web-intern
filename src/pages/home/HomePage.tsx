import HeroSection from "./HeroSection";
import MedicalServ from "./MedicalServ";
import MyJourneyMed from "./MyJourneyMed";
import { Navbar } from "./Navbar";
import TopBar from "./TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <MyJourneyMed />
      <MedicalServ />
    </div>
  );
};

export default HomePage;
