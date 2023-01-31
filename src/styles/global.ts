import { css } from "styled-components";

export const bgGlobal = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const mainGlobal = css`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;
export const sectionGlobal = css`
  display: grid;
  place-items: center;
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
  }
`;
export const divGridOneGlobal = css`
  width: 100%;
  display: grid;
  place-items: center;
`;
export const bStyleGlobal = css`
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
export const headlineSecondGlobal = css`
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
export const divStartGlobal = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2.375rem;
  @media (min-width: 720px) {
    justify-content: start;
  }
`;
export const divTitleGlobal = css`
  display: flex;
  gap: 1.125rem;
  @media (min-width: 1000px) {
    gap: 1.75rem;
  }
`;
export const headlinePrincipalGlobal = css`
  font: normal normal 400 1.5rem/1.75rem var(--font-bellefair);
  text-align: center;
  text-transform: uppercase;
`;
