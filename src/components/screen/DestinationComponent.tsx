import React, { useState } from "react";
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
import {
  DESTINATION_OPTIONS,
  EUROPA_DESTINATION,
  MARS_DESTINATION,
  MOON_DESTINATION,
  TITAN_DESTINATION,
} from "../../constant/constDestination";
import DestinationNav from "../destination/DestinationNav";
import DestinationInfo from "../destination/DestinationInfo";
import DestinationImage from "../destination/DestinationImage";
import useFetch from "../../hook/useFetch";

export default function DestinationComponent() {
  const [dataJson, errorJson] = useFetch("../../public/data.json");
  if (dataJson !== null) {
    console.log(dataJson.destination);
  }
  const [data, setData] = useState<DataDestination>(MOON_DESTINATION);
  const [options, setOptions] =
    useState<MenuDestination[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    let getOptions: MenuDestination[] = [...options];
    resetMenuOptions(getOptions);
    changeData(getValue, getOptions);
  };

  function resetMenuOptions(getOptions: MenuDestination[]) {
    getOptions.map((item) => {
      item.value = false;
    });
    setOptions(getOptions);
  }

  function changeData(getValue: string, getOptions: MenuDestination[]) {
    if (getValue === "moon") {
      setData(MOON_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "mars") {
      setData(MARS_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "europa") {
      setData(EUROPA_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else {
      setData(TITAN_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    }
  }
  function selectMenuOptions(option: string, getOptions: MenuDestination[]) {
    let selectOption = getOptions.find((item) => item.name === option);
    if (selectOption !== undefined) {
      selectOption.value = !selectOption?.value;
    }
    setOptions(getOptions);
  }
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
