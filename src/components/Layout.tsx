import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <App>
      <Sidebar />
      <Page>
        <TopTags>&lt;html&gt;</TopTags>
        <TopTags>&lt;body&gt;</TopTags>
        <Outlet />
        <BottomTags>
          &lt;/body&gt;
          <br />
          <BottomTagHtml>&lt;/html&gt;</BottomTagHtml>
        </BottomTags>
      </Page>
    </App>
  );
}

export default Layout;

const App = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 1200px) {
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    position: absolute;
  }
`;

const Tags = styled.span`
  color: var(--primary-color);
  opacity: 0.6;
  position: absolute;
  left: 120px;
  font-size: 15px;
  font-family: "La Belle Aurore", cursive;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const TopTags = styled(Tags)`
  margin-top: 8px;
  :nth-child(1) {
    margin-left: -24px;
  }

  :nth-child(2) {
    margin-top: 32px;
  }
`;

const BottomTags = styled(Tags)`
  bottom: 0;
`;

const BottomTagHtml = styled.span`
  margin-left: -20px;
`;
