import AboutUs from "@components/AboutUs";
import Faq from "@components/Faq";
import Hero from "@components/Hero";
import HowItWorks from "@components/HowItWorks";
import Nav from "@components/Nav";
import Pricing from "@components/Pricing";
import Footer from "@components/shared/Footer";

const App = () => {
  return (
    <main id="home" className="app">
      <Nav />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
};
export default App;
