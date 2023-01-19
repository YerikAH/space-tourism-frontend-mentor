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

export const DivTitle = styled.div``;
export const BStyle = styled.b`
  text-align: center;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font: normal normal 700 1rem/1.188rem var(--font-barlow-condensed);
  opacity: 0.25;
  color: var(--white);
  @media (min-width: 720px) {
    letter-spacing: 3.375px;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.75rem;
    line-height: 2.125rem;
    letter-spacing: 4.725px;
    text-align: left;
  }
`;
export const HeadlineSecond = styled.h2`
  text-align: center;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font: normal normal 400 1rem/1.188rem var(--font-barlow-condensed);
  color: var(--white);
  @media (min-width: 720px) {
    letter-spacing: 3.375px;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.75rem;
    line-height: 2.125rem;
    letter-spacing: 4.725px;
    text-align: left;
  }
`;

export const ImageRespon = styled.div`
  width: 10.625rem;
  height: 10.625rem;

  @media (min-width: 720px) {
    width: 18.75rem;
    height: 18.75rem;
  }
  @media (min-width: 1000px) {
    width: 27.813rem;
    height: 27.813rem;
  }
`;
export const ImagePlanet = styled.img`
  width: 100%;
  height: auto;
`;

export const TextBodyOne = styled.p`
  color: var(--purple-light);
  font: normal normal 400 0.938rem/1.563rem var(--font-barlow);
  text-align: center;
  width: 100%;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.75rem;
    max-width: 27.75rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: left;
    max-width: 35.813rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;
export const NavigationOptions = styled.button`
  letter-spacing: 2.3625px;
  font: normal normal 400 0.875rem/1.063rem var(--font-barlow-condensed);
  color: var(--white);
  background-color: transparent;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.188rem;
  }
`;

export const HeadlinePrincipal = styled.h1`
  text-align: center;
  color: var(--white);
  font: normal normal 400 3.5rem/4rem var(--font-bellefair);
  text-transform: uppercase;
  @media (min-width: 720px) {
    font-size: 9.375rem;
    line-height: 9.375rem;
  }
  @media (min-width: 1000px) {
    font-size: 9.375rem;
    line-height: 10.75rem;
  }
`;
export const Decoration = styled.div``;
export const DivBoxOne = styled.div``;
export const DivBoxTwo = styled.div``;
export const Subtitle = styled.h3`
  text-align: center;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  font: normal normal 400 0.875rem/1.063rem (--font-barlow-condensed);

  color: var(--purple-light);
`;

export const TextBodyTwo = styled.p`
  font: normal normal 400 1.75rem/2rem var(--font-bellefair);
  text-align: center;
  text-transform: uppercase;

  color: var(--white);
`;
