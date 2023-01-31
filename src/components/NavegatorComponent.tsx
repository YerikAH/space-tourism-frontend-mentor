import React from "react";
/* components */
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
import { Link } from "react-router-dom";
/* images */

import logo from "../assets/shared/logo.svg";
import ham from "../assets/shared/icon-hamburger.svg";
import { NavegatorProps } from "../interface/props";

export default function NavegatorComponent({ page }: NavegatorProps) {
  return (
    <HeaderStyle>
      <NavegatorStyle>
        <UlStyle>
          <LogoStyle src={logo} />
        </UlStyle>
        <Decoration></Decoration>
        <UlStyle className="desktop-menu">
          <LiStyle>
            <Link to="/" className="Link">
              <BStyle>00</BStyle>
              <SpanStyle>HOME</SpanStyle>
            </Link>
          </LiStyle>
          <LiStyle>
            <Link to="/destination" className="Link">
              <BStyle>01</BStyle>
              <SpanStyle> DESTINATION</SpanStyle>
            </Link>
          </LiStyle>
          <LiStyle>
            <Link to="/crew" className="Link">
              <BStyle>02</BStyle>
              <SpanStyle>CREW</SpanStyle>
            </Link>
          </LiStyle>
          <LiStyle>
            <Link to="/technology" className="Link">
              <BStyle>03</BStyle>
              <SpanStyle>TECHNOLOGY</SpanStyle>
            </Link>
          </LiStyle>
        </UlStyle>
        <HamStyleButton>
          <HamStyle src={ham} />
        </HamStyleButton>
      </NavegatorStyle>
    </HeaderStyle>
  );
}
