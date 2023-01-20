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
import DestinationNav from "../destination/DestinationNav";

export default function DestinationComponent() {
  const [data, setData] = useState<DataDestination>(MOON_DESTINATION);
  const [options, setOptions] =
    useState<MenuDestination[]>(DESTINATION_OPTIONS);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const getValue: string = (e.target as HTMLButtonElement).value;
    let getOptions: MenuDestination[] = [...options];
    resetMenuOptions(getOptions);
    changeData(getValue, getOptions);
  };

  function resetMenuOptions(getOptions: MenuDestination[]) {
    getOptions.map((item) => {
      item.value = false;
    });
    setOptions(getOptions);
  }

  function changeData(getValue: string, getOptions: MenuDestination[]) {
    if (getValue === "moon") {
      setData(MOON_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "mars") {
      setData(MARS_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else if (getValue === "europa") {
      setData(EUROPA_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    } else {
      setData(TITAN_DESTINATION);
      selectMenuOptions(getValue, getOptions);
    }
  }
  function selectMenuOptions(option: string, getOptions: MenuDestination[]) {
    let selectOption = getOptions.find((item) => item.name === option);
    if (selectOption !== undefined) {
      selectOption.value = !selectOption?.value;
    }
    setOptions(getOptions);
  }
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
            <DestinationNav handleClick={handleClick} options={options} />
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
