import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import { navLinks, services, portfolio, skills, stats } from "./fakers/data";
import AOS from "aos";
import SocialMedia from "./components/socailMedia/SocialMedia";
import Project from "./pages/Project";
import { useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Spinner from "./components/spinner/Spinner";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timing = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timing);
  }, []);
  // handle animation
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Router>
          <ScrollToTopAfterChangePage />
          <SocialMedia />
          <Nav data={navLinks} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  services={services}
                  portfolio={portfolio}
                  skills={skills}
                  stats={stats}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/project/:id" element={<Project data={portfolio} />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
