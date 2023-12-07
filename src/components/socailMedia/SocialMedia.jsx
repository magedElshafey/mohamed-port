import React from "react";
import style from "./social.module.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div>
      <div className={style.mailContainer}>
        <a
          href="mailto:memooelshafey2001@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail size={20} />
        </a>
      </div>
      <div className={style.whatsContainer}>
        <a href="https://wa.me/+201090957279 " target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp size={20} />
        </a>
      </div>
      <div className={style.phone}>
        <a href="tel:+201090957279 " target="_blank" rel="noreferrer">
          <BsTelephonePlus className={` ${style.icon} text-black`} size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
