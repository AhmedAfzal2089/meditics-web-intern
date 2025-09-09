import HeroSection from "./pages/HeroSection";
import { Navbar } from "./pages/Navbar";
import TopBar from "./pages/TopBar";

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
