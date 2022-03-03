import React from "react";
import "../../styles/Statusbar.scss";
import { FcSearch as Search } from "react-icons/fc";
import { BsGithub as Github } from "react-icons/bs";
import { BsFacebook as Facebook } from "react-icons/bs";
import { BsTwitter as Twitter } from "react-icons/bs";
import { BsLinkedin as Linkedin } from "react-icons/bs";
// import { BsReddit as Reddit } from "react-icons/bs";
import { ReactComponent as Win11 } from "../../media/WindowsIcon.svg";
import { ReactComponent as IdeIcon } from "../../media/neovim-icon.svg";
// import { SiWindowsterminal as TermianlIcon } from "react-icons/si";

function Statusbar() {
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

  return (
    <div className="Statusbar">
      {isMobile ? (
        <List id="Links">
          <SbIcon link="https://github.com/AbbasSrour">
            <Github id="Github" />
          </SbIcon>
          <SbIcon link="https://www.facebook.com/profile.php?id=100011142965316">
            <Facebook id="Facebook" />
          </SbIcon>
          <SbIcon link="#">
            <Win11 id="win" />
          </SbIcon>
          <SbIcon link="https://www.linkedin.com/in/abbas-srour-856010230/">
            <Linkedin id="Linkedin" />
          </SbIcon>
          <SbIcon link="https://twitter.com/mshAbbasSr">
            <Twitter id="Twitter" />
          </SbIcon>
          {/* <SbIcon link="https://www.reddit.com/user/AbbasSr"> */}
          {/*   <Reddit id="Reddit" /> */}
          {/* </SbIcon> */}
        </List>
      ) : (
        <List id="Links">
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
          {/* <SbIcon link="https://www.reddit.com/user/AbbasSr"> */}
          {/*   <Reddit id="Reddit" /> */}
          {/* </SbIcon> */}
          <SbIcon link="#">
            <IdeIcon id="IdeIcon" />
          </SbIcon>
          {/* <SbIcon link="#"> */}
          {/*   <TermianlIcon id="TermianlIcon" /> */}
          {/* </SbIcon> */}
        </List>
      )}
    </div>
  );
}

export function List(props) {
  return <div className="List">{props.children}</div>;
}

export function SbIcon(props) {
  return (
    <div className="SbIcon">
      <a href={props.link}>{props.children}</a>
    </div>
  );
}

export default Statusbar;
