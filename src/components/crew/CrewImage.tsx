import React from "react";
import { CrewDataProps } from "../../interface/props";
import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlinePrincipal,
  HeadlineSecond,
  ImageCrew,
  ImageRespon,
  SubtitleOne,
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

      <ImageRespon className="mobile">
        <ImageCrew src={data.image_path} />
      </ImageRespon>

      <SubtitleOne className="tablet">{data.job}</SubtitleOne>
      <HeadlinePrincipal className="tablet">{data.name}</HeadlinePrincipal>

      <TextBodyOne className="tablet">{data.description}</TextBodyOne>
    </>
  );
}
