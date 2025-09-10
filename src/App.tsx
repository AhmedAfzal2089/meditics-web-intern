import HeroSection from "./pages/home/HeroSection";
import { Navbar } from "./pages/home/Navbar";
import TopBar from "./pages/home/TopBar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
