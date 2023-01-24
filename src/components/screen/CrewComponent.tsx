import React, { useEffect, useState } from "react";
import { CREW_INITIAL_STATE } from "../../constant/initialState";
import { CREW_OPTIONS } from "../../constant/optionsInitialState";
import { changeTrueValue } from "../../helpers/changeTrueValue";
import { useFetch } from "../../hook/useFetch";
import { Crew } from "../../interface/data";
import { Options } from "../../interface/options";
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/crew_styles";
import CrewImage from "../crew/CrewImage";
import CrewNav from "../crew/CrewNav";
import NavegatorComponent from "../NavegatorComponent";

export default function CrewComponent() {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;

  const { dataJson, load } = useFetch(envUrl);
  const [data, setData] = useState<Crew>(CREW_INITIAL_STATE);
  const [options, setOptions] = useState<Options[]>(CREW_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    selectOption(getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "Douglas Hurley" : getValue;

    if (dataJson != null) {
      const crew: Crew[] = dataJson.crew;
      let objMoon: Crew | undefined = crew.find((item) => item.name === value);

      if (objMoon === undefined) {
        objMoon = CREW_INITIAL_STATE;
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
      selectOption("Douglas Hurley");
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
            <CrewImage data={data} />
            <CrewNav handleClick={handleClick} options={options} />
          </DivGridOne>
          <DivGridTwo></DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
