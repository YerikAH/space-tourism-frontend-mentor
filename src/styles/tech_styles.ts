import styled from "styled-components";
/* images */

import bgDestinationDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgDestinationTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDestinationMobile from "../assets/technology/background-technology-mobile.jpg";

export const BgGround = styled.div`
  background: fixed url(${bgDestinationMobile}) center/cover no-repeat;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  @media (min-width: 720px) {
    background-image: url(${bgDestinationTablet});
  }
  @media (min-width: 1000px) {
    background-image: url(${bgDestinationDesktop});
  }
  z-index: -1;
`;
