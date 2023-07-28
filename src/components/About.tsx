import styled from "styled-components";
import AnimatedLetters from "./AnimatedLetters";
import { useEffect, useState } from "react";
import { SiMongodb } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiTypescript, SiCss3 } from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";
import Loader from "react-loaders";
import { CommonContainer, TextZone } from "./styles/CommonStyles";

function About(): JSX.Element {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Container>
        <Text>
          <h1>
            <AnimatedLetters
              strArray={"About me".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm an unwaveringly persistent full-stack developer, eager to make
            my mark in a renowned IT company. I thrive on unraveling complex
            projects with the most advanced technologies available.
          </p>
          <p>
            My quiet confidence and inherent curiosity are matched only by my
            relentless determination when addressing challenges. I have an
            innate ability to absorb information rapidly, constantly expanding
            my skill set, one design solution at a time.
          </p>
          <p>
            If I had to encapsulate who I am in one sentence, it would be: a
            family-oriented man, a loving father to a wonderful daughter, a
            steadfast companion to our dog and cat, a passionate gamer, a
            culinary enthusiast, stubbornly resolute in problem-solving, a swift
            learner, and undeniably tech-obsessed!
          </p>
        </Text>
        <StageCubeCont>
          <CubeSpinner>
            <Face1>
              <FaReact size={150} color="#61DBFB" />
            </Face1>
            <Face2>
              <FaHtml5 size={150} color="#F06529" />
            </Face2>
            <Face3>
              <SiCss3 size={150} color="#28A4D9" />
            </Face3>
            <Face4>
              <SiMongodb size={150} color="#589636" />
            </Face4>
            <Face5>
              <BsGit size={150} color="#F1502F" />
            </Face5>
            <Face6>
              <SiTypescript size={150} color="#007acc" />
            </Face6>
          </CubeSpinner>
        </StageCubeCont>
      </Container>
      <Loader type="pacman" active />
    </>
  );
}

export default About;

const Container = styled(CommonContainer)``;

const Text = styled(TextZone)`
  z-index: 1;

  @media screen and (max-width: 1200px) {
    position: initial;
    transform: none;
    width: 100%;
    display: block;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 8px;

    h1 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

const StageCubeCont = styled.div`
  width: 50%;
  height: 100%;
  top: 30%;
  padding-top: 18px;
  margin-left: 0;
  position: absolute;
  right: 0;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    position: initial;
    width: 100%;
    height: 0%;
    overflow: visible;
  }
`;

const CubeSpinner = styled.div`
  animation-name: spincube;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);

  div {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.4);
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0px lightyellow;
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateZ(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`;

const Face1 = styled.div`
  transform: translateZ(100px);
`;

const Face2 = styled.div`
  transform: rotateY(90deg) translateZ(100px);
`;

const Face3 = styled.div`
  transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
`;

const Face4 = styled.div`
  transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
`;

const Face5 = styled.div`
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
`;

const Face6 = styled.div`
  transform: rotateX(-90deg) translateZ(100px);
`;
