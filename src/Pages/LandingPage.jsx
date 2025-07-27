import Navbar from "../Components/Navbar";
import Herosection from "../Components/HeroSection";
import FeatureGrid from "../Components/FeatureGrid";
import SubHero from "../Components/SubHero";
import Footer from "../Components/Footer";
import GradientBlobs from "../Components/GradientBlobs";
function LandingPage(){
  return(
    <div className="relative bg-black text-white font-sans ">
      {/* Gradient Layer */}
     
      
       <Navbar />
      <Herosection />
      <FeatureGrid />
      <SubHero />
      <Footer />
    </div>
  );
}

export default LandingPage;