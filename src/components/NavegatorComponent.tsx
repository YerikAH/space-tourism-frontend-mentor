import React from "react";
/* components */
import {
  AStyle,
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

export default function NavegatorComponent() {
  return (
    <HeaderStyle>
      <NavegatorStyle>
        <UlStyle>
          <LogoStyle src={logo} />
        </UlStyle>
        <Decoration></Decoration>
        <UlStyle className="desktop-menu">
          <LiStyle>
            <AStyle>
              <BStyle>00</BStyle>
              <SpanStyle>HOME</SpanStyle>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>01</BStyle>
              <SpanStyle>DESTINATION</SpanStyle>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>02</BStyle>
              <SpanStyle>CREW</SpanStyle>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>03</BStyle>
              <SpanStyle>TECHNOLOGY</SpanStyle>
            </AStyle>
          </LiStyle>
        </UlStyle>
        <HamStyleButton>
          <HamStyle src={ham} />
        </HamStyleButton>
      </NavegatorStyle>
    </HeaderStyle>
  );
}
