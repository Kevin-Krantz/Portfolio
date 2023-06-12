import styled from "styled-components";
import { useEffect, useRef } from "react";
import anime from "animejs";

function Logo(): JSX.Element {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const outlineLogoRef = useRef<SVGPathElement | null>(null);
  const solidLogoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    anime({
      targets: bgRef.current,
      opacity: [0, 1],
      duration: 1000,
      easing: "linear",
    });

    anime({
      targets: outlineLogoRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 5000,
      easing: "linear",
      delay: 1500,
      begin: function () {
        if (outlineLogoRef.current) {
          outlineLogoRef.current.style.stroke = "var(--primary-color)";
          outlineLogoRef.current.style.strokeWidth = "0.5px";
        }
      },
    });

    anime({
      targets: solidLogoRef.current,
      opacity: [1],
      duration: 4000,
      delay: 4000,
      easing: "linear",
    });
  }, []);

  return (
    <LogoContainer ref={bgRef}>
      <SolidLogoImage src="/images/logo_k.png" alt="k" ref={solidLogoRef} />
      <svg viewBox="0 0 660 493" xmlns="http://www.w3.org/2000/svg">
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            d="M262.8,233.1l-62,60V66h62V233.1z M427.2,352.8l-82.8-115L469.1,66h-22L200.8,305.4V427h62V252.5l112.7,171.7
	L427.2,352.8z M431.8,66h-58.3L266.4,229.8L431.8,66z M385.5,427H480l-47.3-69.9L385.5,427z M194.8,66H180v361h14.8V66z"
          />
        </g>
      </svg>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  z-index: -1;
  width: 550px;
  height: 635px;
  position: absolute;
  top: 0;
  right: 5%;
  bottom: 0;
  left: auto;
  margin: auto;

  svg {
    position: absolute;
    left: -100px;
    top: -0px;
    width: 140%;
    height: auto;
    bottom: 0;
    transform: rotateZ(30deg) !important;
  }

  .svg-container {
    stroke: var(--primary-color);
    stroke-width: 0.5px;
  }

  @media screen and (min-width: 1920px) {
    width: 900px;
    bottom: 300px;
  }
`;

const SolidLogoImage = styled.img`
  position: absolute;
  left: -100px;
  margin: auto;
  width: 140%;
  height: auto;
  opacity: 0;
  transform: rotateZ(30deg) !important;
  z-index: -1;
`;
