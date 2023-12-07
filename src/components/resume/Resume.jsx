import React from "react";
import style from "./resume.module.css";
import { jsPDF } from "jspdf";
const Resume = () => {
  function SaveResume() {
    const doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/hHf1kMF/Maged-Elshafey-CV-C.jpg",
      0,
      0,
      417,
      653
    );
    doc.save("magedResume.pdf");
  }
  return (
    <button onClick={SaveResume} className={style.btn}>
      Download my CV
    </button>
  );
};

export default Resume;
