import styled from "styled-components";

/* images */
import bgDestinationDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgDestinationTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDestinationMobile from "../assets/crew/background-crew-mobile.jpg";

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
  @media (min-width: 720px) {
    margin-top: 2.5rem;
  }
  @media (min-width: 720px) {
    margin-top: 4.75rem;
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
`;
export const DivGridTwo = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 1.625rem;
  padding: 0 1.625rem;
  margin-bottom: 3.625rem;
  @media (min-width: 720px) {
    margin-top: 3.313rem;
  }
  @media (min-width: 1000px) {
    place-items: start;
  }
`;
export const DivStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2.375rem;
  @media (min-width: 720px) {
    justify-content: start;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  gap: 1.125rem;
  @media (min-width: 1000px) {
    gap: 1.75rem;
  }
`;

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
  margin-top: 2rem;
  overflow: hidden;
  @media (min-width: 720px) {
    width: 18.75rem;
    height: 18.75rem;
    margin-top: 3.75rem;
  }
  @media (min-width: 1000px) {
    width: 27.813rem;
    height: 27.813rem;
    margin-top: 4.188rem;
  }
`;
export const ImageCrew = styled.img`
  width: 100%;
  height: auto;
`;

export const TextBodyOne = styled.p`
  color: var(--purple-light);
  font: normal normal 400 0.938rem/1.563rem var(--font-barlow);
  text-align: center;
  width: 100%;
  margin-top: 0.75rem;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.75rem;
    max-width: 35.813rem;
    margin-top: 0.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: left;
    max-width: 27.75rem;
  }
`;
