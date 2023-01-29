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
export const MainStyle = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 0 2rem;
  @media (min-width: 720px) {
    margin-top: 2.5rem;
  }
  @media (min-width: 1000px) {
    margin-top: 3.875rem;
  }
`;
export const SectionStyle = styled.section`
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
  }
`;
export const DivGridOne = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    height: 100%;
    place-items: start;
    place-content: start;
    padding: 0 2.375rem;
  }
`;
export const DivGridTwo = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  @media (min-width: 720px) {
    margin-top: 3.313rem;
    margin-bottom: 0rem;
  }
  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;
