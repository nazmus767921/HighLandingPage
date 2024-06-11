import AboutUs from "@components/AboutUs";
import Faq from "@components/Faq";
import Hero from "@components/Hero";
import HowItWorks from "@components/HowItWorks";
import Nav from "@components/Nav";
import Pricing from "@components/Pricing";
import Footer from "@components/shared/Footer";

export const sectionIds = {
  hero: "home-hero",
  pricing: "home-pricing",
  aboutUs: "home-about-us",
  howItWorks: "home-how-it-works",
  faq: "home-faq",
};

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
