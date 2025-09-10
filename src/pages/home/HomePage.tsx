import HeroSection from "./HeroSection";
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
    </div>
  );
};

export default HomePage;
