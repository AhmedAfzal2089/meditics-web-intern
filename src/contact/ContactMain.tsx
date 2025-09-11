import BreadCrumb from "@/pages/about/BreadCrumb";
import { Navbar } from "@/pages/home/Navbar";
import TopBar from "@/pages/home/TopBar";
import Footer from "@/pages/home/Footer";
import ContactCard from "./ContactCard";

const ContactMain = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Contact Us " page="Contact Us" />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default ContactMain;
