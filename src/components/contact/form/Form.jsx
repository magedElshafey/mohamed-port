import React, { useState, useRef } from "react";
import style from "./form.module.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gi7tyas",
        "template_8ttvk7h",
        form.current,
        "fYiCvQBpXho0Iw6b2"
      )
      .then(
        (result) => {
          toast.success(`message sent succfully`);
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`col-11 col-md-10 ${style.mainContainer} p-3`}
        >
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <label htmlFor="name" className="d-block text-black-50 mb-1">
                name
              </label>
              <input
                type="text"
                id="name"
                className={style.inp}
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="user_name"
              />
            </div>
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <label htmlFor="email" className="d-block text-black-50 mb-1">
                email
              </label>
              <input
                type="email"
                id="email"
                className={style.inp}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="user_email"
              />
            </div>
          </div>
          <label htmlFor="msg" className="d-block mb-1 text-black-50">
            leave your message
          </label>
          <textarea
            id="msg"
            className={`${style.inp} ${style.area}`}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            name="message"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button type="submit" className={style.btn}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
