import React, { useContext, useEffect, useState } from "react";
import { CREW_INITIAL_STATE } from "../../constant/initialState";
import { CREW_OPTIONS } from "../../constant/optionsInitialState";
import FetchContext from "../../context/fetchContext";
import { changeTrueValue } from "../../helpers/changeTrueValue";
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
import CrewInfo from "../crew/CrewInfo";
import CrewNav from "../crew/CrewNav";
import NavegatorComponent from "../NavegatorComponent";

export default function CrewComponent() {
  const dataContext = useContext(FetchContext);
  const [data, setData] = useState<Crew>(CREW_INITIAL_STATE);
  const [options, setOptions] = useState<Options[]>(CREW_OPTIONS);
  const [style, setStyle] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    selectOption(getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "Douglas Hurley" : getValue;

    const crew: Crew[] = dataContext.crew;
    let objMoon: Crew | undefined = crew.find((item) => item.name === value);

    if (objMoon === undefined) {
      objMoon = CREW_INITIAL_STATE;
    }
    setData(objMoon);
  }

  function selectOption(option: string) {
    const menuObj = changeTrueValue(options, option);
    setOptions(menuObj);
  }

  useEffect(() => {
    selectOption("Douglas Hurley");
    changeData();
    setStyle(!style);
  }, [dataContext]);
  return (
    <FetchContext.Provider value={dataContext}>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <CrewImage
              name={data.name}
              description={data.description}
              image_path={data.image_path}
              job={data.job}
            />
            <CrewNav handleClick={handleClick} options={options} />
          </DivGridOne>
          <DivGridTwo>
            <CrewInfo
              name={data.name}
              description={data.description}
              image_path={data.image_path}
              job={data.job}
            />
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </FetchContext.Provider>
  );
}
