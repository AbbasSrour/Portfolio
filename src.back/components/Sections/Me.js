import React from "react";
import "../../Styles/Me.scss";
import Typewriter from "typewriter-effect";
import BackgroundAnimation from "./svgAnimation.js";
import { GrArchlinux as Arch } from "react-icons/gr";
import { BsCodeSlash as Code } from "react-icons/bs";
import { AiOutlineCloudServer as Cloud } from "react-icons/ai";
import { AiFillAndroid as Android } from "react-icons/ai";
import { gsap } from "gsap";

function dateDiff(startingDate, endingDate) {
  var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  }
  var endDate = new Date(endingDate);
  if (startDate > endDate) {
    var swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  var startYear = startDate.getFullYear();
  var february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  return "[" + yearDiff + "Y, " + monthDiff + "M, " + dayDiff + "D" + "]";
}

const getBirthDate = () => {
  const today = new Date();
  const birthDate = new Date(2001, 0, 4);
  return dateDiff(today, birthDate);
};

const MeIde = React.forwardRef((props, ref) => {
  const [currentPos, setCurrentPos] = React.useState(0);
  const [pos, setPos] = React.useState(0);
  // const tl2 = gsap
  //   .timeline()
  //   .add("start")
  //   .to("#icon0Svg", {
  //     rotate: -pos,
  //     duration: 2,
  //     ease: "linear",
  //   })
  //   .to("#icon1Svg", {
  //     rotate: -pos,
  //     duration: 2,
  //     ease: "linear",
  //   })
  //   .to("#icon2Svg", {
  //     rotate: -pos,
  //     duration: 2,
  //     ease: "linear",
  //   })
  //   .to("#icon3Svg", {
  //     rotate: -pos,
  //     duration: 2,
  //     ease: "linear",
  //   });

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
    <section className="IdeSection" id="meSection" ref={ref}>
      <div className="aboutMeLeft">
        <BackgroundAnimation className="MeAnimations" />
        <span className="htmltags" id="h2Open">
          {"<h2>"}
        </span>
        <div className="aboutMeHeader">
          <h2>aboutMe</h2>
        </div>
        <span className="htmltags" id="h2Close">
          {"</h2>"}
        </span>
        <span className="htmltags" id="pOpen">
          {"<p>"}
        </span>
        <div className="aboutMeText">
          <span>
            I am {getBirthDate()} old Computer Science student, currently
            residing in lebanon,
            <span className="myIntrests">
              I'm intrested in&#160;
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
              , among other
            </span>
            things. I got lurred into the programing world mainly mainly due to
            Linux - the irony seeing the theme of the website - and the open
            source community, for the three four years this has been my main
            hobby. I'm currently working on a&#160;
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
        <span className="htmltags" id="pClose" Styles={{ left: "0%" }}>
          {"</p>"}
        </span>
      </div>
      <div className="ImageArea">
        <div className="outerCircle" id="Circle">
          <div className="rotateIcon" id="icon0">
            <Code id="icon0Svg" />
          </div>
          <div className="rotateIcon" id="icon1">
            <Cloud id="icon1Svg" />
          </div>
          <div className="rotateIcon" id="icon2">
            <Arch id="icon2Svg" />
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
});

export default MeIde;
