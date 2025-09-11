import TopBar from "../home/TopBar";
import { Navbar } from "../home/Navbar";
import BreadCrumb from "../about/BreadCrumb";
import Blog from "./Blog";
import Footer from "../home/Footer";

const BlogMain = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <BreadCrumb title="Our Blog" page="Our Blog" />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogMain;
