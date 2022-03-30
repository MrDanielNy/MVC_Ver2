import React from "react";
import { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import "./MVC_Contacts.css";
import MVC_Home from "./MVC_Home";
import MVC_Contacts_Footer from "./MVC_Contacts_Footer";
import "./MVC_Contacts_Footer.css";

function MVC_Contacts() {
  const form = useRef();
  function send(e) {
    e.preventDefault();
    let btn = document.getElementById("btnSend");
    console.log(btn.textContent);

    emailjs
      .sendForm(
        "service_f43gm4k",
        "template_vx9r4mc",
        e.target,
        "W564JHf9PctY9HRA0"
      )
      .then((res) => {
        console.log("Your email is sent successfully");
        btn.textContent = "Sent";
        document.getElementById("btnSend").disabled = true;
        setTimeout(() => {
          /* document.getElementById("btnsend").disabled = false;
          btn.textContent = "";*/
          console.log("Your email is sent successfully");
          btn.textContent = "Sent";
          document.getElementById("btnSend").disabled = true;
        }, 1000);
        document.getElementById("email-form").reset();
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btnSend").style.color = "white";
        document.getElementById("btnSend").style.backgroundColor = "green";
        btn.textContent = "Sent";
        document.getElementById("btnSend").disabled = true;

        setTimeout(() => {
          /* document.getElementById("btnsend").disabled = false;
          btn.textContent = "";*/
          console.log("Your email is sent successfully");

          btn.textContent = "Send";
          document.getElementById("btnSend").disabled = false;
          document.getElementById("btnSend").style.color = "black";
          document.getElementById("btnSend").style.backgroundColor =
            "transparent";
        }, 1000);
        document.getElementById("email-form").reset();
      });
  }

  return (
    <>
      <div className="contact_Container">
        <div className="containerAni">
          <span class="first_text">Lets get in toch!</span>
        </div>
        <div className="form_Container">
          <form onSubmit={send} id="email-form">
            <label className="label">Name</label>
            <input type="text" name="user_name" />

            <label className="label">Email</label>
            <input type="email" name="user_email" />

            <label className="label">Message</label>
            <textarea
              className="message"
              name="message"
              placeholder="Write your message"
            />

            <button className="btnSend" id="btnSend">
              Send
            </button>
          </form>
        </div>
      </div>
      <MVC_Contacts_Footer />
    </>
  );
}

export default MVC_Contacts;
/*


 <div className="contact_Container">
      <div className="form_Container">
        <form onSubmit={send} id="email-form">
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
            <button className="btnSend" id="btnsend">
              {" "}
              Send
            </button>
            <span id="status"></span>
          </div>
        </form>
      </div>
    </div>

    */
