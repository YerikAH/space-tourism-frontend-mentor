import React from "react";
import { CrewDataProps } from "../../interface/props";
import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlineSecond,
  ImageCrew,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";

export default function CrewImage({ data }: CrewDataProps) {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>02</BStyle>
          <HeadlineSecond>Meet your crew</HeadlineSecond>
        </DivTitle>
      </DivStart>

      <ImageRespon>
        <ImageCrew src={data.image_path} />
      </ImageRespon>

      <TextBodyOne className="mobile">{data.description}</TextBodyOne>
    </>
  );
}
