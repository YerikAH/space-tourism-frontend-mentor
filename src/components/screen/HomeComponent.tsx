import React, { useContext, useEffect, useState } from "react";

/* components */
import NavegatorComponent from "../NavegatorComponent";

/* styles */
import {
  BgGround,
  DivGridOne,
  DivGridTwo,
  HeadlinePrincipal,
  HeadlineSecond,
  MainStyle,
  SectionStyle,
  TextBodyOne,
} from "../../styles/home_style";

/* context */
import FetchContext from "../../context/fetchContext";

/* interface and init state */
import { Home } from "../../interface/data";
import { HOME_INITIAL_STATE } from "../../constant/initialState";
import { Link } from "react-router-dom";
import { DivContain } from "../../styles/global";

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
    <DivContain className="">
      <FetchContext.Provider value={dataContext}>
        <BgGround />
        <NavegatorComponent page="home" />
        <MainStyle>
          <SectionStyle>
            <DivGridOne>
              <HeadlineSecond>{data.subtitle}</HeadlineSecond>
              <HeadlinePrincipal>{data.title}</HeadlinePrincipal>
              <TextBodyOne>{data.text}</TextBodyOne>
            </DivGridOne>
            <DivGridTwo>
              <Link to="/destination" className="Link">
                {data.button}
              </Link>
            </DivGridTwo>
          </SectionStyle>
        </MainStyle>
      </FetchContext.Provider>
    </DivContain>
  );
}
