import { Navbar, PageWrapper } from "./components";
import Hero from "src/sections/Hero/Hero";
import About from "src/sections/About/About";
import Sponsors from "src/sections/Sponsors/Sponsors";
import Schedule from "src/sections/Schedule/Schedule";
import FAQ from "src/sections/FAQ/FAQ";
import Footer from "src/sections/Footer/Footer";

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Schedule />
      <FAQ />
      <Footer />
    </PageWrapper>
  );
}

export default App;
