import React, { useContext, useEffect, useState } from "react";

/* components */
import CrewImage from "../crew/CrewImage";
import CrewInfo from "../crew/CrewInfo";
import CrewNav from "../crew/CrewNav";
import NavegatorComponent from "../NavegatorComponent";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* context */
import FetchContext from "../../context/fetchContext";

/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/crew_styles";
import "../../Animation.css";

/* interface and init state */
import { CREW_INITIAL_STATE } from "../../constant/initialState";
import { CREW_OPTIONS } from "../../constant/optionsInitialState";
import { Crew } from "../../interface/data";
import { Options } from "../../interface/options";

/* helpers */
import { changeTrueValue } from "../../helpers/changeTrueValue";
import { DivContain } from "../../styles/global";

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
    const value = getValue === undefined ? "douglas hurley" : getValue;
    const crew: Crew[] = dataContext.crew;
    let objMoon: Crew | undefined = crew.find((item) => item.name === value);
    if (objMoon === undefined) {
      objMoon = CREW_INITIAL_STATE;
    }
    setData(objMoon);
    setStyle(!style);
  }

  function selectOption(option: string) {
    const menuObj = changeTrueValue(options, option);
    setOptions(menuObj);
  }

  useEffect(() => {
    selectOption("douglas hurley");
    changeData();
  }, [dataContext]);
  return (
    <DivContain>
      <FetchContext.Provider value={dataContext}>
        <BgGround />
        <NavegatorComponent page="crew" />
        <TransitionGroup>
          <CSSTransition key={data.name} classNames="slide" timeout={3000}>
            <DivContain>
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
            </DivContain>
          </CSSTransition>
        </TransitionGroup>
      </FetchContext.Provider>
    </DivContain>
  );
}
