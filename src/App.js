import React from "react";
import "./styles/App.scss";
import Statusbar from "./components/Statusbar/Statusbar.js";
import Bufferline, { Buffer } from "./components/Ide/BufferLine";
import IdeLine from "./components/Ide/IdeLine";
import IdeExplorer from "./components/Ide/IdeExplorer";
import Header from "./components/Sections/Header";
import AboutMe from "./components/Sections/AboutMe";
import Skills from "./components/Sections/Skills.js";
import Contact from "./components/Sections/Contact.js";

function App() {
  return (
    <div className="App">
      <div className="Desktop">
        <div className="Ide">
          <Bufferline>
            <Buffer name="Profilo" id="Home" />
            <Buffer name="About Me" id="AboutMe" />
            <Buffer name="My Skills" id="Skills" />
            <Buffer name="Contact Me" id="Contact" />
          </Bufferline>
          <div className="MidSection">
            <IdeExplorer />
            <div className="CodeArea">
              <Header />
              <AboutMe />
              <Skills />
              <Contact />
            </div>
          </div>
          <IdeLine
            fn="Portfolio.html"
            add="5"
            modi="15"
            del="12"
            error="1"
            warn="7"
            info="3"
            hint="4"
            lsp="tsserver"
            pos="1%"
          />
          <div className="bottomEmptySpace"></div>
        </div>
      </div>
      <Statusbar />
    </div>
  );
}

export default App;
