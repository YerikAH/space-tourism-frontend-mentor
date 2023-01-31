import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  BStyle,
  ButtonImage,
  IconClose,
  List,
  MenuDivOne,
  MenuDivTwo,
  MenuList,
  MenuMobile,
  SpanStyle,
} from "../styles/navegator_mobile_style";
import iconClose from "../assets/shared/icon-close.svg";
import { MenuMobileProps, StylesMenu } from "../interface/props";
import { INIT_STYLE } from "../constant/optionsInitialState";
export default function NavMobileComponent({
  menuo,
  handleClick,
}: MenuMobileProps) {
  const elementHTML = document.getElementById("menu")!;
  const [styleMenu, setStyleMenu] = useState<StylesMenu>(INIT_STYLE);

  useEffect(() => {
    let changeStyles: StylesMenu = {
      left: "0",
    };
    if (menuo) {
      setStyleMenu(changeStyles);
    } else {
      changeStyles.left = "100vw";
      setStyleMenu(changeStyles);
    }
  }, [styleMenu]);

  return ReactDOM.createPortal(
    <MenuMobile style={styleMenu}>
      <MenuList>
        <MenuDivOne>
          <ButtonImage aria-label="close menu">
            <IconClose src={iconClose} onClick={handleClick} />
          </ButtonImage>
        </MenuDivOne>
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
