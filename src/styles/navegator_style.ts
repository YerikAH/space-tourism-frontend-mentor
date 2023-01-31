import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
`;
export const NavegatorStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1000px) {
    padding-top: 2.5rem;
  }
`;
export const UlStyle = styled.ul`
  display: ${(props) => props.className === "desktop-menu" && "none"};
  position: relative;
  z-index: 5;
  @media (min-width: 720px) {
    display: flex;
    gap: 37px;
    padding: ${(props) => props.className === "desktop-menu" && "2.32rem 3rem"};
    background-color: ${(props) =>
      props.className === "desktop-menu" && "var(--white-transparent) "};
    backdrop-filter: ${(props) =>
      props.className === "desktop-menu" && "blur(40.7742px)"};
  }
  @media (min-width: 1000px) {
    gap: 50px;
    padding: ${(props) =>
      props.className === "desktop-menu" &&
      "2.438rem 10.313rem 2.438rem 7.688rem"};
  }
`;
export const Decoration = styled.div`
  display: none;
  background: var(--white);
  mix-blend-mode: normal;
  opacity: 0.25;
  width: 100%;
  height: 1px;
  position: relative;
  left: 30px;
  z-index: 100;
  @media (min-width: 1000px) {
    display: block;
  }
`;
export const LiStyle = styled.li`
  .Link {
    display: flex;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      transform: ${(props) =>
        props.className === "true" ? "scale(1)" : "scaleX(0)"};
      background-color: var(--white);
      opacity: ${(props) => props.className === "false" && "0.5"};
      bottom: -2.32rem;
      transition: 0.3s;
      position: absolute;
    }
    &:hover::after {
      transform: scale(1);
    }
    @media (min-width: 1000px) {
      &::after {
        bottom: -2.438rem;
      }
    }
  }
`;
export const BStyle = styled.b`
  display: none;
  font: normal normal 700 1rem/1.188rem var(--font-barlow-condensed);
  letter-spacing: 2.7px;
  color: var(--white);
  margin-right: 11px;
  @media (min-width: 1000px) {
    display: block;
  }
`;
export const SpanStyle = styled.span`
  letter-spacing: 2.3625px;
  font: normal normal 400 0.875rem/1.063rem var(--font-barlow-condensed);
  color: var(--white);
  @media (min-width: 1000px) {
    font-size: 1rem;
    line-height: 1.188rem;
    letter-spacing: 2.7px;
  }
`;
export const LogoStyle = styled.img`
  margin-left: 1.5rem;
  @media (min-width: 1000px) {
    margin: 0 3.438rem 0 2.438rem;
  }
`;

export const HamStyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 2.063rem 1.5rem;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const HamStyle = styled.img``;
