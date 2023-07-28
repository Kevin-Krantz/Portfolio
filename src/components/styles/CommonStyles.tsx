import styled from "styled-components";

const generateAnimationDelays = () => {
  let styles = "";
  for (let i = 1; i <= 50; i++) {
    styles += `
        .text-animate._${i} {
          animation-delay: ${i * 0.1}s;
        }
      `;
  }
  return styles;
};

export const CommonContainer = styled.div`
  width: 100%;
  will-change: contents;
  height: 90%;
  min-height: 566px;
  position: absolute;
  opacity: 0;
  top: 5%;
  margin: 0 auto;
  z-index: 1;
  transform-style: preserve-3d;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;

  @media screen and (max-width: 1200px) {
    /* position: initial;
    height: auto;
    min-height: auto; */
  }
`;

export const TextZone = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  vertical-align: middle;
  display: table-cell;
  max-height: 90%;

  h1 {
    font-size: 53px;
    font-family: "Coolvetica";
    color: var(--primary-color);
    font-weight: 400;
    margin-top: 0;
    position: relative;
    margin-bottom: 14px;
    left: 10px;
    z-index: 1;
    cursor: default;

    &::before {
      z-index: 1;
      content: "<h1>";
      font-family: "La Belle Aurore";
      font-size: 15px;
      position: absolute;
      margin-top: -10px;
      left: -10px;
      opacity: 0.6;
      line-height: 18px;
    }

    &::after {
      content: "<h1/>";
      font-family: "La Belle Aurore";
      font-size: 18px;
      line-height: 18px;
      position: absolute;
      left: -30px;
      bottom: -20px;
      margin-left: 20px;
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1200px) {
    h1::before,
    h1::after {
      display: none;
    }
  }

  p {
    font-size: 13px;
    color: #fff;
    font-family: sans-serif;
    font-weight: 300;
    min-width: fit-content;
    animation: pulse 1s;
    margin-top: 24px;

    &:nth-of-type(1) {
      animation-delay: 1.1s;
    }

    &:nth-of-type(2) {
      animation-delay: 1.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 1.3s;
    }
  }

  .text-animate {
    display: inline-block;
    opacity: 0;
    animation: bounceIn 1s 1s;
    animation-fill-mode: forwards;
    min-width: 10px;
  }
  ${generateAnimationDelays()}

  .text-animate-hover {
    min-width: 10px;
    display: inline-block;
    animation-fill-mode: both;

    &:hover {
      animation: rubberBand 1s;
      color: #fff;
    }
  }
`;
