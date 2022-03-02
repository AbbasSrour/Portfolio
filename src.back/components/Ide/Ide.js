import React from "react";
import "../../Styles/Ide.scss";
import Bufferline from "./BufferLine.js";
import IdeLine from "./IdeLine.js";
import IdeExplorer from "./IdeExplorer.js";

const Ide = React.forwardRef((props, ref) => {
  return (
    <div className="Ide">
      <Bufferline />
      <div className="MidSection">
        <IdeExplorer></IdeExplorer>
        <div className="CodeArea" id="scrollMeToo" ref={ref}>
          {props.children}
        </div>
      </div>
      <IdeLine
        fn={props.fn}
        add={props.add}
        modi={props.modi}
        del={props.del}
        error={props.error}
        warn={props.warn}
        info={props.info}
        hint={props.hint}
        lsp={props.lsp}
        pos={props.pos}
      />
      <div className="bottomEmptySpace"></div>
    </div>
  );
});

export default Ide;
