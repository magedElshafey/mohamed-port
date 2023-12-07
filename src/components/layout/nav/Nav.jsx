import React, { useState, useEffect } from "react";
import style from "./nav.module.css";
import logo from "../../../assets/ME------GZ.png";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Resume from "../../resume/Resume";

const Nav = ({ data }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isBg, setIsBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsBg(true);
      } else {
        setIsBg(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${style.navContainer} ${isBg ? style.bg : style.nonBg}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <img
            alt="logo/img"
            src={logo}
            className={`m-0 p-0 img-fluid ${style.logo}`}
          />
          <ul className="m-0 p-0 d-none d-md-flex align-items-center gap-4">
            {data.map((item, index) => (
              <li className="m-0 p-0" key={index}>
                <HashLink
                  className={`m-0 p-0 ${style.links}`}
                  to={`${
                    item.title === "contact" || item.title === "home"
                      ? item.path
                      : `/#${item.path}`
                  }`}
                >
                  {item.title}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="d-none d-md-block">
            <Resume />
          </div>
          <AiOutlineMenu
            className={`pointer ${style.menu} d-md-none`}
            size={30}
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </div>
      <div
        className={`${style.sidebar} ${showSidebar ? style.show : style.hide}`}
      >
        <div className="p-3">
          <AiOutlineClose
            className="pointer"
            onClick={() => setShowSidebar(false)}
            size={20}
          />
          <ul className="m-0 mt-3 p-0">
            {data.map((item, index) => (
              <li className="mb-3" key={index}>
                <HashLink
                  onClick={() => setShowSidebar(false)}
                  className={`m-0 p-0 ${style.links}`}
                  to={`${
                    item.title === "contact" || item.title === "home"
                      ? item.path
                      : `/#${item.path}`
                  }`}
                >
                  {item.title}
                </HashLink>
              </li>
            ))}
          </ul>
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Nav;
/**
 * <div className={`${style.navContainer} ${isBg ? style.bg : style.nonBg}`}>
      <div className="container  d-flex align-items-center justify-content-between">
      

       
        
      </div>
    
    </div>
 */
