import React, { useContext } from "react";
import fetchContext from "../../context/fetchContext";
export default function TechComponent() {
  const data = useContext(fetchContext);
  // console.log(data);
  return <div className="">{data.home[0].button}</div>;
}
