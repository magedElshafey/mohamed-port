import React from "react";
import style from "./intro.module.css";
import dobi from "../../../assets/doby.jpg";
const Intro = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="400"
        className={style.mainContainer}
      >
        <img alt="avatar" src={dobi} className={style.img} />
      </div>
      <div className="mt-5 pt-3">
        <p className="m-0 p-0 mt-5 text-center w-75 fs-4  mx-auto mb-4">
          I’m excited to learn about your project. Ready to get started?
        </p>
      </div>
    </>
  );
};

export default Intro;
