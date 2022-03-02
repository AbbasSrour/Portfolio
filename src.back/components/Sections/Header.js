import React from "react";
import Particles from "react-tsparticles";
import "../../Styles/Header.scss";
import Typewriter from "typewriter-effect";

export default function Header() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (IdeSection) => {
    console.log(IdeSection);
  };
  return (
    <section className="IdeSection" id="HeaderSection">
      <span className="htmltags" id="htmlOpen">
        {"<html>"}
      </span>
      <span className="htmltags" id="bodyOpen">
        {"<body>"}
      </span>
      <span className="htmltags" id="h1Open">
        {"<h1>"}
      </span>
      <span className="htmltags" id="h1Close">
        {"</h1>"}
      </span>
      <div className="HeaderText">
        <span>Hi, </span>
        <span>I'm Abbas,</span>
        <Typewriter
          options={{
            skipAddStyles: true,
            strings: ["CS Student", "Web Developer", "Mobile App Developer"],
            delay: "natural",
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.stop().start();
          }}
        />
      </div>
      <Particles
        canvasClassName="particles"
        className="particlesContainer"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              grab: {
                quantity: 10,
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
            },
          },
          particles: {
            gravity: {
              enable: false,
              acceleration: 20,
            },
            color: {
              value: "#bb9af7",
            },
            links: {
              color: "#bb9af7",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 6,
              straight: true,
              acceleration: 0,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 200,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
              width: 50,
            },
          },
          detectRetina: true,
        }}
      />
    </section>
  );
}
