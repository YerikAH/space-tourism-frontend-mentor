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
import {Link} from "react-router-dom"
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
	      <Link className="Link" to="/">HOME</Link>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>01</BStyle>
	      <Link className="Link" to="/destination">DESTINATION</Link>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>02</BStyle>
	      <Link to="/crew" className="Link">CREW</Link>
            </AStyle>
          </LiStyle>
          <LiStyle>
            <AStyle>
              <BStyle>03</BStyle>
	      <Link className="Link" to="/technology">TECHNOLOGY</Link>
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
