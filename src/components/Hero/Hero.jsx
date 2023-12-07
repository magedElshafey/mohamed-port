import React from "react";
import style from "./hero.module.css";
import avatar from "../../assets/memo.jpeg";
const Hero = () => {
  return (
    <div className="mb-5 pb-5 d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center gap-2">
        <h1
          data-aos="fade-down"
          data-aos-delay="400"
          className={`text-center fw-bolder ${style.title}`}
        >
          Successful Civil Engineer
        </h1>
        <p
          className={`text-center text-black-50 ${style.desc}`}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I seek for functional solutions , inspiring designs and professional
          Finishing
        </p>
        <img
          data-aos="zoom-in"
          data-aos-delay="700"
          alt="avatar"
          src={avatar}
          className={style.av}
        />
      </div>
    </div>
  );
};

export default Hero;
