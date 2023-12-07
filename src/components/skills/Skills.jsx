import React, { useState, useRef, useEffect } from "react";
import style from "./skills.module.css";
import skills from "../../assets/skills.avif";
const Skills = ({ data }) => {
  const ref = useRef();
  const [userEnterd, setUserEnterd] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= ref.current.offsetTop - 280) {
        setUserEnterd(true);
      } else {
        setUserEnterd(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div id="skills" className="container my-4" ref={ref}>
      <h1
        data-aos="fade-down"
        data-aos-delay="300"
        className={`text-center fw-bolder ${style.title}`}
      >
        skills
      </h1>
      <div className="row mb-3 mt-5 justify-content-center">
        <div className="col-11 col-md-6 mb-3 mb-md-0">
          <img
            alt="skills/img"
            className={style.mainImg}
            src={skills}
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
        <div className="col-11 col-md-6 mb-3 mb-md-0">
          <div className="row">
            {data.map((skill, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="col-12 justify-content-center col-md-6 mb-4"
              >
                <p className="fw-bold mb-1">{skill.name}</p>
                <div className={style.wraper}>
                  <div
                    className={style.progress}
                    style={{
                      width: userEnterd ? skill.progress : "0",
                      backgroundImage: skill.bg,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
