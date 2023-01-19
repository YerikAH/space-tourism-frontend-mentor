import React from "react";
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

export default function DestinationComponent() {
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
              <ImagePlanet src={moon} />
            </ImageRespon>
          </DivGridOne>
          <DivGridTwo>
            <Navigation>
              <NavigationOptions>moon</NavigationOptions>
              <NavigationOptions>mars</NavigationOptions>
              <NavigationOptions>europa</NavigationOptions>
              <NavigationOptions>titan</NavigationOptions>
            </Navigation>
            <HeadlinePrincipal>moon</HeadlinePrincipal>
            <TextBodyOne>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </TextBodyOne>
            <Decoration></Decoration>
            <DivBoxOne>
              <DivBoxTwo>
                <Subtitle>AVG. DISTANCE</Subtitle>
                <TextBodyTwo>384,400 km</TextBodyTwo>
              </DivBoxTwo>
              <DivBoxTwo>
                <Subtitle>Est. travel time</Subtitle>
                <TextBodyTwo>3 days</TextBodyTwo>
              </DivBoxTwo>
            </DivBoxOne>
          </DivGridTwo>
        </SectionStyle>
      </MainStyle>
    </>
  );
}
