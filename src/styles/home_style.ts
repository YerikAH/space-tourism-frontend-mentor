import styled from "styled-components";

/* images */
import bgHomeDesktop from "../assets/home/background-home-desktop.jpg";
import bgHomeTablet from "../assets/home/background-home-tablet.jpg";
import bgHomeMobile from "../assets/home/background-home-mobile.jpg";

export const BgGround = styled.div`
  background: fixed url(${bgHomeMobile}) center/cover no-repeat;
  position: fixed;
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
  z-index: -1;
`;

export const MainStyle = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  padding: 0 1.5rem;
  @media (min-width: 720px) {
    margin-top: 6.625rem;
  }
  @media (min-width: 1000px) {
    margin-top: 15.688rem;
    margin-bottom: 8.188rem;
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
  display: grid;
  gap: 1rem;
  @media (min-width: 720px) {
    gap: 1.5rem;
  }
`;
export const DivGridTwo = styled.div`
  margin-top: 5.063rem;
  margin-bottom: 3rem;
  @media (min-width: 720px) {
    margin-top: 9.75rem;
    margin-bottom: 5.625rem;
  }
  @media (min-width: 1000px) {
    margin-top: 6rem;
    margin-left: 6rem;
    margin-bottom: 0rem;
  }
`;

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
  color: var(--purple-light);
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

export const TextBodyOne = styled.p`
  color: var(--purple-light);
  font: normal normal 400 0.938rem/1.563rem var(--font-barlow);
  text-align: center;
  width: 100%;
  max-width: 27.75rem;
  @media (min-width: 720px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
  @media (min-width: 1000px) {
    font-size: 0.938rem;
    line-height: 2rem;
    text-align: left;
  }
`;

export const CircleStyleButton = styled.button`
  width: 9.375rem;
  height: 9.375rem;
  background-color: var(--white);
  border-radius: 255px;
  text-align: center;
  letter-spacing: 1.25px;
  transition: 0.3s;
  text-transform: uppercase;
  font: normal normal 400 1.25rem/1.438rem var(--font-bellefair);
  &:hover {
    box-shadow: 0px 0px 0px 80px var(--white-transparent-pale);
  }
  @media (min-width: 720px) {
    width: 15.125rem;
    height: 15.125rem;
    font-size: 2rem;
    line-height: 2.313rem;
    letter-spacing: 2px;
    &:hover {
      box-shadow: 0px 0px 0px 120px var(--white-transparent-pale);
    }
  }
  @media (min-width: 1000px) {
    width: 17.125rem;
    height: 17.125rem;
    &:hover {
      box-shadow: 0px 0px 0px 150px var(--white-transparent-pale);
    }
  }
`;
