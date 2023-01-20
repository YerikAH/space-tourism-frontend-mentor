import React, { useState } from "react";
/* components */
import NavegatorComponent from "../NavegatorComponent";
/* images */
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
/* styles */
import {
  BgGround,
  BStyle,
  Decoration,
  DivBoxOne,
  DivBoxTwo,
  DivGridOne,
  DivGridTwo,
  DivStart,
  DivTitle,
  HeadlinePrincipal,
  HeadlineSecond,
  ImagePlanet,
  ImageRespon,
  MainStyle,
  Navigation,
  NavigationOptions,
  SectionStyle,
  Subtitle,
  TextBodyOne,
  TextBodyTwo,
} from "../../styles/destination_style";
import { DataDestination, MenuDestination } from "../../interface/interface";
import {
  DESTINATION_OPTIONS,
  EUROPA_DESTINATION,
  MARS_DESTINATION,
  MOON_DESTINATION,
  TITAN_DESTINATION,
} from "../../constant/constDestination";

export default function DestinationComponent() {
  const [data, setData] = useState<DataDestination>(MOON_DESTINATION);
  const [options, setOptions] =
    useState<MenuDestination[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;

    if (getValue === "moon") {
      setData(MOON_DESTINATION);
    } else if (getValue === "mars") {
      setData(MARS_DESTINATION);
    } else if (getValue === "europa") {
      setData(EUROPA_DESTINATION);
    } else {
      setData(TITAN_DESTINATION);
    }
  };

  return (
    <>
      <BgGround />
      <NavegatorComponent />
      <MainStyle>
        <SectionStyle>
          <DivGridOne>
            <DivStart>
              <DivTitle>
                <BStyle>01</BStyle>
                <HeadlineSecond>Pick your destination</HeadlineSecond>
              </DivTitle>
            </DivStart>
            <ImageRespon>
              <ImagePlanet src={data.imagePath} />
            </ImageRespon>
          </DivGridOne>
          <DivGridTwo>
            <Navigation>
              {options.map((item) => (
                <NavigationOptions
                  className={item.value ? "true" : "false"}
                  value={item.page}
                  onClick={(e) => handleClick(e)}
                >
                  {item.name}
                </NavigationOptions>
              ))}

              {/* <NavigationOptions>mars</NavigationOptions>
              <NavigationOptions>europa</NavigationOptions>
              <NavigationOptions>titan</NavigationOptions> */}
            </Navigation>
            <HeadlinePrincipal>{data.title}</HeadlinePrincipal>
            <TextBodyOne>{data.description}</TextBodyOne>
            <Decoration></Decoration>
            <DivBoxOne>
              <DivBoxTwo>
                <Subtitle>AVG. DISTANCE</Subtitle>
                <TextBodyTwo>{data.distance}</TextBodyTwo>
              </DivBoxTwo>
              <DivBoxTwo>
                <Subtitle>Est. travel time</Subtitle>
                <TextBodyTwo>{data.time}</TextBodyTwo>
              </DivBoxTwo>
            </DivBoxOne>
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
