import React from "react";
import { useRef, useEffect } from "react";
import { useState, useCallback } from "react";
import emailjs, { send } from "emailjs-com";

import "./MVC_Contacts.css";
import MVC_Home from "./MVC_Home";
import MVC_Contacts_Footer from "./MVC_Contacts_Footer";
import "./MVC_Contacts_Footer.css";
import { FaBeer, BiMessageDetail, FaRegEnvelope } from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";
import video from "../../images/video-2.mp4";

import { Paper, Typography } from "@mui/material";
import { useSpeechSynthesis } from 'react-speech-kit';
function MVC_Contacts() {
  const title = useRef();
  const labelName = useRef();
  const labelEmail = useRef();
  const labelText = useRef();
  const inputEmail = useRef();
  const inputText = useRef();
  const buttonSend = useRef();
  const email_form = useRef();
  let counter_Validation = 0;
  const { speak } = useSpeechSynthesis();
  var synth = window.speechSynthesis; // To achieve the speechSynthesis' internal functions
  const [buttonText, setButtonText] = useState("Skicka");

  const inputName = useRef(null);
  function text_Reader(input_Text, e) {
    synth.resume(); // To resume the paused voice
    // To have a border to show focus.
    if (localStorage.getItem("textReaderStatus") === "true") {
      e.target.style.border = '2px solid yellow';
    }

    // It reads the input_Text
    speak({
      text: input_Text, name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
    }
    )
  }

  if (localStorage.getItem("textReaderStatus") === "true") {
    synth.resume();
  }
  else {
    synth.cancel();
    synth.pause();
  }


  function removeSpaces(string) {
    return string.split(" ").join("");
  }

  const validName = (event) => {
    let name_ = event.target.value;
    name_ = removeSpaces(name_);
    if (name_ === "" || name_ === null) {
      console.log("empty ---> " + name_);

      labelName.current.textContent = "Ange ditt namn!";
      labelName.current.style.color = "red";
      return false;
    } else {
      labelName.current.textContent = "Namn";
      labelName.current.style.color = "lightgreen";
      console.log("Typing... " + event.target.value);

      return true;
    }
  };

  const emailValidation = (event) => {
    const email_ = event.target.value;


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_)) {
      console.log("ok");
      console.log("---->" + event.target.value);

      inputEmail.current.style.backgroundColor = "lightgreen";

      setTimeout(() => {
        inputEmail.current.style.backgroundColor = "white";
        labelEmail.current.style.color = "lightgreen";
        labelEmail.current.textContent = "e-post";
      }, 200);

      labelEmail.current.style.color = "white";
      return true;
    } else if (email_ === "" || email_ === null) {
      console.log("invalid!!");
      labelEmail.current.textContent = "Ange din e-post!";
      labelEmail.current.style.color = "red";
      return false;
    } else {
      speak({
        text: "Invalid email format!", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
      }
      )
      labelEmail.current.textContent = "Ogiltigt e-postformat!";
      labelEmail.current.style.color = "red";
    }
  };

  const messageValidation = (event) => {
    let text_ = event.target.value;
    text_ = removeSpaces(text_);
    if (text_ === "" || text_ === null) {
      console.log("empty ---> " + text_);
      speak({
        text: "Skriv in ditt meddelande tack!", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
      }
      )
      labelText.current.textContent = "Skriv in ditt meddelande tack!";
      labelText.current.style.color = "red";
      return false;
    } else {
      labelText.current.textContent = "Message";
      labelText.current.style.color = "lightgreen";
      console.log("Typing... " + event.target.value);
      return true;
    }
  };
  const formReset = () => {
    email_form.current.reset();
    labelName.current.style.color = "white";
    labelEmail.current.style.color = "white";
    labelText.current.style.color = "white";
    inputName.current.focus();
    console.log("Form reset")
  };

  const formValidation = () => {
    const nameValue = removeSpaces(inputName.current.value);
    const emailValue = removeSpaces(inputEmail.current.value);
    const textValue = removeSpaces(inputText.current.value);
    if (nameValue === "" || nameValue === null) {
      inputName.current.focus();
      speak({
        text: "Ange ditt namn!", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
      }
      )
      labelName.current.style.color = "red";
      return false;
    }
    if (emailValue === "" || emailValue === null) {
      inputEmail.current.focus();
      speak({
        text: "Ange din e-post!", name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: true, "default": true
      }
      )
      labelEmail.current.style.color = "red";
      return false;
    }
    if (textValue === "" || textValue === null) {
      inputText.current.focus();
      labelText.current.style.color = "red";
      return false;
    } else return true;
  };

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
        //console.log("Limited service!")
        //  console.log("Your email is sent successfully");
        if (formValidation()) {
          console.log("Error ");
          console.log("Your email is sent successfully");
          buttonSend.current.style.color = "green";
          // buttonSend.current.style.backgroundColor = "green";
          setButtonText("Sändning...");

          buttonSend.current.disabled = true;

          setTimeout(() => {
            console.log("Your email is sent successfully");

            setButtonText("Skickas");
            buttonSend.current.disabled = false;
            buttonSend.current.style.color = "green";
            //buttonSend.current.style.backgroundColor = "green";
          }, 1000);
          setTimeout(() => {
            console.log("Your email is sent successfully");
            setButtonText("Skicka");
            buttonSend.current.disabled = false;
            buttonSend.current.style.color = "black";
            buttonSend.current.style.backgroundColor = "white";
          }, 2000);
          formReset();
        }

      })
      .catch((err) => {
        buttonSend.current.style.backgroundColor = "red";
      });
  }
  const changeFocus = useCallback(e => {
    if (e.key === "Escape") {
      console.log("Escape is pressed")
      title.current.focus();


    }

  }, [])
  useEffect(() => {
    document.addEventListener("keydown", changeFocus);
    return () => document.removeEventListener("keydown", changeFocus)
  })

  let activElement = document.getElementById('email-form');
  var isFocused = (document.activeElement === activElement);
  if (isFocused) {
    document.removeEventListener();
  }
  function checkState() {
    if (localStorage.getItem("PlayerMode") === "true") {
      return true;
    }
    else
      return false;
  }
  console.log(typeof checkState() + " The player mode in Contacts is ")
  console.log(checkState() + " The player mode in Contacts is ")
  if (localStorage.getItem("textReaderStatus") === "true") {
    synth.resume();
  }
  else {
    synth.cancel();
  }

  return (
    <>

      <div className={"contact_Container"}>
        <div tabIndex={0} ref={title} className="containerAni">
          <Typography sx={{
            fontSize: {
              lg: 35,
              md: 28,
              sm: 24,
              xs: 20,
            }
          }}

            variant="h3_Contacts" className="first_text_">
            Vill du vara med och skapadgfg morgondagens undervisning?  kontakta oss!
          </Typography>
        </div>
        <div >
          <Paper variant="contactForm" tabIndex={0} aria-label="kontaktformulär , Vänligen fyll i ditt namn, e-postadress och ditt meddelande" className="form_Container">
            <form


              onSubmit={send} id="email-form" ref={email_form}>
              <Typography variant="label" tabIndex={0} aria-label="Namn" className="label" ref={labelName}>
                Namn
              </Typography>
              <div>
                <input


                  type="text"
                  name="user_name"
                  placeholder="Ange ditt namn!"
                  ref={inputName}
                  onChange={validName}
                />
              </div>

              <Typography variant="label" aria-label="e-post" tabIndex={0} className="label" ref={labelEmail}>
                e-post
              </Typography>
              <input
                type="email"
                name="user_email"
                placeholder="Din e-postadress"
                ref={inputEmail}
                onChange={emailValidation}
                title="This field should not be left blank."
              />

              <Typography variant="label" tabIndex={0} aria-label="Meddelande" className="label" ref={labelText}>
                Meddelande
              </Typography>
              <textarea
                className="message"
                name="message"
                placeholder="Skriv ditt meddelande"
                ref={inputText}
                autoComplete="off"
                onChange={messageValidation}
              />

              <button className="btnSend" id="btnSend" ref={buttonSend}>
                {buttonText}
              </button>
            </form>
          </Paper>
        </div>
      </div>
      <MVC_Contacts_Footer />
    </>
  );
}

export default MVC_Contacts;
