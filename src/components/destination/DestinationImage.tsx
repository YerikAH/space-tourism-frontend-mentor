import React from "react";
import { DestinationDataProps } from "../../interface/props";
import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlineSecond,
  ImagePlanet,
  ImageRespon,
} from "../../styles/destination_style";

export default function DestinationImage({ data }: DestinationDataProps) {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>01</BStyle>
          <HeadlineSecond>Pick your destination</HeadlineSecond>
        </DivTitle>
      </DivStart>
      <ImageRespon>
        <ImagePlanet src={data.imagePath} />
      </ImageRespon>
    </>
  );
}
