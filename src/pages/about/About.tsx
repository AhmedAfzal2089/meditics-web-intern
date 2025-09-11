import { Navbar } from "../home/Navbar";
import TopBar from "../home/TopBar";
import AboutUs from "./AboutUs";
import BreadCrumb from "./BreadCrumb";
import PayteintSays from "./PatientSays";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb />
      <AboutUs />
      <WhyChooseUs />
      <PayteintSays />
    </div>
  );
};

export default About;
