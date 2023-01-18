import styled from "styled-components";

export const BgGround = styled.div``;
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
