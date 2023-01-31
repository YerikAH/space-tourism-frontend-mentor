import React, { useEffect, useState } from "react";
/*route */
import { Link } from "react-router-dom";
/* styles */
import {
  BStyle,
  Decoration,
  HamStyle,
  HamStyleButton,
  HeaderStyle,
  LiStyle,
  LogoStyle,
  NavegatorStyle,
  SpanStyle,
  UlStyle,
} from "../styles/navegator_style";

/* images */
import logo from "../assets/shared/logo.svg";
import ham from "../assets/shared/icon-hamburger.svg";

/* interface and init state*/
import { NavegatorProps, StylesMenu } from "../interface/props";
import { Options } from "../interface/options";

import { OPTIONS_INITIAL_STATE } from "../constant/optionsInitialState";
/* helpers */
import { changeTrueValue } from "../helpers/changeTrueValue";
import NavMobileComponent from "./NavMobileComponent";

export default function NavegatorComponent({ page }: NavegatorProps) {
  const [Page, setPage] = useState<Options[]>(OPTIONS_INITIAL_STATE);
  const [switchMenu, setSwitchMenu] = useState(false);
  const handleClick = () => setSwitchMenu(!switchMenu);

  useEffect(() => {
    const menuObj = changeTrueValue(Page, page);
    setPage(menuObj);
  }, []);
  function convertString(value: boolean): string {
    return value ? "true" : "false";
  }
  return (
    <>
      <HeaderStyle>
        <NavegatorStyle>
          <UlStyle>
            <LogoStyle src={logo} />
          </UlStyle>
          <Decoration></Decoration>
          <UlStyle className="desktop-menu">
            <LiStyle className={convertString(Page[0].value)}>
              <Link to="/" className="Link">
                <BStyle>00</BStyle>
                <SpanStyle>HOME</SpanStyle>
              </Link>
            </LiStyle>
            <LiStyle className={convertString(Page[1].value)}>
              <Link to="/destination" className="Link">
                <BStyle>01</BStyle>
                <SpanStyle> DESTINATION</SpanStyle>
              </Link>
            </LiStyle>
            <LiStyle className={convertString(Page[2].value)}>
              <Link to="/crew" className="Link">
                <BStyle>02</BStyle>
                <SpanStyle>CREW</SpanStyle>
              </Link>
            </LiStyle>
            <LiStyle className={convertString(Page[3].value)}>
              <Link to="/technology" className="Link">
                <BStyle>03</BStyle>
                <SpanStyle>TECHNOLOGY</SpanStyle>
              </Link>
            </LiStyle>
          </UlStyle>
          <HamStyleButton>
            <HamStyle src={ham} onClick={handleClick} />
          </HamStyleButton>
        </NavegatorStyle>
      </HeaderStyle>
      <NavMobileComponent menuo={switchMenu} handleClick={handleClick} />
    </>
  );
}
