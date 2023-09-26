import React from "react";
import "./Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uiutxpg",
        "template_t4ubf1d",
        form.current,
        "CWmzgeoDi7jorK0PT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Fade right>
                    <img
                      src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
                      alt="ocontact"
                      className="image"
                    />
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Zoom>
                <div className="card2 d-flex card border-0 px-4 py-3">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="row">
                        <h6>
                          CONTACT WITH
                          <BsLinkedin color="blue" size={28} className="ms-2" />
                          <BsGithub color="black" size={28} className="ms-2" />
                          <AiOutlineMail
                            color="darkred"
                            size={28}
                            className="ms-2"
                          />
                        </h6>
                      </div>

                      <div className="row px-3 mb-4">
                        <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line" />
                      </div>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_email"
                          placeholder="Enter your Email Address"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
