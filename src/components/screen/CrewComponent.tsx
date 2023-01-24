import React from "react";
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/crew_styles";
import CrewImage from "../crew/CrewImage";
import NavegatorComponent from "../NavegatorComponent";

export default function CrewComponent() {
  return (
    <>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <CrewImage />
          </DivGridOne>
          <DivGridTwo></DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
