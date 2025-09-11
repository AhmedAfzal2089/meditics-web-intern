import Footer from "../home/Footer";
import { Navbar } from "../home/Navbar";
import TopBar from "../home/TopBar";
import AboutUs from "./AboutUs";
import BreadCrumb from "./BreadCrumb";
import PayteintSays from "./PatientSays";
import TelemedicineSection from "./TelemedicineSection";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="About Us" page="About Us" />
      <AboutUs />
      <WhyChooseUs />
      <PayteintSays />
      <TelemedicineSection />
      <Footer />
    </div>
  );
};

export default About;
