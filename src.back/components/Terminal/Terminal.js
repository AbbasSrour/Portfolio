import React from "react";
import "../../Styles/Terminal.scss";
import { MdMinimize as Min } from "react-icons/md";
import { VscChromeMaximize as Max } from "react-icons/vsc";
import { AiOutlineClose as Close } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import anime from "animejs/lib/anime.es.js";
import { phase1 } from "../Statusbar/Statusbar.js";
import { phase2 } from "../../App.js";

export var phase1dot5 = false;

const Terminal = React.forwardRef((props, ref) => {
  const [showPrompt, setShowPrompt] = React.useState(false);

  React.useEffect(() => {
    waitFor((_) => phase1 === true).then((_) => {
      setShowPrompt(true);
    });
  }, []);

  const Prompt = () => (
    <Typewriter
      options={{
        wrapperClassName: "prompt",
        delay: 1,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1000)
          .typeString(
            "Windows PowerShell<br> Copyright &nbsp; (C) &nbsp; Microsoft Corporation. All rights reserved.<br><br>PS C:\\Users\\Abbas>"
          )
          .pauseFor(1000)
          .changeDelay(70)
          .typeString("exec Portfolio")
          .callFunction((state) => {
            state.elements.cursor.style.animation = "none";
            state.elements.cursor.style.display = "none";
            setShowPrompt(false);
            phase1dot5 = true;
          })
          .deleteAll(1)
          .stop()
          .start();
      }}
    />
  );

  return (
    <div className="Terminal" ref={ref}>
      <div className="WindowNav">
        <div className="TerBufferArea">
          <Buffer name="profilo.exe" />
        </div>
        <div className="decoWrapper">
          <div className="decoTerBox">
            <Min className="decoTer" />
          </div>
          <div className="decoTerBox">
            <Max className="decoTer" />
          </div>
          <div className="decoTerBox">
            <Close className="decoTer" />
          </div>
        </div>
      </div>
      <div className="OutputSection">
        {showPrompt && !phase2 ? <Prompt /> : null}
        {props.children}
      </div>
    </div>
  );
});
function Buffer(props) {
  return <div className="TerBuffer">{props.name}</div>;
}

export function waitFor(conditionFunction) {
  const poll = (resolve) => {
    if (conditionFunction()) resolve();
    else setTimeout((_) => poll(resolve), 400);
  };

  return new Promise(poll);
}

export default Terminal;
