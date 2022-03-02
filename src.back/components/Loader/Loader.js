import React from "react";
import "../../Styles/Loader.scss";
import myImage from "../../media/me.jpg";
import { ReactComponent as WinBIcon } from "../../media/icons8-windows-11.svg";
import ClipLoader from "react-spinners/ClipLoader";
import Typewriter from "typewriter-effect";
import { HiArrowNarrowRight as Arrow } from "react-icons/hi";
import anime from "animejs/lib/anime.es.js";

export var phase0 = true;
const timeFromat = () => {
  var datetime = new Date();
  var time = datetime.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  return time.slice(0, -3);
};

const dateFormat = () => {
  var datetime = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayName = weekday[datetime.getDay()];
  var month = monthName[datetime.getMonth()];
  var day = datetime.getDate();
  var date = dayName + ", " + month + " " + day;
  return date;
};

const Loader = () => {
  const [showBoot, setShowBoot] = React.useState(true);
  const [showLockScreen, setShowLockScreen] = React.useState(false);
  const [showLoginScreen, setShowLoginScreen] = React.useState(false);
  var date = dateFormat();
  var time = timeFromat();

  React.useEffect(() => {
    const bootTimer = setTimeout(() => {
      setShowBoot(false);
      setShowLockScreen(true);
      setShowLoginScreen(true);
      clearTimeout(bootTimer);
    }, 5000);
    const lockScreenTimer = setTimeout(() => {
      clearTimeout(lockScreenTimer);
    }, 1000);
  }, []);

  React.useEffect(() => {
    anime({
      targets: "div.LockScreen",
      translateY: "-100%",
      direction: "normal",
      easing: "linear",
      duration: 500,
      delay: 2000,
    });
  });

  return (
    <div className="Loader">
      {showBoot ? (
        <div className="BootLoader">
          <WinBIcon className="WinBIcon" />
          <div className="spinnerContainer">
            <ClipLoader
              className="Spinner"
              loading={showBoot}
              color="white"
              size={30}
            />
          </div>
        </div>
      ) : null}
      {showLockScreen ? (
        <div className="LockScreen">
          <span id="time">{time}</span>
          <span id="date">{date}</span>
        </div>
      ) : null}
      {showLoginScreen ? (
        <div className="LoginScreen">
          <div className="LoginScreenWallpaper" />
          <img src={myImage} alt="user" className="userPhoto" />
          <span className="userName"> Abbas Srour </span>
          <div className="passwordBox">
            <Typewriter
              options={{
                wrapperClassName: "password",
                delay: 70,
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction((state) => {
                    state.elements.cursor.style.display = "none";
                  })
                  .pauseFor(3000)
                  .callFunction((state) => {
                    setShowLockScreen(false);
                  })
                  .typeString("●●●●●●●●●")
                  .pauseFor(2000)
                  .callFunction((state) => {
                    phase0 = false;
                    setShowLoginScreen(false);
                  })
                  .stop()
                  .start();
              }}
            />
            <Arrow className="arrow" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Loader;
