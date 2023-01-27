import React, { useContext } from "react";
import FetchContext from "../../context/fetchContext";
export default function TechComponent() {
  const data = useContext(FetchContext);
  return (
    <FetchContext.Provider value={data}>
      <div className="">{data.home[0].button}</div>
    </FetchContext.Provider>
  );
}
