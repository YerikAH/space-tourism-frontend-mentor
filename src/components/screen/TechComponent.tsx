import React, { useContext, useEffect, useState } from "react";

/* interface and init state */
import { TECH_INITIAL_STATE } from "../../constant/initialState";
import { TECH_OPTIONS } from "../../constant/optionsInitialState";
import { Tech } from "../../interface/data";
import { Options } from "../../interface/options";

/* context */
import FetchContext from "../../context/fetchContext";

/* components */
import NavegatorComponent from "../NavegatorComponent";
import TechInfo from "../tech/TechInfo";
import TechImage from "../tech/TechImage";
import TeachNav from "../tech/TechNav";

/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  DivStart,
  DivTitle,
  HeadlineSecond,
  MainStyle,
  SectionStyle,
  BStyle,
  DivSeparate,
} from "../../styles/tech_styles";

/* helpers */
import { changeTrueValue } from "../../helpers/changeTrueValue";
import { DivContain } from "../../styles/global";

export default function TechComponent() {
  const dataContext = useContext(FetchContext);
  const [data, setData] = useState<Tech>(TECH_INITIAL_STATE);
  const [options, setOptions] = useState<Options[]>(TECH_OPTIONS);
  const [style, setStyle] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    selectOption(getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "launch vehicle" : getValue;

    const tech: Tech[] = dataContext.tech;
    let objMoon: Tech | undefined = tech.find((item) => item.name === value);
    if (objMoon === undefined) {
      objMoon = TECH_INITIAL_STATE;
    }
    setData(objMoon);
    setStyle(!style);
  }

  function selectOption(option: string) {
    const menuObj = changeTrueValue(options, option);
    setOptions(menuObj);
  }

  useEffect(() => {
    selectOption("launch vehicle");
    changeData();
  }, [dataContext]);
  return (
    <DivContain className="">
      <FetchContext.Provider value={dataContext}>
        <BgGround />
        <NavegatorComponent page="technology" />
        <MainStyle>
          <SectionStyle>
            <DivGridOne>
              <DivStart>
                <DivTitle>
                  <BStyle>03</BStyle>
                  <HeadlineSecond>SPACE LAUNCH 101</HeadlineSecond>
                </DivTitle>
              </DivStart>
              <DivSeparate>
                <TechImage
                  image_path_mobile={data.image_path_mobile}
                  description={data.description}
                  name={data.name}
                  image_path_desktop={data.image_path_desktop}
                />
                <TeachNav options={options} handleClick={handleClick} />
              </DivSeparate>
            </DivGridOne>
            <DivGridTwo>
              <TechInfo
                image_path_mobile={data.image_path_mobile}
                description={data.description}
                name={data.name}
                image_path_desktop={data.image_path_desktop}
              />
            </DivGridTwo>
          </SectionStyle>
        </MainStyle>
      </FetchContext.Provider>
    </DivContain>
  );
}
