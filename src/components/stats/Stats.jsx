import React, { useState, useEffect } from "react";
import style from "./stats.module.css";
import { useInView } from "react-intersection-observer";

const Stats = ({ data }) => {
  const [count, setCount] = useState(data.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when section becomes visible
  });
  useEffect(() => {
    const incrementAutomatically = () => {
      if (inView) {
        setCount((prevCounters) =>
          prevCounters.map((count, index) =>
            count < data[index].number ? count + 1 : count
          )
        );
      }
    };

    const interval = setInterval(incrementAutomatically, 50);
    return () => {
      clearInterval(interval);
    };
  }, [inView, data]);
  return (
    <div id="stat" className="container my-5" ref={ref}>
      <h1
        data-aos="fade-down"
        data-aos-delay="400"
        className={`text-center fw-bolder ${style.title}`}
      >
        statistics
      </h1>
      <div className="row mt-4 justify-content-center">
        {data.map((item, index) => (
          <div className={`${style.mainCard} col-11 col-md-4 p-2 mb-3 mb-md-0`}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div>
                <p className={`fw-bold d-inline-block m-0 p-0  ${style.num}`}>
                  + {count[index]}
                </p>
              </div>
              <p className="mx-0 fw-bolder mb-0 p-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
