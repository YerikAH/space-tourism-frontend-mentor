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
export const DivStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2.375rem;
  @media (min-width: 720px) {
    justify-content: start;
  }
  @media (min-width: 1000px) {
    padding: 0;
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
  width: 100%; 
  margin: 2rem 0; 
  max-height: 14.938rem;
  height: 100%;
  display: ${(props) => (props.className === "mobile" ? "block" : "none")};
  border-bottom: 1px solid var(--black);
  @media (min-width: 720px) {
    width: 28.523rem;
    max-height: 35.75rem;
    margin-top: 3.75rem;
    display: ${(props) => (props.className === "mobile" ? "none" : "block")};
    border: none;
    margin-bottom: 0;
  }
  @media (min-width: 1000px) {
    margin-top: 0;
    width: 35.5rem;
    height: 44.5rem;
    max-width: none;
    max-height: none;
  }
`;

export const ImageCrew = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextBodyOne = styled.p`
  color: var(--purple-light);
  font: normal normal 400 0.938rem/1.563rem var(--font-barlow);
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  display: ${(props) => (props.className === "mobile" ? "block" : "none")};
  @media (min-width: 720px) {
    display: ${(props) => (props.className === "mobile" ? "none" : "block")};
    font-size: 1rem;
    line-height: 1.75rem;
    max-width: 28.625rem;
    margin-top: 0.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: left;
    max-width: 27.75rem;
    margin-top: 1.688rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  @media (min-width: 720px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  @media (min-width: 1000px) {
    margin-top: 7.5rem;
  }
`;
export const NavigationOptions = styled.button`
  background: var(--white);
  mix-blend-mode: normal;
  opacity: ${(props) => (props.className === "true" ? "1" : "0.17")};
  border-radius: 255px;
  width: 0.625rem;
  height: 0.625rem;
  @media (min-width: 720px) {
    width: 0.938rem;
    height: 0.938rem;
  }
`;

export const HeadlinePrincipal = styled.h2`
  font: normal normal 400 1.5rem/1.75rem var(--font-bellefair);
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 0.5rem;
  display: ${(props) => (props.className === "mobile" ? "block" : "none")};
  @media (min-width: 720px) {
    display: ${(props) => (props.className === "mobile" ? "none" : "block")};

    font-size: 2.5rem;
    line-height: 2.875rem;
  }
  @media (min-width: 1000px) {
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: left;
  }
`;
export const SubtitleOne = styled.h3`
  font: normal normal 400 1rem/1.2rem var(--font-bellefair);
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  display: ${(props) => (props.className === "mobile" ? "block" : "none")};
  @media (min-width: 720px) {
    display: ${(props) => (props.className === "mobile" ? "none" : "block")};
    font-size: 1.5rem;
    margin-top: 3.75rem;
  }
  @media (min-width: 1000px) {
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: left;
    margin-top: 9.625rem;
  }
`;
