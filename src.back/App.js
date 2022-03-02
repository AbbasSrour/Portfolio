import React from "react";
import "./Styles/App.scss";
import Ide from "./components/Ide/Ide.js";
import Terminal, {
  waitFor,
  phase1dot5,
} from "./components/Terminal/Terminal.js";
import Statusbar, { phase1 } from "./components/Statusbar/Statusbar.js";
import anime from "animejs/lib/anime.es.js";
import Loader, { phase0 } from "./components/Loader/Loader.js";
import Header from "./components/Sections/Header.js";
import MeIde from "./components/Sections/Me.js";
import SkillsIde from "./components/Sections/Skills.js";
import Contact from "./components/Sections/Contact.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Phase 0 in Loader is set on startup to be true, it plays the loader animations, and when is
// done, turns tp false, setShowsLoader(false) in App.js and launches the terminal and list animations.
// Phase1 in Statusbar waits for terminal & list animations to finish then shows the terminal
// with its animations in App.js and sets off the prompt in Terminal.js, prompt in Statusbar.js
// will hide itself on finish and show the Intro, the Intro will hide itself on finish,
// and set Phase2 Statusbar.js to true, Phase2 will setShowIde(True) and sets off its animations
// App.js and setShowIdeIcon(True) in Statusbar.js which in turn will start it's animations

export var phase2 = false;

function App() {
  const [showLoader, setShowLoader] = React.useState(true);
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [showIde, setShowIde] = React.useState(false);
  const TerminalRef = React.useRef(null);
  const MeSection = React.useRef(null);
  const SkillSection = React.useRef(null);
  const HomeSection = React.useRef(null);
  const ContactSection = React.useRef(null);
  const scrollMeToo = React.useRef(null);

  // scroll function for the terminal and ide fiddly for now gonna need to fix it later
  React.useEffect(() => {
    var curScroll = 0;
    function controlScroll(e) {
      var evt = window.event || e;
      var delta = evt.detail ? evt.detail * -120 : evt.wheelDelta;
      if (delta < 0) {
        //scroll down
        curScroll += 40;
      } else {
        //scroll up
        curScroll -= 40;
      }
      document.getElementById("scrollMeToo").scrollTop = curScroll;
    }
    if (document.attachEvent) {
      //if IE (and Opera depending on user setting)
      document.attachEvent("onmousewheel", controlScroll);
    } else if (document.addEventListener) {
      //WC3 browsers
      document.addEventListener("mousewheel", controlScroll, false);
    }
  });

  React.useEffect(() => {
    waitFor((_) => phase0 === false).then((_) => {
      setShowLoader(false);
    });

    waitFor((_) => phase1 === true).then((_) => {
      setShowTerminal(true);
      anime({
        targets: "div.Terminal",
        opacity: 0,
        translateY: 100,
        direction: "reverse",
        easing: "linear",
        duration: 500,
      });
    });

    waitFor((_) => phase1dot5 === true).then((_) => {
      setShowTerminal(false);
      phase2 = true;
    });

    waitFor((_) => phase2 === true).then((_) => {
      setShowIde(true);
      anime({
        targets: "div.Ide",
        opacity: 0,
        translateY: "5%",
        direction: "reverse",
        easing: "linear",
        duration: 400,
      });
    });
  }, []);

  return (
    <div className="App">
      <Loader />
      <div className="OS">
        <div className="Desktop">
          <div>
            {showIde ? (
              <Ide
                fn="Is.java"
                add="5"
                modi="15"
                del="12"
                error="1"
                warn="7"
                info="3"
                hint="4"
                lsp="jdtls"
                pos="1%"
                ref={scrollMeToo}
              >
                <Header />
                <MeIde />
                <SkillsIde />
                <Contact />
              </Ide>
            ) : null}
          </div>
          {showTerminal ? (
            <Terminal id="Terminal" ref={TerminalRef}></Terminal>
          ) : null}
        </div>
        <Statusbar />
      </div>
    </div>
  );
}

// async function demo() {
//   await waitFor((_) => phase2 === true);
// setShowIde(true);
// }

export default App;
