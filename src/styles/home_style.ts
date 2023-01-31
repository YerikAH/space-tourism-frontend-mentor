import styled from "styled-components";

/* images */
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";

/* global css */
import {
  bgGlobal,
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
  ${sectionGlobal}
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
  .Link {
    width: 9.375rem;
    height: 9.375rem;
    background-color: var(--white);
    border-radius: 255px;
    color: var(--blue-dark);
    letter-spacing: 1.25px;
    transition: 0.3s;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;

export const HeadlinePrincipal = styled.h1`
  ${headlinePrincipalGlobal}
  color: var(--white);
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
  ${headlineSecondGlobal}
  color: var(--purple-light);
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
