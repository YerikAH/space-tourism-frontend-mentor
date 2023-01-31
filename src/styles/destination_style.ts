import styled from "styled-components";
/* images */
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";

/* global css */
import {
  bgGlobal,
  bStyleGlobal,
  divGridOneGlobal,
  divStartGlobal,
  divTitleGlobal,
  headlinePrincipalGlobal,
  headlineSecondGlobal,
  mainGlobal,
  sectionGlobal,
} from "./global";

export const BgGround = styled.div`
  ${bgGlobal}
  background: fixed url(${bgMobile}) center/cover no-repeat;
  @media (min-width: 720px) {
    background-image: url(${bgTablet});
  }
  @media (min-width: 1000px) {
    background-image: url(${bgDesktop});
  }
`;
export const MainStyle = styled.main`
  ${mainGlobal}
  @media (min-width: 720px) {
    margin-top: 2.5rem;
  }
  @media (min-width: 1000px) {
    margin-top: 4.75rem;
  }
`;
export const SectionStyle = styled.section`
  ${sectionGlobal}
`;
export const DivGridOne = styled.div`
  ${divGridOneGlobal}
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
  ${divStartGlobal}
`;
export const DivTitle = styled.div`
  ${divTitleGlobal}
`;
export const BStyle = styled.b`
  ${bStyleGlobal}
`;
export const HeadlineSecond = styled.h2`
  ${headlineSecondGlobal}
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
export const ImagePlanet = styled.img`
  width: 100%;
  height: auto;
  animation: planet 300s linear 0s infinite;
  @keyframes planet {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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

export const Navigation = styled.nav`
  display: flex;
  gap: 1.625rem;
  @media (min-width: 720px) {
    gap: 2.25;
  }
`;
export const NavigationOptions = styled.button`
  letter-spacing: 2.3625px;
  font: normal normal 400 0.875rem/1.063rem var(--font-barlow-condensed);
  color: ${(props) =>
    props.className === "true" ? "var(--white)" : "var(--purple-light)"};
  background-color: transparent;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    transform: ${(props) =>
      props.className === "true" ? "scale(1)" : "scaleX(0)"};
    background-color: var(--white);
    opacity: ${(props) => props.className === "false" && "0.5"};
    bottom: -8px;
    transition: 0.3s;
    position: absolute;
    left: 0;
  }
  &:hover::after {
    transform: scale(1);
  }
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.188rem;
    &::after {
      bottom: -12px;
    }
  }
`;

export const HeadlinePrincipal = styled.h1`
  ${headlinePrincipalGlobal}
  color: var(--white);
  margin-top: 1.25rem;
  font-size: 3.5rem;
  line-height: 64.18px;
  @media (min-width: 720px) {
    font-size: 5rem;
    line-height: 5.75rem;
    margin-top: 2rem;
  }
  @media (min-width: 1000px) {
    font-size: 9.375rem;
    line-height: 10.75rem;
  }
`;
export const Decoration = styled.div`
  margin: 2rem 0;
  height: 1px;
  width: 100%;
  background-color: var(--black);
  max-width: 35.813rem; ;
`;
export const DivBoxOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  @media (min-width: 720px) {
    flex-direction: row;
    width: 100%;
    gap: 6rem;
  }
  @media (min-width: 1000px) {
    justify-content: start;
  }
`;
export const DivBoxTwo = styled.div``;
export const Subtitle = styled.h3`
  text-align: center;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  font: normal normal 400 0.875rem/1.063rem var(--font-barlow-condensed);
  color: var(--purple-light);
  @media (min-width: 720px) {
    text-align: left;
  }
  @media (min-width: 1000px) {
    text-align: left;
  }
`;

export const TextBodyTwo = styled.p`
  font: normal normal 400 1.75rem/2rem var(--font-bellefair);
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  @media (min-width: 720px) {
    margin-top: 0.75rem;
    text-align: left;
  }
  @media (min-width: 1000px) {
    text-align: left;
  }
`;
