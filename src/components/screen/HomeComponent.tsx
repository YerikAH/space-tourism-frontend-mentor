import React, { useEffect, useState } from "react";

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

import { useFetch } from "../../hook/useFetch";
import { Home } from "../../interface/data";
import { HOME_INITIAL_STATE } from "../../constant/initialState";

export default function HomeComponent() {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const [data, setData] = useState<Home>(HOME_INITIAL_STATE);
  const { dataJson, load } = useFetch(envUrl);

  function updateData() {
    if (dataJson != null) {
      const dataObj: Home = {
        title: dataJson.home[0].title,
        text: dataJson.home[0].text,
        subtitle: dataJson.home[0].subtitle,
        button: dataJson.home[0].button,
      };
      setData(dataObj);
    }
  }
  useEffect(() => {
    if (!load) {
      updateData();
    }
  }, [load]);

  return (
    <>
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
    </>
  );
}
