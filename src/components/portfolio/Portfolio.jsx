import React from "react";
import style from "./portfolio.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Portfolio = ({ data }) => {
  return (
    <div id="port" className="container my-5">
      <h1
        data-aos="fade-down"
        data-aos-delay="400"
        className={`text-center fw-bolder mb-5 ${style.title}`}
      >
        Featured Work
      </h1>
      <div className="mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="row justify-content-center mb-4 align-items-center"
          >
            <div className="col-11 col-md-3 mb-3 mb-md-0">
              <Link to={`/project/${item.id}`} className={style.titleContainer}>
                <p className={`m-0 p-0 fw-bolder ${style.projectTitle} fs-5`}>
                  {item.title}
                </p>
              </Link>
              <Link
                to={`/project/${item.id}`}
                className={`${style.link} mb-2 d-flex align-items-center gap-2`}
              >
                <MdKeyboardArrowRight size={30} className={style.icon} />
                <p className="m-0 p-0 fw-bolder">{item.title}</p>
              </Link>
              <p className="lh m-0 p-0  text-black-50">{item.intro}</p>
            </div>
            <div className="col-11 col-md-9 mb-3 mb-md-0">
              <Link to={`/project/${item.id}`}>
                <img
                  alt="project/img"
                  src={item.img}
                  className={style.mainImg}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
