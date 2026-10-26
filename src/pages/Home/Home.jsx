import { useEffect } from "react";

import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import WhyChooseSRMS from "../../components/home/WhyChooseSRMS";
import Features from "../../components/home/Features";
import Modules from "../../components/home/Modules";
import ContactCTA from "../../components/home/ContactCTA";
import Footer from "../../components/layout/Footer";
import SubscriptionSection from "../../components/home/SubscriptionSection";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="home-page">
      <Hero />
      <About />
      <WhyChooseSRMS />
      <Features />
      <Modules />
      <SubscriptionSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default Home;