import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Speakers } from "./components/speakers";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Schedules } from "./components/schedules";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Hero data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Speakers data={landingPageData.Speakers} />
      <Gallery data={landingPageData.Gallery} />
      <Schedules data={landingPageData.Schedules} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;


// "homepage": "https://quantum-computing-club-gdg-campus-oau.github.io/qiskit-fall-fest24",