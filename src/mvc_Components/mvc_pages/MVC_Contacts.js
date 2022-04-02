import React from "react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import emailjs, { send } from "emailjs-com";

import "./MVC_Contacts.css";
import MVC_Home from "./MVC_Home";
import MVC_Contacts_Footer from "./MVC_Contacts_Footer";
import "./MVC_Contacts_Footer.css";
import { FaBeer, BiMessageDetail, FaRegEnvelope } from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";

function MVC_Contacts() {
  const labelName = useRef();
  const labelEmail = useRef();
  const labelText = useRef();
  const inputEmail = useRef();
  const inputText = useRef();
  const buttonSend = useRef();
  const email_form = useRef();
  let counter_Validation = 0;

  const [buttonText, setButtonText] = useState("Send");

  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  });

  function removeSpaces(string) {
    return string.split(" ").join("");
  }

  const validName = (event) => {
    let name_ = event.target.value;
    name_ = removeSpaces(name_);
    if (name_ === "" || name_ === null) {
      console.log("empty ---> " + name_);

      labelName.current.textContent = "Enter your name please!";
      labelName.current.style.color = "red";
      return false;
    } else {
      labelName.current.textContent = "Name";
      labelName.current.style.color = "green";
      console.log("Typing... " + event.target.value);

      return true;
    }
  };

  const emailValidation = (event) => {
    const email_ = event.target.value;
    console.log("It goes in it");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_)) {
      console.log("ok");
      console.log("---->" + event.target.value);

      inputEmail.current.style.backgroundColor = "lightgreen";

      setTimeout(() => {
        inputEmail.current.style.backgroundColor = "white";
        labelEmail.current.style.color = "green";
        labelEmail.current.textContent = "Email";
      }, 200);

      labelEmail.current.style.color = "white";
      return true;
    } else if (email_ === "" || email_ === null) {
      console.log("invalid!!");
      labelEmail.current.textContent = "Enter your email please!";
      labelEmail.current.style.color = "red";
      return false;
    } else {
      labelEmail.current.textContent = "Invalid email format!";
      labelEmail.current.style.color = "red";
    }
  };

  const messageValidation = (event) => {
    let text_ = event.target.value;
    text_ = removeSpaces(text_);
    if (text_ === "" || text_ === null) {
      console.log("empty ---> " + text_);

      labelText.current.textContent = "Enter your message please!";
      labelText.current.style.color = "red";
      return false;
    } else {
      labelText.current.textContent = "Message";
      labelText.current.style.color = "green";
      console.log("Typing... " + event.target.value);
      return true;
    }
  };
  const formReset = () => {
    email_form.current.reset();
    labelName.current.style.color = "black";
    labelEmail.current.style.color = "black";
    labelText.current.style.color = "black";
    inputName.current.focus();
    console.log("Done");
  };

  const formValidation = () => {
    const nameValue = removeSpaces(inputName.current.value);
    const emailValue = removeSpaces(inputEmail.current.value);
    const textValue = removeSpaces(inputText.current.value);
    if (nameValue === "" || nameValue === null) {
      inputName.current.focus();
      labelName.current.style.color = "red";
      return false;
    }
    if (emailValue === "" || emailValue === null) {
      inputEmail.current.focus();
      labelEmail.current.style.color = "red";
      return false;
    }
    if (textValue === "" || textValue === null) {
      inputText.current.focus();
      labelText.current.style.color = "red";
      return false;
    } else return true;
  };

  /*const form = useRef();*/
  function send(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f43gm4k",
        "template_vx9r4mc",
        e.target,
        "W564JHf9PctY9HRA0"
      )
      .then((res) => {
        //  console.log("Your email is sent successfully");
        setButtonText("Sent");

        setTimeout(() => {
          /* document.getElementById("btnsend").disabled = false;
          btn.textContent = "";*/
          console.log("Your email is sent successfully");
          setButtonText("Sent");
        }, 1000);
        formReset();
      })
      .catch((err) => {
        if (formValidation()) {
          console.log("Error " + err);
          console.log("Your email is sent successfully");
          buttonSend.current.style.color = "white";
          buttonSend.current.style.backgroundColor = "green";
          setButtonText("Sending...");

          buttonSend.current.disabled = true;

          setTimeout(() => {
            console.log("Your email is sent successfully");

            setButtonText("Sent");
            buttonSend.current.disabled = false;
            buttonSend.current.style.color = "black";
            buttonSend.current.style.backgroundColor = "green";
          }, 1000);
          setTimeout(() => {
            console.log("Your email is sent successfully");

            setButtonText("Send");
            buttonSend.current.disabled = false;
            buttonSend.current.style.color = "black";
            buttonSend.current.style.backgroundColor = "transparent";
          }, 2000);
          formReset();
        }
      });
  }

  return (
    <>
      <div className="contact_Container">
        <div className="containerAni">
          <span class="first_text">Lets get in toch!</span>
        </div>

        <div className="form_Container">
          <form onSubmit={send} id="email-form" ref={email_form}>
            <label className="label" ref={labelName}>
              Name
            </label>
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                ref={inputName}
                onChange={validName}
              />
            </div>

            <label className="label" ref={labelEmail}>
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Your e-mail address "
              ref={inputEmail}
              onChange={emailValidation}
              title="This field should not be left blank."
            />

            <label className="label" ref={labelText}>
              Message
            </label>
            <textarea
              className="message"
              name="message"
              placeholder="Write your message"
              ref={inputText}
              autoComplete="off"
              onChange={messageValidation}
            />

            <button className="btnSend" id="btnSend" ref={buttonSend}>
              {buttonText}
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
