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
import DestinationNav from "../destination/DestinationNav";
import DestinationInfo from "../destination/DestinationInfo";
import DestinationImage from "../destination/DestinationImage";
import { useFetch } from "../../hook/useFetch";
import { DESTINATION_OPTIONS } from "../../constant/optionsInitialState";
import { DestinationOptions } from "../../interface/options";
import { Destination } from "../../interface/data";
import { DESTINATION_INITIAL_STATE } from "../../constant/initialState";

export default function DestinationComponent() {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const { dataJson, load } = useFetch(envUrl);
  const [data, setData] = useState<Destination>(DESTINATION_INITIAL_STATE);
  const [options, setOptions] =
    useState<DestinationOptions[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    changeTrueValue(options, getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "moon" : getValue;
    if (dataJson != null && !load) {
      let destination: Destination[] = dataJson.destination;
      let objMoon: Destination | undefined = destination.find(
        (item) => item.title === value
      );

      if (objMoon === undefined) {
        objMoon = DESTINATION_INITIAL_STATE;
      }
      setData(objMoon);
    }
  }
  function changeTrueValue(obj: DestinationOptions[], myVar?: string) {
    const valueVar = myVar === undefined ? "moon" : myVar;
    obj = obj.map((o) => {
      if (o.value === true) {
        return { ...o, value: false };
      }
      return o;
    });
    const index = obj.findIndex((o) => o.name === valueVar);
    obj[index] = { ...obj[index], value: true };

    setOptions(obj);
  }
  useEffect(() => {
    if (!load) {
      console.log(dataJson);
      changeTrueValue(options);
      changeData();
    }
  }, [load]);

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
