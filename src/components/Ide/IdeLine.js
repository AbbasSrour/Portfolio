import React from "react";

function IdeLine(props) {
  return (
    <div className="IdeLine">
      <div className="MainIcon"></div>
      <div className="FileName">
        <div className="SepTri"></div>
        <div className="fnIcon"></div>
        <span className="fnText">&#160;{props.fn}</span>
      </div>
      <div className="SepTri2"></div>
      <div className="Git">
        <div className="gitIcon"></div>
        <span className="gitText">&#160;master</span>
      </div>
      <div className="Changes">
        <div className="add">
          <div className="ChangesIcon"></div>
          <span className="ChangesText">{props.add}</span>
        </div>
        <div className="modi">
          <div className="ChangesIcon">柳</div>
          <span className="ChangesText">{props.modi}</span>
        </div>
        <div className="del">
          <div className="ChangesIcon"></div>
          <span className="ChangesText">{props.del}</span>
        </div>
      </div>
      <div className="Empty"></div>
      <div className="Diagnostics">
        <div className="error">
          <div className="DiagnosticsIcon"></div>
          <span className="DiagnosticsText">{props.error}</span>
        </div>
        <div className="warn">
          <div className="DiagnosticsIcon"></div>
          <span className="DiagnosticsText">{props.warn}</span>
        </div>
        <div className="info">
          <div className="DiagnosticsIcon"></div>
          <span className="DiagnosticsText">{props.info}</span>
        </div>
        <div className="hint">
          <div className="DiagnosticsIcon"></div>
          <span className="DiagnosticsText">{props.hint}</span>
        </div>
      </div>
      <div className="Lsp">
        <div className="LspIcon"></div>
        <span className="LspText">{props.lsp}</span>
      </div>
      <div className="SepCir1"></div>
      <div className="VimMode">
        <div className="VimIcon"></div>
        <div className="VimText">NORMAL</div>
      </div>
      <div className="SepCir2"></div>
      <div className="Position">
        <div className="PosIcon"></div>
        <span className="PosText">{props.pos}</span>
      </div>
    </div>
  );
}
export default IdeLine;
