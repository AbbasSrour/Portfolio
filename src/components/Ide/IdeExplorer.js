import React from "react";
import { AiFillFolderOpen as FolderIcon } from "react-icons/ai";
import { DiJavascript as JSIcon } from "react-icons/di";
import { AiFillHtml5 as HtmlIcon } from "react-icons/ai";
import { SiSass as SassIcon } from "react-icons/si";
import { VscJson as JsonIcon } from "react-icons/vsc";

function IdeExplorer(props) {
  return (
    <div className="Explorer">
      <div className="FileEx">
        <Folder FolderName="public" id="publicFolder" />
        <File id="indexHtml">
          <HtmlIcon className="HtmlIcon" /> index.html
        </File>
        <File id="manifestJson">
          <JsonIcon className="JsonIcon" /> manifest.json
        </File>
        <Folder FolderName="src" id="srcFolder" />
        <File id="appJs">
          <JSIcon className="JSIcon" /> App.js
        </File>
        <File id="indexJs">
          <JSIcon className="JSIcon" /> index.js
        </File>
        <File id="webJs">
          <JSIcon className="JSIcon" /> reportWebVitals.js
        </File>
      </div>
      <Outline />
    </div>
  );
}

function File(props) {
  return (
    <div className="File" id={props.Id}>
      {props.children}
    </div>
  );
}

function Folder(props) {
  return (
    <div className="Folder" id={props.Id}>
      <FolderIcon
        className="FolderIcon"
        className="FolderIcon"
        className="FolderIcon"
        className="FolderIcon"
      />{" "}
      {props.FolderName}
    </div>
  );
}

function Outline(props) {
  return (
    <div className="Outline">
      <div className="olHeader"></div>
      <div className="functions">{props.children}</div>
    </div>
  );
}

export default IdeExplorer;
