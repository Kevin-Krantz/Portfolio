import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import styled from "styled-components";
import AnimatedLetters from "./AnimatedLetters";
import { CommonContainer, TextZone } from "../components/styles/CommonStyles";
import emailJs from "@emailjs/browser";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

function Contact(): JSX.Element {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (refForm.current) {
      emailJs
        .sendForm(
          "service_caihj3r",
          "template_zepr00t",
          refForm.current,
          "OYgYizYcRFpgeAlDU"
        )
        .then(
          (result) => {
            alert("Message successfully sent!");
            window.location.reload();
            console.log(result);
          },
          (error) => {
            alert("Failed to send the message, please try again");
            console.log(error);
          }
        );
    }
  };

  return (
    <>
      <Container>
        <Text>
          <h1>
            <AnimatedLetters
              strArray={"Contact me".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <ContactForm>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <HalfLi>
                  <input type="text" name="name" placeholder="Name" required />
                </HalfLi>
                <HalfLi>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </HalfLi>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <FlatButton type="submit" value="SEND" />
                </li>
              </ul>
            </form>
          </ContactForm>
        </Text>
        <InfoMap>
          Kevin Krantz,
          <br />
          Sverige,
          <br />
          Huskvarna, <br />
          Jönköping <br />
          <span>kevinkrantz95@hotmail.com</span>
        </InfoMap>
        <MapWrap>
          <MapContainer center={[57.790908, 14.274855]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[57.790908, 14.274855]}>
              <Popup>Kevin bor här!</Popup>
            </Marker>
          </MapContainer>
        </MapWrap>
      </Container>
      <Loader type="pacman" active />
    </>
  );
}

export default Contact;

const Container = styled(CommonContainer)`
  margin-top: 16px;
`;

const Text = styled(TextZone)``;

const InfoMap = styled.div`
  position: absolute;
  background-color: #171612;
  border-radius: 8px;
  top: 80px;
  right: 35%;
  z-index: 999999;
  width: 200px;
  padding: 20px;
  color: #fff;
  font-family: "Helvetica";
  font-size: 17px;
  font-weight: 300;
  opacity: 0;
  animation: fadeIn 1s 1.5s;
  animation-fill-mode: forwards;

  span {
    font-size: 16px;
    display: block;
    padding-top: 20px;
    color: var(--primary-color);
  }
`;

const MapWrap = styled.div`
  background: rgba(8, 253, 216, 0.1);
  float: right;
  width: 53%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    animation: backInRight 1s 1.2s;
    animation-fill-mode: forwards;
  }
`;

const ContactForm = styled.div`
  width: 100%;
  margin-top: 20px;

  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
      list-style: none;
      margin-bottom: 10px;
      overflow: hidden;
      display: block;
      position: relative;
      opacity: 0;
      animation: fadeInUp 2s 2s;
      animation-fill-mode: forwards;
      clear: both;
    }
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    border: 0;
    background: #115173;
    height: 40px;
    font-size: 16px;
    color: #fff;
    padding: 0 20px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid var(--primary-color);
      outline: 1px solid var(--primary-color);
    }
  }

  textarea {
    width: 100%;
    border: 0;
    background: #115173;
    height: 24px;
    font-size: 16px;
    color: #fff;
    padding: 20px;
    min-height: 120px;
    box-sizing: border-box;
    resize: none;

    &:focus {
      border: 1px solid var(--primary-color);
      outline: 1px solid var(--primary-color);
    }
  }
`;

const HalfLi = styled.li`
  width: 49%;
  margin-left: 2%;
  float: left;
  clear: none;

  &:first-child {
    margin-left: 0;
  }
`;

const FlatButton = styled.input`
  color: var(--primary-color);
  background: 0 0;
  font-size: 11px;
  letter-spacing: 3px;
  text-decoration: none;
  padding: 8px 10px;
  border: 1px solid var(--primary-color);
  float: right;
  border-radius: 4px;
  transition: all 0.3s ease;

  :hover {
    background-color: var(--primary-color);
    color: #fff;
  }

  :active {
    color: #000;
  }
`;
