import React from "react";
import { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import "./MVC_Contacts.css";
import MVC_Home from "./MVC_Home";

function MVC_Contacts() {
  const form = useRef();
  function Sent() {
    return (
      <div>
        <h1>Sent</h1>
      </div>
    );
  }
  function send(e) {
    e.preventDefault();
    let btn = document.getElementsByClassName("status");

    btn.textContent = "Sending...";
    console.log(btn.value + " ----");
    emailjs
      .sendForm(
        "service_f43gm4k",
        "template_vx9r4mc",
        e.target,
        "W564JHf9PctY9HRA0"
      )
      .then((res) => {
        console.log("Your email is sent successfully");
        document.getElementsByClassName("status").textContent = "Sent";
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact_Container">
      <div className="form_Container">
        <form onSubmit={send}>
          <h3>Contact us</h3>
          <div className="name_email_Container">
            <div className="name">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className="email">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className="text">
            <label>Message</label>
            <textarea
              className="message"
              name="message"
              placeholder="Write your message"
            />
          </div>
          <div className="send_Btn">
            <button className="btnSend"> Send</button>
            <span className="status"></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MVC_Contacts;
