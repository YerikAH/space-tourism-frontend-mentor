import React from "react";
import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlineSecond,
  ImageCrew,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";

export default function CrewImage() {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>02</BStyle>
          <HeadlineSecond>Meet your crew</HeadlineSecond>
        </DivTitle>
      </DivStart>

      <ImageRespon>
        <ImageCrew />
      </ImageRespon>

      <TextBodyOne></TextBodyOne>
    </>
  );
}
