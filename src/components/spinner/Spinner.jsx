import React from "react";
import style from "./spinner.module.css";
import megz from "../../assets/ME------GZ.png";
const Spinner = () => {
  return (
    <div className={style.mainContainer}>
      <div className="d-flex flex-column align-items-center ">
        <img loading="lazy" className={style.logo} alt="logo" src={megz} />
        <span className={style.loader}></span>
      </div>
    </div>
  );
};

export default Spinner;
