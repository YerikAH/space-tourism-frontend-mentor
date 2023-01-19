import styled from "styled-components";
/* images */

import bgDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgDestinationTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDestinationMobile from "../assets/destination/background-destination-mobile.jpg";

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

export const MainStyle = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;
export const SectionStyle = styled.section``;
export const DivGridOne = styled.div``;
export const DivGridTwo = styled.div``;
