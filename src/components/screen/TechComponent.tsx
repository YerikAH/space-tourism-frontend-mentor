import React, { useContext, useState } from "react";
import FetchContext from "../../context/fetchContext";
export default function TechComponent() {
  const data = useContext(FetchContext);
  const [aume, setAume] = useState(0);
  const handleClick = () => {
    setAume(aume + 1);
  };
  console.log(data.home[0].text);
  return (
    <FetchContext.Provider value={data}>
      <div className="">{data.destination[0].description}</div>
      <p>{aume}</p>
      <button onClick={handleClick}>Aumentar</button>
    </FetchContext.Provider>
  );
}
