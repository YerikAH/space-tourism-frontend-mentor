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

export default function DestinationComponent() {
  const [dataJson, errorJson] = useFetch("../../public/data.json");
  const [indexData, setIndexData] = useState("moon");
  const [data, setData] = useState<DataDestination>();
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
      // get data
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "mars") {
      // get data
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "europa") {
      // get data
      selectMenuOptions(getValue, getOptions);
    } else {
      // get data
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
