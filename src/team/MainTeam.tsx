import BreadCrumb from "@/pages/about/BreadCrumb";
import { Navbar } from "@/pages/home/Navbar";
import TopBar from "@/pages/home/TopBar";
import TeamCards from "./TeamCards";
import Footer from "@/pages/home/Footer";

const MainTeam = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Our Team" page="Our Team" />
      <TeamCards />
      <Footer />
    </div>
  );
};

export default MainTeam;
