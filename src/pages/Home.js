import React from "react";
import Services from "../components/services/Services";
import Banner from "../components/banner/Banner";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";
import Stats from "../components/stats/Stats";
import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
const Home = ({ services, portfolio, skills, stats }) => {
  return (
    <>
      <div className="container pt-5 mt-5">
        <Hero />
        <About />
        <Services data={services} />
      </div>
      <Banner />

      <Portfolio data={portfolio} />
      <Skills data={skills} />
      <Stats data={stats} />
    </>
  );
};

export default Home;
