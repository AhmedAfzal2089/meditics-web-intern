import TopBar from "../home/TopBar";
import { Navbar } from "../home/Navbar";
import BreadCrumb from "../about/BreadCrumb";
import ServiceDetailPage from "./ServiceDetailPage";
import Footer from "../home/Footer";

const ServiceDetail = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Service Detail" page="Service Detail " />
      <ServiceDetailPage />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
