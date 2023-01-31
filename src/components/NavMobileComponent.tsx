import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  BStyle,
  List,
  MenuDivOne,
  MenuDivTwo,
  MenuList,
  MenuMobile,
  SpanStyle,
} from "../styles/navegator_mobile_style";

export default function NavMobileComponent() {
  const elementHTML = document.getElementById("menu")!;
  return ReactDOM.createPortal(
    <MenuMobile>
      <MenuList>
        <MenuDivOne></MenuDivOne>
        <MenuDivTwo>
          <List>
            <Link to="/" className="Link">
              <BStyle>00</BStyle>
              <SpanStyle>HOME</SpanStyle>
            </Link>
          </List>
          <List>
            <Link to="/destination" className="Link">
              <BStyle>01</BStyle>
              <SpanStyle>DESTINATION</SpanStyle>
            </Link>
          </List>
          <List>
            <Link to="/crew" className="Link">
              <BStyle>02</BStyle>
              <SpanStyle>CREW</SpanStyle>
            </Link>
          </List>
          <List>
            {" "}
            <Link to="/technology" className="Link">
              <BStyle>03</BStyle>
              <SpanStyle>TECHNOLOGY</SpanStyle>
            </Link>
          </List>
        </MenuDivTwo>
      </MenuList>
    </MenuMobile>,
    elementHTML
  );
}
