import { useEffect, useState } from "react";
import Loader from "react-loaders";
import styled from "styled-components";
import AnimatedLetters from "./AnimatedLetters";
import { CommonContainer, TextZone } from "./styles/CommonStyles";
import PortfolioList from "./PortfolioList";

function Portfolio(): JSX.Element {
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
        <ContainerPortfolioPage>
          <PageTitle>
            <AnimatedLetters
              strArray={"Portfolio".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </PageTitle>
          <PortfolioList />
        </ContainerPortfolioPage>
      </Container>
      <Loader type="pacman" active />
    </>
  );
}

export default Portfolio;

const Container = styled(CommonContainer)``;

const ContainerPortfolioPage = styled(TextZone)`
  margin-top: 40px;
`;

const PageTitle = styled.h1``;
