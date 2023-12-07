import React from "react";
import { useParams } from "react-router-dom";
const Project = ({ data }) => {
  console.log("this is the data from project page", data);
  const { id } = useParams();
  const singleProject = data.filter((item) => item.id === +id);
  return (
    <div className="container pt-5 mt-5">
      <h3 className="m-0 p-0 mb-5 fw-bolder text-center">
        {singleProject[0].title}
      </h3>
      <div className="row  justify-content-center justify-content-md-start">
        {/** demo and technologies*/}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="col-11 col-md-3 text-center text-md-start d-flex flex-column align-items-center"
        >
          <button className="btn">
            <a
              className="text-white fw-bolder"
              href={singleProject[0].path}
              target="_blank"
              rel="noreferrer"
            >
              view website
            </a>
          </button>
          <div className="mt-4">
            <p className="m-0 p-0 mb-3 text-uppercase fw-bold text-center">
              technologies
            </p>
            <ul className={`m-0 p-0  text-center `}>
              {singleProject[0].tech.map((item, index) => (
                <li key={index} className="m-0 p-0 mb-3 tech text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="400"
          className="col-11 col-md-9 text-center text-md-start"
        >
          <div className="row mb-5 gap-4 justify-content-center justify-content-md-start align-items-center">
            <div className="m-0 p-0 col-11 col-md-7  borderImg">
              <img
                loading="lazy"
                alt="project/img"
                className=" mainImg"
                src={singleProject[0].img}
              />
            </div>
            <div className="m-0 p-0 col-11 col-md-4 borderImg">
              <img
                loading="lazy"
                alt="project/img"
                className="d-none d-md-block mobImg"
                src={singleProject[0].mobImg}
              />
            </div>
          </div>
          <p className="fw-bolder m-0 p-0 mb-3 fs-5">over view</p>
          <p className="text-black-50 ">{singleProject[0].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
