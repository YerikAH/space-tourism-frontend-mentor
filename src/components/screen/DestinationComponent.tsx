import React, { useContext, useEffect, useState } from "react";

/* components */
import NavegatorComponent from "../NavegatorComponent";
import DestinationNav from "../destination/DestinationNav";
import DestinationInfo from "../destination/DestinationInfo";
import DestinationImage from "../destination/DestinationImage";
import { DivContain } from "../../styles/global";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  MainStyle,
  SectionStyle,
} from "../../styles/destination_style";

/* interface and init state*/
import { Options } from "../../interface/options";
import { Destination } from "../../interface/data";
import { changeTrueValue } from "../../helpers/changeTrueValue";
import FetchContext from "../../context/fetchContext";
import { DESTINATION_OPTIONS } from "../../constant/optionsInitialState";
import { DESTINATION_INITIAL_STATE } from "../../constant/initialState";

export default function DestinationComponent() {
  const dataContext = useContext(FetchContext);

  const [data, setData] = useState<Destination>(DESTINATION_INITIAL_STATE);
  const [options, setOptions] = useState<Options[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    selectOption(getValue);
    changeData(getValue);
  };

  function changeData(getValue?: string) {
    const value = getValue === undefined ? "moon" : getValue;
    const destination: Destination[] = dataContext.destination;
    let objMoon: Destination | undefined = destination.find(
      (item) => item.title === value
    );

    if (objMoon === undefined) {
      objMoon = DESTINATION_INITIAL_STATE;
    }
    setData(objMoon);
  }

  function selectOption(option: string) {
    const menuObj = changeTrueValue(options, option);
    setOptions(menuObj);
  }

  useEffect(() => {
    selectOption("moon");
    changeData();
  }, [dataContext]);

  return (
    <DivContain className="">
      <FetchContext.Provider value={dataContext}>
        <BgGround />
        <NavegatorComponent page="destination" />
        <TransitionGroup>
          <CSSTransition key={data.title} classNames="slide" timeout={3000}>
            <DivContain>
              <MainStyle>
                <SectionStyle>
                  <DivGridOne>
                    <DestinationImage image_path={data.image_path} />
                  </DivGridOne>
                  <DivGridTwo>
                    <DestinationNav
                      handleClick={handleClick}
                      options={options}
                    />
                    <DestinationInfo
                      description={data.description}
                      distance={data.distance}
                      time={data.time}
                      title={data.title}
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
