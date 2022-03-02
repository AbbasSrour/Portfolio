import React from "react";
import { gsap } from "gsap";
// import SplitText from "gsap/SplitText";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const ColorPalette = (props) => {
  const smartBlue = "#7aa2f7";
  const lightBlue = "#7aa2f7";
  const smartGreen = "#bb9af7";
  const darkGreen = "#46c681";
  const smartBlack = "#545c7e";
  const veryLightBlue = "#C6FBFA";
  const splitTextTween = React.useRef();
  const dotsContainerRef = React.useRef();
  const squigglingLineRef = React.useRef();
  const plainCircleRef = React.useRef();
  const outlineCircleRef = React.useRef();
  const blurCircleRef = React.useRef();
  const triangleRef = React.useRef();
  const cubeRef = React.useRef();

  React.useEffect(() => {
    const textTween = gsap.timeline({ paused: true });
    // const split = new SplitText("h1", { type: "chars" });
    // textTween.from(split.chars, {
    //   opacity: 0,
    //   y: 50,
    //   x: 70,
    //   ease: "power3",
    //   stagger: 0.04,
    // });

    const dotsTween = gsap.timeline({ paused: true });
    dotsTween.to(dotsContainerRef.current.children, {
      duration: 1,
      scale: 0.1,
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
      stagger: {
        // wrap advanced options in an object
        each: 0.1,
        from: "random",
        grid: "auto",
        ease: "power3.inOut",
      },
    });

    //register the plugin
    // gsap.registerPlugin(DrawSVGPlugin);
    const squigglingLineTween = gsap.timeline({ paused: true, repeat: -1 });
    squigglingLineTween
      .set(squigglingLineRef.current, {
        drawSVG: "0% 71.8%",
      })
      .to(squigglingLineRef.current, {
        drawSVG: "28.2% 100%",
        duration: 1,
        ease: "none",
      })
      .to(
        squigglingLineRef.current,
        {
          x: -68.5641,
          duration: 1,
          ease: "none",
        },
        "-=1"
      );

    const DotSquiggTwen = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true,
    });
    DotSquiggTwen.to(outlineCircleRef.current, {
      y: 20,
      duration: 0.5,
      ease: "none",
    }).to(
      plainCircleRef.current,
      {
        y: -20,
        duration: 0.5,
        ease: "none",
      },
      "-=0.5"
    );

    gsap.registerPlugin(MotionPathPlugin);

    const MotionPathTween = gsap.timeline({ paused: true });
    MotionPathTween.to(blurCircleRef.current, {
      duration: 18,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
      },
    });
    const triangleTween = gsap.timeline({
      paused: true,
      repeat: -1,
      defaults: { duration: 2, ease: "none" },
    });
    triangleTween
      .set(triangleRef.current, {
        drawSVG: "0%",
      })
      .fromTo(triangleRef.current, { drawSVG: "0" }, { drawSVG: "100%" })
      .to(triangleRef.current, { drawSVG: "100% 100%" }, "-=0.5")
      .to(
        cubeRef.current,
        {
          rotation: 60,
          transformOrigin: "50% 50%",
        },
        0
      );

    const mainTL = gsap.timeline();
    mainTL
      .add(triangleTween.play(), 0)
      // .add(squigglingLineTween.play(), 0)
      .add(MotionPathTween.play(), 0)
      .add(DotSquiggTwen.play(), 0)
      .add(textTween.play(), 0)
      .add(dotsTween.play(), 0)
      .timeScale(1);
  }, []);

  return (
    <>
      <svg viewBox="0 0 1080 1080" id="ColorPalette">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              stdDeviation="10"
              in="SourceGraphic"
              result="blur1"
            />
            <feColorMatrix
              mode="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"
              in="blur1"
              result="colormatrix1"
            />
            <feBlend mode="color" in="colormatrix1" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <g id="SMARTBLACK_SHAPE">
            <path
              d="M302.786,723.645c-11.452-11.05-18.8-25.778-23.438-41A145.865,145.865,0,0,1,363.2,505.32c18.39-7.595,39.728-12.415,51.393-28.532,9.64-13.319,10.048-31.025,15.783-46.434,1.952-5.245,4.716-10.458,9.307-13.658s11.377-3.783,15.569-.075c4.376,3.871,4.484,10.541,4.257,16.378l-3.133,80.488c-1.474,37.872-3,76.1-12.674,112.75s-28.312,72.089-58.367,95.18C358.364,742.141,329.617,749.536,302.786,723.645Z"
              fill={smartBlack}
            />
          </g>
          <g id="SMARTBLUE_SHAPE">
            <path
              d="M273.408,449.591c.617,9.681,1.621,19.546,5.6,28.392s11.46,16.629,20.952,18.629c16.245,3.422,30.943-10.512,39.446-24.77,15.994-26.819,22.021-58.346,35.053-86.722s37.108-55.575,68.3-57.066c18.217-.87,36.644,7.222,54.341,2.813,18.827-4.691,31.233-21.917,44.626-35.956A172.682,172.682,0,0,1,642.31,243.492c7.443-1.021,15.088-1.585,22-4.522s13.134-8.875,13.955-16.343c1.242-11.31-9.542-19.945-19.3-25.792C589.923,155.479,462.9,103.057,383.18,141.947c-58.143,28.365-76.776,106.547-93.346,163A420.093,420.093,0,0,0,273.408,449.591Z"
              fill={smartBlue}
            />
          </g>
          <g id="DARKGREEN_SHAPE">
            <path
              d="M736.28,162.094c-13.578,7.921-28,20.258-32.474,42.387-4.971,24.585,5.281,52.088,19.535,63.948s31.225,11.33,47.1,7.6c14.96-3.517,29.922-9.787,42.84-22.445s23.676-32.328,27.4-55.944c2.48-15.711,2.206-40.152-5.423-52.62-5.525-9.028-13.484-6.438-20.556-5.378C787.7,143.685,762.068,147.049,736.28,162.094Z"
              fill={darkGreen}
            />
          </g>
          <g id="SMARTGREEN_SHAPE">
            <path
              d="M539.95,413.048c-4.636,19.29-5.953,39.2-7.254,59l-6.5,98.862c-.779,11.846-1.394,24.462,4.427,34.809,7.826,13.915,25.7,19.708,41.524,17.578s30-10.667,43.159-19.7c39.729-27.262,74.86-60.645,108.647-95,21.819-22.183,43.341-45.073,59.351-71.754s26.29-57.711,23.7-88.719c-1.165-13.971-5.437-28.553-16.031-37.737-14.2-12.306-35.135-11.571-53.87-10.154-21.161,1.6-42.426,4.572-63.57,5.559-21.942,1.024-44.79-1.768-65.587,7.01C570.769,328.5,548.808,376.2,539.95,413.048Z"
              fill={smartGreen}
            />
          </g>
          <g id="LIGHTBLUE_SHAPE">
            <path
              d="M416.888,852.1c96.958-14.632,193.294-30.3,288.469-55.306,19.961-5.245,40.434-11.066,56.643-23.84,29.458-23.215,38.332-63.838,40.6-101.275.531-8.767.789-17.729-1.672-26.16s-8.083-16.371-16.277-19.534c-8.705-3.361-18.451-.88-27.44,1.626l-148.725,41.46c-24.9,6.942-50.681,14.341-70.286,31.194-19.514,16.776-32.153,42.294-55.75,52.566-26.24,11.421-55.216.354-82.188,6.944-27.734,6.776-44.913,36.151-62.933,56.384-8.088,9.08-16.75,21.01-12.206,32.289,2.734,6.785,9.8,11.042,16.993,12.392s14.587.27,21.822-.812Q390.441,856.065,416.888,852.1Z"
              fill={lightBlue}
            />
          </g>
          <path
            id="path"
            d="M780,489.176c0,132.548-107.452,240-240,240s-240-107.452-240-240,107.451-240,240-240S780,356.627,780,489.176Z"
            fill="none"
            stroke="transparent"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.559"
          />
          <circle
            ref={blurCircleRef}
            className="blur"
            cx="300.755"
            cy="487.015"
            r="80"
            fill={smartBlue}
          />
        </g>

        <g id="DOTS" ref={dotsContainerRef}>
          <circle cx="215.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="251.676" r="2.5" fill={smartBlack} />
          <circle cx="215.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="271.676" r="2.5" fill={smartBlack} />
          <circle cx="215.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="291.676" r="2.5" fill={smartBlack} />
          <circle cx="215.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="311.676" r="2.5" fill={smartBlack} />
          <circle cx="215.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="331.676" r="2.5" fill={smartBlack} />
          <circle cx="215.091" cy="351.676" r="2.5" fill={smartBlack} />
          <circle cx="235.091" cy="351.676" r="2.5" fill={smartBlack} />
          <circle cx="255.091" cy="351.676" r="2.5" fill={smartBlack} />
          <circle cx="275.091" cy="351.676" r="2.5" fill={smartBlack} />
          <circle cx="295.091" cy="351.676" r="2.5" fill={smartBlack} />
          <circle cx="315.091" cy="351.676" r="2.5" fill={smartBlack} />
        </g>

        <circle
          ref={outlineCircleRef}
          cx="710.15"
          cy="365.701"
          r="8.575"
          fill="none"
          stroke={smartBlack}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />

        <circle
          ref={plainCircleRef}
          cx="936.023"
          cy="385.701"
          r="8.575"
          fill={smartBlack}
        />

        <path
          ref={squigglingLineRef}
          d="M737.2,365.7c17.14,0,17.14,20,34.28,20s17.143-20,34.285-20,17.142,20,34.284,20,17.143-20,34.287-20,17.142,20,34.285,20,17.145-20,34.29-20,17.145,20,34.289,20"
          fill="none"
          stroke={smartBlack}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />

        <g id="TRIANGLE">
          <polygon
            ref={triangleRef}
            points="546.533 646.872 448.89 744.515 546.533 744.515 546.533 646.872"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </g>
        <g id="CUBE" ref={cubeRef}>
          <polygon
            points="815 688.116 760.845 656.951 760.845 594.316 815 625.482 815 688.116"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <polyline
            points="815 625.482 869.155 594.317 869.155 656.951 815 688.116"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <polyline
            points="760.845 594.316 815 562.644 869.155 594.317"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <line
            x1="760.845"
            y1="656.951"
            x2="763.438"
            y2="655.443"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <line
            x1="768.879"
            y1="652.282"
            x2="809.686"
            y2="628.57"
            fill="none"
            stroke-dasharray="6.293 6.293"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            stroke={smartBlack}
          />
          <polyline
            points="812.406 626.989 815 625.482 817.594 626.989"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <line
            x1="823.035"
            y1="630.151"
            x2="863.841"
            y2="653.863"
            fill="none"
            stroke-dasharray="6.293 6.293"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            stroke={smartBlack}
          />
          <line
            x1="866.562"
            y1="655.443"
            x2="869.155"
            y2="656.951"
            fill="none"
            stroke={smartBlack}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <line
            x1="815"
            y1="562.644"
            x2="815"
            y2="625.482"
            fill="none"
            stroke-dasharray="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            stroke={smartBlack}
          />
        </g>

        <g id="TEXTE">
          <text
            transform="translate(747.366 212.538)"
            font-size="14"
            fill="#fff"
            font-family="MyriadPro-Regular, Myriad Pro"
          >
            #00706e
          </text>
          <text
            transform="translate(395.678 257.819)"
            font-size="14"
            fill="#061212"
            font-family="MyriadPro-Regular, Myriad Pro"
          >
            #00efeb
          </text>
          <text
            transform="translate(605.97 751.195)"
            font-size="14"
            fill="#061212"
            font-family="MyriadPro-Regular, Myriad Pro"
          >
            #49f2ef
          </text>
          <text
            transform="translate(620.195 449.584)"
            font-size="14"
            fill="#061212"
            font-family="MyriadPro-Regular, Myriad Pro"
          >
            #00bcb9
          </text>
          <text
            transform="translate(334.491 637.228)"
            font-size="14"
            fill="#fff"
            font-family="MyriadPro-Regular, Myriad Pro"
          >
            #080f0f
          </text>
        </g>
      </svg>
      {/* <h1>MY COLOR PALETTE</h1> */}
    </>
  );
};

export default ColorPalette;
