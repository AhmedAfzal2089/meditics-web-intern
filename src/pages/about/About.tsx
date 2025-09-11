import { Navbar } from "../home/Navbar";
import TopBar from "../home/TopBar";
import AboutUs from "./AboutUs";
import BreadCrumb from "./BreadCrumb";

const About = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb />
      <AboutUs />
    </div>
  );
};

export default About;
