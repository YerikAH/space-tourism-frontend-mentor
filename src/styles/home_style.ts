import styled from "styled-components";
/* images */

import bgHomeDesktop from "../assets/home/background-home-desktop.jpg";
import bgHomeTablet from "../assets/home/background-home-tablet.jpg";
import bgHomeMobile from "../assets/home/background-home-mobile.jpg";

export const BgGround = styled.div`
  background: fixed url(${bgHomeMobile}) end/cover no-repeat;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  @media (min-width: 720px) {
    background-image: url(${bgHomeTablet});
  }
  @media (min-width: 1000px) {
    background-image: url(${bgHomeDesktop});
  }
`;
export const BgGroundSecond = styled.div``;

export const MainStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const SectionStyle = styled.section`
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
  }
`;

export const DivGridOne = styled.div``;
export const DivGridTwo = styled.div``;

export const HeadlinePrincipal = styled.h1`
  text-align: center;
  color: #ffffff;
  font: normal normal 400 5rem/6.25rem var(--font-bellefair);
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
export const HeadlineSecond = styled.h2`
  text-align: center;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font: normal normal 400 1rem/1.188rem var(--font-barlow-condensed);
  @media (min-width: 720px) {
    letter-spacing: 3.375px;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.75rem;
    line-height: 2.125rem;
    letter-spacing: 4.725px;
  }
`;

export const TextBodyOne = styled.p`
  color: var(--purple-light);
  font: normal normal 400 0.938rem/1.563rem var(--font-barlow);
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
  @media (min-width: 1000px) {
    font-size: 0.938rem;
    line-height: 2rem;
  }
`;

export const CircleStyleButton = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  background-color: var(--white);
  border-radius: 255px;
  text-align: center;
  letter-spacing: 1.25px;
  font: normal normal 400 1.25rem/1.438rem var(--font-bellefair);

  @media (min-width: 720px) {
    width: 15.125rem;
    height: 15.125rem;
    font-size: 2px;
    line-height: 2.313rem;
    letter-spacing: 2px;
  }
  @media (min-width: 1000px) {
    width: 17.125rem;
    height: 17.125rem;
  }
`;
