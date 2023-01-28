import React, { useContext, useState } from "react";
import FetchContext from "../../context/fetchContext";
import {BgGround} from "../../styles/tech_styles";
export default function TechComponent() {
  const data = useContext(FetchContext);

  return (
    <FetchContext.Provider value={data}>
      <BgGround/>     
    </FetchContext.Provider>
  );	
}
