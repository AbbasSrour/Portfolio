import React from "react";
import "../../styles/Ide.scss";
import { MdMinimize as Min } from "react-icons/md";
import { VscChromeMaximize as Max } from "react-icons/vsc";
import { AiOutlineClose as Close } from "react-icons/ai";

const Bufferline = (props) => {
  return (
    <div className="Bufferline">
      <div className="bufferExplorer">
        <span>File Explorer</span>
      </div>
      <div className="BufferArea">{props.children}</div>
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
};

export function Buffer(props) {
  const excuteScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="Buffer" onClick={() => excuteScroll(props.link)}>
      {props.name}
    </div>
  );
}

export default Bufferline;
