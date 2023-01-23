import React, { useEffect, useState } from "react";
/* components */
import NavegatorComponent from "../NavegatorComponent";
/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/destination_style";
import { DataDestination, MenuDestination } from "../../interface/interface";
import DestinationNav from "../destination/DestinationNav";
import DestinationInfo from "../destination/DestinationInfo";
import DestinationImage from "../destination/DestinationImage";
import useFetch from "../../hook/useFetch";
import { DESTINATION_OPTIONS } from "../../constant/optionsInitialState";
import { DestinationOptions } from "../../interface/options";

export default function DestinationComponent() {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const [dataJson, errorJson] = useFetch(envUrl);
  const [indexData, setIndexData] = useState("moon");
  const [data, setData] = useState<DataDestination>();
  const [options, setOptions] =
    useState<MenuDestination[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    changeTrueValue(options, getValue);
    changeData(getValue);
  };

  function changeData(getValue: string) {
    if (getValue === "moon") {
      // get data
    } else if (getValue === "mars") {
      // get data
    } else if (getValue === "europa") {
      // get data
    } else {
      // get data
    }
  }
  function changeTrueValue(obj: DestinationOptions[], myVar: string) {
    obj = obj.map((o) => {
      if (o.value === true) {
        return { ...o, value: false };
      }
      return o;
    });
    const index = obj.findIndex((o) => o.name === myVar);
    obj[index] = { ...obj[index], value: true };
    return obj;
  }

  useEffect(() => {}, []);

  return (
    <>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <DestinationImage data={data} />
          </DivGridOne>
          <DivGridTwo>
            <DestinationNav handleClick={handleClick} options={options} />
            <DestinationInfo data={data} />
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
