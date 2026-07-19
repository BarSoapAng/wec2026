import { Navbar, PageWrapper } from "./components";
import Hero from "src/sections/Hero/Hero";
import HeroDescription from "src/sections/HeroDescription/HeroDescription";
import About from "src/sections/About/About";
import Sponsors from "src/sections/Sponsors/Sponsors";
import Schedule from "src/sections/Schedule/Schedule";
import Map from "src/sections/Map/Map";
import FAQ from "src/sections/FAQ/FAQ";
import Footer from "src/sections/Footer/Footer";

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <HeroDescription />
      <About />
      <Sponsors />
      <Schedule />
      <Map />
      <FAQ />
      <Footer />
    </PageWrapper>
  );
}

export default App;
