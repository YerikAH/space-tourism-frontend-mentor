import React from "react";
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/destination_style";
import NavegatorComponent from "../NavegatorComponent";

export default function DestinationComponent() {
  return (
    <>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne></DivGridOne>
          <DivGridTwo></DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
