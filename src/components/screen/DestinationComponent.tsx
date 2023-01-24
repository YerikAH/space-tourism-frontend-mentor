import React, { useEffect, useState } from "react";
/* components */
import NavegatorComponent from "../NavegatorComponent";
import DestinationNav from "../destination/DestinationNav";
import DestinationInfo from "../destination/DestinationInfo";
import DestinationImage from "../destination/DestinationImage";

/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/destination_style";

/* hook */
import { useFetch } from "../../hook/useFetch";

/* const */
import { DESTINATION_OPTIONS } from "../../constant/optionsInitialState";
import { DESTINATION_INITIAL_STATE } from "../../constant/initialState";

/* interface */
import { Options } from "../../interface/options";
import { Destination } from "../../interface/data";
import { changeTrueValue } from "../../helpers/changeTrueValue";

export default function DestinationComponent() {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;

  const { dataJson, load } = useFetch(envUrl);
  const [data, setData] = useState<Destination>(DESTINATION_INITIAL_STATE);
  const [options, setOptions] = useState<Options[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    selectOption(getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "moon" : getValue;
    if (dataJson != null && !load) {
      const destination: Destination[] = dataJson.destination;
      let objMoon: Destination | undefined = destination.find(
        (item) => item.title === value
      );

      if (objMoon === undefined) {
        objMoon = DESTINATION_INITIAL_STATE;
      }
      setData(objMoon);
    }
  }

  function selectOption(option: string) {
    const menuObj = changeTrueValue(options, option);
    setOptions(menuObj);
  }

  useEffect(() => {
    if (!load) {
      selectOption("moon");
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
