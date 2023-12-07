import React, { useState, useEffect } from "react";
import style from "./footer.module.css";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import megz from "../../../assets/MEGZ.png";
const year = new Date().getFullYear();
const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    if (pathname === "/contact") {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, [pathname]);
  return (
    <div className={`position-relative ${showBanner ? "mt-5 pt-5" : null}`}>
      <div className={`mt-5 pt-5 ${style.mainContainer}`}>
        <div className="d-flex flex-column align-items-center mt-5 gap-2">
          <img
            loading="lazy"
            alt="logo/img"
            src={megz}
            className={style.megz}
          />
          <p className="text-white fs-6 fs-md-5 m-0 p-0  fw-bold text-center">
            Living, learning, & leveling up one day at a time.
          </p>
          <div className="d-flex align-items-center gap-3 flex-wrap ">
            <div className={style.socialContainer}>
              <a
                href="mailto:memooelshafey2001@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className={style.icon} size={20} />
              </a>
            </div>
            <div className={style.socialContainer}>
              <a href="tel:+201090957279 " target="_blank" rel="noreferrer">
                <BsTelephone className={` ${style.icon} `} size={20} />
              </a>
            </div>
            <div className={style.socialContainer}>
              <a
                href="https://wa.me/+201090957279 "
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className={style.icon} size={20} />
              </a>
            </div>
          </div>
          <p className="m-0 p-0 text-white">
            powerd by{" "}
            <a
              className={style.megz}
              href="http://megzz.com"
              target="_blank"
              rel="noreferrer"
            >
              Maged Elshafey
            </a>{" "}
            &#169; {year}
          </p>
        </div>
      </div>
      {showBanner && (
        <div className="row justify-content-center">
          <div
            className={`col-10 ${style.formContainer} d-flex justify-content-between gap-3 flex-column flex-md-row p-2 px-5`}
          >
            <p className="fs-5 fw-bolder m-0 p-0">start a project</p>
            <p className="m-0 p-0 text-center">
              Interested in working together? We should queue up a time to chat.
            </p>
            <button onClick={() => navigate("/contact")} className={style.btn}>
              <FaRegHandPeace size={20} />
              <span>let's do it</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
