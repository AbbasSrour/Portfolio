import React from "react";
import "../../styles/Contact.scss";
import { AiTwotonePhone as Phone } from "react-icons/ai";
import { MdEmail as Email } from "react-icons/md";
import { FaAddressCard as Address } from "react-icons/fa";
import { ReactComponent as Resume } from "../../media/resume.svg";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/4d787b90-8da3-11ec-8462-6960be7ce578";

const Contact = React.forwardRef((props, ref) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  var isMobile;
  width > 1024 ? (isMobile = false) : (isMobile = true);

  const [status, setStatus] = React.useState();
  const firstNameRef = React.useRef(null);
  const subjectRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const messageRef = React.useRef(null);

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
    <section className="IdeSection" id="ContactSection" ref={ref}>
      {/* <span className="htmltags" id="h2Open"> */}
      {/*   {"<h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="h2Close"> */}
      {/*   {"</h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pOpen"> */}
      {/*   {"<p>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pClose"> */}
      {/*   {"</p>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="formOpen"> */}
      {/*   {"<form>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="formClose"> */}
      {/*   {"</form>"} */}
      {/* </span> */}
      <div className="leftSection">
        <h2 className="contactHeader">contactMe</h2>
        <span className="contactText">
          Feel free to shoot me a messege anytime, I will most likely respond in
          heart beat.
        </span>
        <div className="dets">
          <div className="detsIconContainer" id="detsIconContainer1">
            <Phone id="detsIcon1" />
          </div>
          <div className="detsContainer" id="detsContainer1">
            <span>+961 71 427 429</span>
          </div>
          <div className="detsIconContainer" id="detsIconContainer2">
            <Email id="detsIcon2" />
          </div>
          <div className="detsContainer" id="detsContainer2">
            <span>abbas.mj.srour@gmail.com</span>
          </div>
          <div className="detsIconContainer" id="detsIconContainer3">
            <Address />
          </div>
          <div className="detsContainer" id="detsContainer3">
            <span>Lebanon, Beirut, Hadat, St.Theresa</span>
          </div>

          <div className="detsIconContainer" id="cvButtonIcon">
            <Resume />
          </div>
          <button
            type="link"
            id="cvButton"
            className="detsContainer"
            href="../../media/AbbasSrour.pdf"
            download="AbbasSrour.pdf"
          >
            Download CV!
          </button>
          <div className="detsIconContainer" id="cvButtonIcon2">
            <Resume />
          </div>
        </div>
      </div>
      <div className="rightSection">
        <form
          className="contactForm"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          {isMobile ? (
            <input
              type="text"
              name="senderName"
              id="senderName"
              autoComplete="off"
              placeholder="Name"
              ref={firstNameRef}
            />
          ) : (
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
          )}
          {isMobile ? (
            <input
              type="text"
              name="senderEmail"
              id="senderEmail"
              autoComplete="off"
              placeholder="Email"
              ref={emailRef}
            />
          ) : null}
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
          <button type="submit" className="submitButton">
            Send Messege!
          </button>
        </form>
        <div className="seperator"></div>
      </div>
    </section>
  );
});
export default Contact;
