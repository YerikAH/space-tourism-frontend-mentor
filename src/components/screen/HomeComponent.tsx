import React from "react";
import {
  BgGround,
  CircleStyleButton,
  DivGridOne,
  DivGridTwo,
  HeadlinePrincipal,
  HeadlineSecond,
  MainStyle,
  SectionStyle,
  TextBodyOne,
} from "../../styles/home_style";
import NavegatorComponent from "../NavegatorComponent";

export default function HomeComponent() {
  return (
    <>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <HeadlineSecond>SO, YOU WANT TO TRAVEL TO</HeadlineSecond>
            <HeadlinePrincipal>SPACE</HeadlinePrincipal>
            <TextBodyOne>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </TextBodyOne>
          </DivGridOne>
          <DivGridTwo>
            <CircleStyleButton>EXPLORE</CircleStyleButton>
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
