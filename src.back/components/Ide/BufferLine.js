import React from "react";
import "../../Styles/Ide.scss";
import { MdMinimize as Min } from "react-icons/md";
import { VscChromeMaximize as Max } from "react-icons/vsc";
import { AiOutlineClose as Close } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const Bufferline = React.forwardRef((props, ref) => {
  return (
    <div className="Bufferline">
      <div className="bufferExplorer">
        <span>File Explorer</span>
      </div>
      <div className="BufferArea">
        <Buffer name="Profilo" id="Home" />
        {/* <Buffer name="About Me" id="AboutMe" /> */}
        {/* <Buffer name="My Skills" id="Skills" /> */}
        {/* <Buffer name="Contact Me" id="Contact" /> */}
      </div>
      <div className="BufferDeco">
        <div className="decoBox">
          <Min className="deco" />
        </div>
        <div className="decoBox">
          <Max className="deco" />
        </div>
        <div className="decoBox">
          <Close className="deco" />
        </div>
      </div>
    </div>
  );
});

function Buffer(props) {
  return <div className="Buffer">{props.name}</div>;
}

export default Bufferline;
