import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Sidebar(): JSX.Element {
  return (
    <Navbar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src="/images/logo_k.png" alt="logo" />
        <NameText>Kevin</NameText>
      </Link>
      <Nav>
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          end
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          end
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          end
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
      </Nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kevin-krantz-0a727424a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kevin-Krantz"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </Navbar>
  );
}

export default Sidebar;

const Navbar = styled.div`
  background: #181818;
  width: 60px;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  min-height: 500px;

  img {
    display: block;
    margin: 8px auto;
    width: 60px;
    height: auto;
  }

  img:nth-child(2) {
    width: 50px;
  }

  ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;

    li {
      a {
        padding: 7px 0;
        display: block;
        font-size: 16px;
        line-height: 16px;

        &:hover svg {
          color: var(--primary-color);
        }
      }
    }
  }
`;

const NameText = styled.p`
  font-weight: 900;
  font-size: 18px;
  margin-left: 2px;
  color: #fffffa91;
`;

const Logo = styled.img`
  display: block;
  padding: 8px 0;
`;

const Nav = styled.nav`
  display: block;
  text-align: center;
  position: absolute;
  height: 210px;
  top: 50%;
  margin-top: -120px;
  width: 100%;

  a {
    font-size: 22px;
    color: #4d4d4e;
    display: block;
    line-height: 51px;
    height: 51px;
    position: relative;
    text-decoration: none;

    i {
      transition: all 0.3s ease-out;
    }
    &:hover {
      color: var(--primary-color);

      svg {
        opacity: 0;
      }

      &:after {
        opacity: 1;
      }
    }

    &:after {
      content: "";
      font-size: 9px;
      letter-spacing: 2px;
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 0.3s ease-out;
    }

    &:first-child {
      &:after {
        content: "HOME";
      }
    }
  }

  a:nth-child(2) {
    &:after {
      content: "ABOUT";
    }
  }

  a:nth-child(3) {
    &:after {
      content: "CONTACT";
    }
  }

  a:nth-child(4) {
    &:after {
      content: "MY WORK";
    }
  }

  a.active {
    svg {
      color: var(--primary-color);
    }
  }
`;
