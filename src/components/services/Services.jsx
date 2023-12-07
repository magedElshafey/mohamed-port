import React from "react";
import style from "./serv.module.css";
const Services = ({ data }) => {
  return (
    <div id="serv" className="my-md-5">
      <div className="row justify-content-center  mt-5 pt-5">
        {data.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay={item.delay}
            className={`col-12 col-md-6 col-lg-4 mb-5 mb-md-0 position-relative ${style.mainContainer}`}
            key={index}
          >
            <img
              alt="services/icon"
              src={item.img}
              className={style.servIcon}
            />
            <p
              className={`px-3 mt-5 mb-2 text-center  fw-bold ${style.servTitle}`}
            >
              {item.title}
            </p>
            <p className="text-black-50 text-center w-75 mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
