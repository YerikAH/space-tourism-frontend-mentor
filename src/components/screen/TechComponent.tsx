import React, { useContext, useState } from "react";
import FetchContext from "../../context/fetchContext";
import {BgGround, DivGridOne, DivGridTwo, MainStyle, SectionStyle} from "../../styles/tech_styles";
import NavegatorComponent from "../NavegatorComponent";
export default function TechComponent() {
  const data = useContext(FetchContext);

  return (
    <FetchContext.Provider value={data}>
      <BgGround/>
      <NavegatorComponent />
      <MainStyle>
	<SectionStyle>
	  <DivGridOne>

	  </DivGridOne>
	  <DivGridTwo>

	  </DivGridTwo>
	</SectionStyle>

      </MainStyle>
      
    </FetchContext.Provider>
  );	
}
