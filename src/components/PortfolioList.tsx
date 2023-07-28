import styled from "styled-components";
import { getPortfolio } from "../services/portfolioService";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function PortfolioList(): JSX.Element {
  const portfolio = getPortfolio();

  const [openModalId, setOpenModalId] = useState<null | number>(null);

  const onOpenModal = (id: number) => setOpenModalId(id);
  const onCloseModal = () => setOpenModalId(null);

  return (
    <ImagesContainer>
      {portfolio.map((p) => {
        return (
          <ImageBox
            key={p.id}
            onClick={() => {
              if (openModalId !== p.id) onOpenModal(p.id);
            }}
          >
            <Modal open={openModalId === p.id} onClose={onCloseModal} center>
              <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                {p.images.map((imageUrl, index) => (
                  <div key={index}>
                    <PortfolioImageArray src={imageUrl} alt="Portfolio" />
                  </div>
                ))}
              </Carousel>
            </Modal>
            <PortfolioImage src={p.cover} alt={p.title} />
            <Content>
              <Title>{p.title}</Title>
              <Description>{p.description}</Description>
              <Button onClick={() => window.open(p.url)}>Github Link</Button>
            </Content>
          </ImageBox>
        );
      })}
    </ImagesContainer>
  );
}

export default PortfolioList;

const ImagesContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 100px;
  width: 1100px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    display: block;
  }
`;

const PortfolioImageArray = styled.img`
  object-fit: contain;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  padding: 10px 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 1));
  bottom: -70px;
`;

const ImageBox = styled.div`
  position: relative;
  flex: 1 1;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  max-width: calc(100% - 10px);
  margin-top: 16px;

  &:after {
    content: "";
    background: linear-gradient(180deg, #03215584, #000);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 2;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.85;
  }

  &:hover {
    ${Content} {
      bottom: 0;
      background: transparent;
    }
  }
`;

const PortfolioImage = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: fill;

  @media screen and (max-width: 1200px) {
    object-fit: contain;
  }
`;

const Title = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  color: #fff;
  font-size: 16px !important;
  line-height: 24px;
`;

const Description = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: 700;
`;

const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 0 23px;
  height: 40px;
  line-height: 34px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: transparent;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
    background: var(--primary-color);
  }
`;
