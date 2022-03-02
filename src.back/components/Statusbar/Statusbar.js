import React from "react";
import "../../Styles/Statusbar.scss";
import { ReactComponent as Win11 } from "../../media/icons8-windows-11.svg";
import { FcSearch as Search } from "react-icons/fc";
import { BsGithub as Github } from "react-icons/bs";
import { BsFacebook as Facebook } from "react-icons/bs";
import { BsTwitter as Twitter } from "react-icons/bs";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { BsReddit as Reddit } from "react-icons/bs";
import { SiWindowsterminal as TermianlIcon } from "react-icons/si";
import { ReactComponent as IdeIcon } from "../../media/neovim-icon.svg";
import anime from "animejs/lib/anime.es.js";
import { waitFor } from "../Terminal/Terminal.js";
import { phase0 } from "../Loader/Loader.js";
import { phase2 } from "../../App.js";

export var phase1 = false;

function Statusbar() {
  const [showIdeIcon, setShowIdeIcon] = React.useState(false);
  const [showTerminalIcon, setShowTerminalIcon] = React.useState(true);

  React.useEffect(() => {
    waitFor((_) => phase0 === false).then((_) => {
      anime({
        targets: document.getElementById("TermianlIcon"),
        translateY: "150%",
        direction: "reverse",
        opacity: 1,
        easing: "spring",
        duration: 500,
      });
      anime({
        targets: "div.List",
        translateX: "-5%",
        direction: "normal",
        easing: "spring",
        delay: 1000,
        duration: 700,
      });
      const timer = setTimeout(() => {
        phase1 = true;
        clearTimeout(timer);
      }, 2000);
    });
  }, []);

  React.useEffect(() => {
    waitFor((_) => phase2 === true).then((_) => {
      setShowIdeIcon(true);
      setShowTerminalIcon(false);

      anime({
        targets: document.getElementById("IdeIcon"),
        translateY: "5%",
        direction: "reverse",
        easing: "spring",
        duration: 700,
      });
      anime({
        targets: "div.List",
        translateX: "-5%",
        direction: "normal",
        easing: "spring",
        delay: 1000,
        duration: 500,
      });
    });
  }, []);

  return (
    <div className="Statusbar">
      <List className="hello " id="Links">
        <SbIcon link="#">
          <Win11 id="win" />
        </SbIcon>
        <SbIcon link="#">
          <Search id="Search" />
        </SbIcon>
        <SbIcon link="https://github.com/AbbasSrour">
          <Github id="Github" />
        </SbIcon>
        <SbIcon link="https://www.facebook.com/profile.php?id=100011142965316">
          <Facebook id="Facebook" />
        </SbIcon>
        <SbIcon link="https://twitter.com/mshAbbasSr">
          <Twitter id="Twitter" />
        </SbIcon>
        <SbIcon link="https://www.linkedin.com/in/abbas-srour-856010230/">
          <Linkedin id="Linkedin" />
        </SbIcon>
        <SbIcon link="https://www.reddit.com/user/AbbasSr">
          <Reddit id="Reddit" />
        </SbIcon>
        {showIdeIcon ? (
          <SbIcon link="#">
            <IdeIcon id="IdeIcon" />
          </SbIcon>
        ) : null}
        {showTerminalIcon ? (
          <SbIcon link="#">
            <TermianlIcon id="TermianlIcon" />
          </SbIcon>
        ) : null}
      </List>
    </div>
  );
}

function List(props) {
  return <div className="List">{props.children}</div>;
}

function SbIcon(props) {
  return (
    <div className="SbIcon">
      <a href={props.link}>{props.children}</a>
    </div>
  );
}

export default Statusbar;
