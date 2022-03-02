import React from "react";
import "../../styles/AboutMe.scss";
import Typewriter from "typewriter-effect";
import { ReactComponent as Android } from "../../media/android.svg";
import { ReactComponent as Code } from "../../media/webdev.svg";
import { ReactComponent as Cloud } from "../../media/cloud.svg";
import { ReactComponent as Flutter } from "../../media/flutter.svg";
import { gsap } from "gsap";
import BackgroundAnimation from "../HelperFunctions/svgAnimation.js";
import { getAge } from "../HelperFunctions/HelperFunctions";

const AboutMe = () => {
  const [pos, setPos] = React.useState(0);
  const rotate = () => {
    setPos(pos + 45);
    const tl = gsap.timeline().add("start").to("#Circle", {
      rotate: pos,
      duration: 2,
      ease: "linear",
    });
    return;
  };

  React.useEffect(() => {
    const SliderTimer = setTimeout(() => {
      rotate();
    }, 2000);
  });

  return (
    <section className="IdeSection" id="meSection">
      {/* <span className="htmltags" id="h2Open"> */}
      {/*   {"<h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="h2Close"> */}
      {/*   {"</h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pOpen"> */}
      {/*   {"<p>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pClose" Styles={{ left: "0%" }}> */}
      {/*   {"</p>"} */}
      {/* </span> */}
      <div className="aboutMeLeft">
        <BackgroundAnimation className="MeAnimations" />
        <div className="aboutMeHeader">
          <h2>aboutMe</h2>
        </div>
        <div className="aboutMeText">
          <span>
            I am [{getAge(0)} years, {getAge(1)} months, {getAge(2)} days] old
            Computer Science student, currently residing in lebanon, I'm
            <span className="myIntrests">
              intrested in&#160;
              <Typewriter
                options={{
                  skipAddStyles: true,
                  wrapperClassName: "intrests",
                  strings: ["Linux", "Reading", "Philosophy", "Moding"],
                  delay: "natural",
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.stop().start();
                }}
              />
              .
            </span>
            I got lurred into the programing world mainly due to Linux - the
            irony seeing the theme of the website - and the open source
            community, for the last four years this has been my primary hobby.
            I'm currently working on a&#160;
          </span>
          <span className="myIntrests">
            <Typewriter
              options={{
                skipAddStyles: true,
                wrapperClassName: "intrests",
                strings: ["Profilo", "Podcast App", "Blog"],
                delay: "natural",
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.stop().start();
              }}
            />
            .
          </span>
        </div>
      </div>
      <div className="aboutMeRight">
        <div className="outerCircle" id="Circle">
          <div className="rotateIcon" id="icon0">
            <Code id="icon0Svg" />
          </div>
          <div className="rotateIcon" id="icon1">
            <Cloud id="icon1Svg" />
          </div>
          <div className="rotateIcon" id="icon2">
            <Flutter id="icon2Svg" />
          </div>
          <div className="rotateIcon" id="icon3">
            <Android id="icon3Svg" />
          </div>
        </div>
        <div className="innerCircle">
          <div className="myImage"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
