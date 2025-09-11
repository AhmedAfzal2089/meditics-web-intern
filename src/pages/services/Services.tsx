import BreadCrumb from "../about/BreadCrumb";
import { Navbar } from "../home/Navbar";
import TopBar from "../home/TopBar";
import ServicesGrid from "./ServiceGrid";

const Services = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Services" page="Services" />
      <ServicesGrid />
    </div>
  );
};

export default Services;
