import React, { useContext, useEffect, useState } from "react";

import {
  BgGround,
  CircleStyleButton,
  DivGridOne,
  DivGridTwo,
  HeadlinePrincipal,
  HeadlineSecond,
  MainStyle,
  SectionStyle,
  TextBodyOne,
} from "../../styles/home_style";
import NavegatorComponent from "../NavegatorComponent";

import { Home } from "../../interface/data";
import { HOME_INITIAL_STATE } from "../../constant/initialState";
import FetchContext from "../../context/fetchContext";

export default function HomeComponent() {
  const dataContext = useContext(FetchContext);
  const [data, setData] = useState<Home>(HOME_INITIAL_STATE);

  function updateData() {
    const dataObj: Home = {
      title: dataContext.home[0].title,
      text: dataContext.home[0].text,
      subtitle: dataContext.home[0].subtitle,
      button: dataContext.home[0].button,
    };
    setData(dataObj);
  }
  useEffect(() => {
    updateData();
  }, [dataContext]);

  return (
    <FetchContext.Provider value={dataContext}>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <HeadlineSecond>{data.subtitle}</HeadlineSecond>
            <HeadlinePrincipal>{data.title}</HeadlinePrincipal>
            <TextBodyOne>{data.text}</TextBodyOne>
          </DivGridOne>
          <DivGridTwo>
            <CircleStyleButton>{data.button}</CircleStyleButton>
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </FetchContext.Provider>
  );
}
