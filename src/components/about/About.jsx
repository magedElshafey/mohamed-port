import React from "react";
import style from "./about.module.css";
const About = () => {
  return (
    <div id="about" className="mb-5">
      <div className="">
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          className={`text-center text-md-start m-0 p-0  mb-3 fw-bolder fs-6 fs-md-5 ${style.title}`}
        >
          Hi , I 'm Mohammed Elshafey . Nice to meet you
        </p>
        <p
          className={`text-center text-md-start m-0 p-0 mx-auto text-black-50  lh ${style.desc}`}
        >
          Graduated From Mansoura University, Faculty of engineering ,
          department of Building and construction . I am experienced in
          finishing works for three years Since Beginning My Journey As a site
          engineer in finishing works internal and external Over 3 Years , I 've
          done Large projects like Villas and School
        </p>
      </div>
    </div>
  );
};

export default About;
