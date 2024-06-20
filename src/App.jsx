import "./App.css";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import Contract from "./components/Contract";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function App() {
  return (
    <>
      <Hero />
      <Section1
        heading="Welcome to 
Flork’s World!"
        text="Welcome, Degens! Forget the celebrity scam tokens of Jeet City. Join me for a cooler crypto experience on Ethereum."
        img={image1}
      />
      <Section2
        heading="How Flork found Ethereum"
        text="In the Ethereum world, I’ve created a chill zone away from the frenzy. It's your crypto sanctuary, and you're invited!"
        img={image2}
      />
      <Section1
        heading="Our Community-First Vibes"
        text="At Flork, it's all about community—no taxes, no fees. We focus on stress-free growth and success. Join us to build and thrive together!"
        img={image3}
      />
      <Section3 />
      <Contract />
      <Features />
      <Join />
      <Footer />
    </>
  );
}

export default App;
