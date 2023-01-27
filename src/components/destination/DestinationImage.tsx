import React from "react";
import { Destination, RootObject } from "../../interface/data";
import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlineSecond,
  ImagePlanet,
  ImageRespon,
} from "../../styles/destination_style";

export default function DestinationImage({ image_path }: Destination) {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>01</BStyle>
          <HeadlineSecond>Pick your destination</HeadlineSecond>
        </DivTitle>
      </DivStart>
      <ImageRespon>
        <ImagePlanet src={image_path} />
      </ImageRespon>
    </>
  );
}
