import React from "react";
import "../../styles/Skills.scss";
// import { AiFillHtml5 as HtmlIcon } from "react-icons/ai";
// import { DiCss3 as CssIcon } from "react-icons/di";
// import { DiJavascript as JsIcon } from "react-icons/di";
// import { DiNodejs as NodejsIcon } from "react-icons/di";
// import { SiKotlin as KotlinIcon } from "react-icons/si";
// import { DiJava as JavaIcon } from "react-icons/di";
// import { SiCplusplus as CplusIcon } from "react-icons/si";
// import { DiPython as PythonIcon } from "react-icons/di";
import { ReactComponent as HtmlIcon } from "../../media/Skills/html.svg";
import { ReactComponent as CssIcon } from "../../media/Skills/css.svg";
import { ReactComponent as JsIcon } from "../../media/Skills/javascript.svg";
import { ReactComponent as NodejsIcon } from "../../media/Skills/nodejs.svg";
import { ReactComponent as KotlinIcon } from "../../media/Skills/kotlin.svg";
import { ReactComponent as JavaIcon } from "../../media/Skills/java.svg";
import { ReactComponent as CplusIcon } from "../../media/Skills/C++.svg";
import { ReactComponent as PythonIcon } from "../../media/Skills/python.svg";
import { gsap } from "gsap";

const Skills = React.forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  // TODO : Make all the skills one div that gsap spins 360 digrees and change the content with each spin from an array of attributes for each skill
  const langs = [
    "CSS",
    "<html>",
    "JS",
    "Nodejs",
    "C++",
    "Java",
    "Kotlin",
    "Python",
  ];

  const nextSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(2);
      gsap.to("#Slider", {
        rotate: "46deg",
        duration: 0.5,
      });
      gsap.to("#item1", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item1Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item2Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item2", {
        scale: 7,
        duration: 0.5,
        rotate: "-46deg",
      });
      return;
    }
    if (currentSlide === 2) {
      setCurrentSlide(3);
      gsap.to("#Slider", {
        rotate: "87deg",
        duration: 0.5,
      });
      gsap.to("#item2", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item2Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item3Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item3", {
        scale: 7,
        duration: 0.5,
        rotate: "-87deg",
      });
      return;
    }
    if (currentSlide === 3) {
      setCurrentSlide(4);
      gsap.to("#Slider", {
        rotate: "126deg",
        duration: 0.5,
      });
      gsap.to("#item3", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item3Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item4Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item4", {
        scale: 7,
        duration: 0.5,
        rotate: "-126deg",
      });
      return;
    }
    if (currentSlide === 4) {
      setCurrentSlide(5);
      gsap.to("#Slider", {
        rotate: "173deg",
        duration: 0.5,
      });
      gsap.to("#item4", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item4Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item5Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item5", {
        scale: 7,
        duration: 0.5,
        rotate: "-173deg",
      });
      return;
    }
    if (currentSlide === 5) {
      setCurrentSlide(6);
      gsap.to("#Slider", {
        rotate: "215deg",
        duration: 0.5,
      });
      gsap.to("#item5", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item5Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item6Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item6", {
        scale: 7,
        duration: 0.5,
        rotate: "-215deg",
      });
      return;
    }
    if (currentSlide === 6) {
      setCurrentSlide(7);
      gsap.to("#Slider", {
        rotate: "265deg",
        duration: 0.5,
      });
      gsap.to("#item6", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item6Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item7Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item7", {
        scale: 7,
        duration: 0.5,
        rotate: "-265deg",
      });
      return;
    }
    if (currentSlide === 7) {
      setCurrentSlide(0);
      gsap.to("#Slider", {
        rotate: "317deg",
        duration: 0.5,
      });
      gsap.to("#item7", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item7Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item0Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item0", {
        scale: 7,
        duration: 0.5,
        rotate: "-317deg",
      });
      return;
    }
    if (currentSlide === 0) {
      setCurrentSlide(1);
      gsap.to("#Slider", {
        rotate: "0deg",
        duration: 0.5,
      });
      gsap.to("#item0", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item0Icon", {
        scale: 0,
        duration: 0.5,
      });
      gsap.to("#item1Icon", {
        scale: 1,
        duration: 0.5,
      });
      gsap.to("#item1", {
        scale: 7,
        duration: 0.5,
        rotate: "0deg",
      });
      return;
    }
  };

  React.useEffect(() => {
    const SliderTimer = setTimeout(() => {
      nextSlide();
    }, 5000);
  });

  return (
    <section className="IdeSection" id="SkillsSection" ref={ref}>
      {/* <span className="htmltags" id="h2Open"> */}
      {/*   {"<h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="h2Close"> */}
      {/*   {"</h2>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pOpen"> */}
      {/*   {"<p>"} */}
      {/* </span> */}
      {/* <span className="htmltags" id="pClose"> */}
      {/*   {"</p>"} */}
      {/* </span> */}
      <div className="leftSection">
        <div className="mySkillsHeader">
          <h2>mySkills</h2>
        </div>
        <span className="mySkillsText">
          During the last three years I picked up a big number of skills and
          concepts, be it from my college courses, free public materials from
          other universities and Youtube trutorials, applying the knowledge I
          learn with exercies that I pick up from sites like leetcode, front end
          mentor, exercism...
        </span>
      </div>
      <div className="rightSection">
        <button onClick={nextSlide} className="SliderButton">
          <span>{langs[currentSlide]}</span>
        </button>
        <SkillsDisk />
      </div>
    </section>
  );
});

const SkillsDisk = () => {
  return (
    <div className="Slider" id="Slider">
      <div className="item" id="item0">
        <CssIcon id="item0Icon" />
      </div>
      <div className="item" id="item1">
        <HtmlIcon id="item1Icon" />
      </div>
      <div className="item" id="item2">
        <JsIcon id="item2Icon" />
      </div>
      <div className="item" id="item3">
        <NodejsIcon id="item3Icon" />
      </div>
      <div className="item" id="item4">
        <CplusIcon id="item4Icon" />
      </div>
      <div className="item" id="item5">
        <JavaIcon id="item5Icon" />
      </div>
      <div className="item" id="item6">
        <KotlinIcon id="item6Icon" />
      </div>
      <div className="item" id="item7">
        <PythonIcon id="item7Icon" />
      </div>
    </div>
  );
};

export default Skills;
