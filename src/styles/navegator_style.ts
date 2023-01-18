import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
`;
export const NavegatorStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;
`;
export const UlStyle = styled.ul`
  display: ${(props) => props.className === "desktop-menu" && "none"};
  @media (min-width: 720px) {
    display: flex;
    gap: 37px;
  }
  @media (min-width: 1000px) {
    gap: 50px;
  }
`;
export const Decoration = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;
export const LiStyle = styled.li``;
export const AStyle = styled.a`
  display: flex;
`;
export const BStyle = styled.b`
  display: none;
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
export const LogoStyle = styled.img``;

export const HamStyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const HamStyle = styled.img``;
