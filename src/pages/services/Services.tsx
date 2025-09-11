import BreadCrumb from "../about/BreadCrumb";
import Footer from "../home/Footer";
import { Navbar } from "../home/Navbar";
import TopBar from "../home/TopBar";
import ServicesGrid from "./ServiceGrid";
import Slider from "./Slider";

const Services = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Services" page="Services" />
      <ServicesGrid />
      <Slider />
      <Footer/>
    </div>
  );
};

export default Services;
