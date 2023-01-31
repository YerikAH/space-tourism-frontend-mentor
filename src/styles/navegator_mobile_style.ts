import styled from "styled-components";

export const MenuMobile = styled.nav`
  display: flex;
  justify-content: end;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const MenuList = styled.ul`
  height: inherit;
  width: 15.875rem;
  display: flex;
  flex-direction: column;
  background: var(--white-transparent);
  backdrop-filter: blur(40.7742px);
`;
export const MenuDivOne = styled.div``;
export const MenuDivTwo = styled.div`
  gap: 2rem;
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
`;
export const List = styled.li`
  .Link {
    display: flex;
    gap: 11px;
  }
`;
export const BStyle = styled.b`
  font: normal normal 700 1rem/1.25rem var(--font-barlow-condensed);
  letter-spacing: 2.7px;
  color: var(--white);
`;
export const SpanStyle = styled.span`
  font: normal normal 400 1rem/1.25rem var(--font-barlow-condensed);
  letter-spacing: 2.7px;
  color: var(--white);
`;
