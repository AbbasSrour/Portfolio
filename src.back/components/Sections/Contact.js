import React, { useRef } from "react";
import "../../Styles/Contact.scss";
import { AiTwotonePhone as Phone } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { FaAddressCard as Address } from "react-icons/fa";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/4d787b90-8da3-11ec-8462-6960be7ce578";

const Contact = () => {
  const [status, setStatus] = React.useState();
  const firstNameRef = useRef(null);
  const subjectRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    firstNameRef.current.value = "";
    subjectRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <section className="IdeSection" id="ContactSection">
      <div className="textSection">
        <div className="textContainer">
          <span className="htmltags" id="h2Open">
            {"<h2>"}
          </span>
          <h2 className="contactHeader">contactMe</h2>
          <span className="htmltags" id="h2Close">
            {"</h2>"}
          </span>
          <span className="htmltags" id="pOpen">
            {"<p>"}
          </span>
          <span className="contactText">
            Feel free to shoot me a messege anytime, I will most likely respond
            in heart beat.
          </span>
          <span className="htmltags" id="pClose">
            {"</p>"}
          </span>
          <div className="detsIconContainer" id="detsIconContainer1">
            <Phone id="detsIcon1" />
          </div>
          <div className="detsContainer" id="detsContainer1">
            <span>Phone: +961 71 427 429</span>
          </div>
          <div className="detsIconContainer" id="detsIconContainer2">
            <Email id="detsIcon2" />
          </div>
          <div className="detsContainer" id="detsContainer2">
            <span>Email: abbas.mj.srour@gmail.com</span>
          </div>
          <div className="detsIconContainer" id="detsIconContainer3">
            <Address />
          </div>
          <div className="detsContainer" id="detsContainer3">
            <span>Address: Lebanon,Beirut,Hadat,St.Theresa</span>
          </div>
        </div>
      </div>
      <div className="formSection">
        {/* <span className="htmltags" id="formOpen"> */}
        {/*   {"<form>"} */}
        {/* </span> */}
        <form
          className="contactForm"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="nameEmail">
            <input
              type="text"
              name="senderName"
              id="senderName"
              autoComplete="off"
              placeholder="Name"
              ref={firstNameRef}
            />
            <input
              type="text"
              name="senderEmail"
              id="senderEmail"
              autoComplete="off"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <input
            type="text"
            name="senderSubject"
            id="senderSubject"
            autoComplete="off"
            placeholder="Subject"
            ref={subjectRef}
          />
          <textarea
            name="senderMessege"
            id="senderMessege"
            autoComplete="off"
            placeholder="Messege"
            ref={messageRef}
          />
          <div className="buttonContainer">
            <button
              type="link"
              className="cvButton"
              href="../assets/Resume/Resume.pdf"
              download="Resume.pdf"
            >
              Download CV!
            </button>
            <button type="submit" className="submitButton">
              Send Messege!
            </button>
          </div>
        </form>
        {/* <span className="htmltags" id="formClose"> */}
        {/*   {"</form>"} */}
        {/* </span> */}
        <div className="seperator"></div>
      </div>
    </section>
  );
};
export default Contact;
