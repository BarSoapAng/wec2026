import { Navbar, PageWrapper } from "./components";
import Hero from "src/sections/Hero/Hero";
import About from "src/sections/About/About"

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <About />
    </PageWrapper>
  )
}

export default App
