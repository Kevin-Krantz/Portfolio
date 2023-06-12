import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedLetters from "./AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";
import { CommonContainer } from "./styles/CommonStyles";

const NAME_ARRAY = "evin".split("");
const JOB_ARRAY = "Fullstack  Developer".split("");

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

function Home(): JSX.Element {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Container>
        <TextZone>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <img src="/images/logo_kk.png" alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={NAME_ARRAY}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JOB_ARRAY}
              idx={20}
            />
          </h1>
          <h2>Full-Stack Developer</h2>
          <Link to="/contact">CONTACT ME</Link>
        </TextZone>
        <Logo />
      </Container>
      <Loader type="pacman" active />
    </>
  );
}

export default Home;

const Container = styled(CommonContainer)`
  h1 {
    color: #ffff;
    font-size: 53px;
    margin: 0;
    font-family: "Coolvetica";
    font-weight: 400;
    cursor: default;

    &::before {
      content: "<h1>";
      font-family: "La Belle Aurore";
      color: var(--primary-color);
      font-size: 15px;
      position: absolute;
      margin-top: -40px;
      left: 15px;
      opacity: 0.6;
    }

    &::after {
      content: "</h1>";
      font-family: "La Belle Aurore";
      color: var(--primary-color);
      font-size: 18px;
      position: absolute;
      margin-top: 18px;
      margin-left: 20px;
      animation: fadeIn 1s 1.7s backwards;
      opacity: 0.6;
    }

    img {
      position: relative;
      z-index: -1;
      width: 80px;
      margin-right: -16px;
      opacity: 0;
      height: auto;
      animation: rotateIn 1s linear both;
      animation-delay: 1.4s;
      vertical-align: -8px;
    }
  }

  h2 {
    color: #8d8d8d;
    margin-top: 20px;
    font-weight: 400;
    font-size: 11px;
    font-family: sans-serif;
    letter-spacing: 3px;
    animation: fadeIn 1s 1.8s backwards;
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
      color: var(--primary-color);
    }
  }
`;

const TextZone = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-height: 90%;

  a {
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 4px;
    font-family: sans-serif;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid var(--primary-color);
    margin-top: 25px;
    float: left;
    animation: fadeIn 1s 1.8s backwards;
    white-space: nowrap;

    &:hover {
      background: var(--primary-color);
      color: #333;
    }
  }
`;
