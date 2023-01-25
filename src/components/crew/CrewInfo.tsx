import React from "react";
import { CrewDataProps } from "../../interface/props";
import {
  HeadlinePrincipal,
  ImageCrew,
  ImageResponTwo,
  TextBodyTwo,
  SubtitleOne,
} from "../../styles/crew_styles";
export default function CrewInfo({ data }: CrewDataProps) {
  return (
    <>
      <SubtitleOne>{data.job}</SubtitleOne>
      <HeadlinePrincipal>{data.name}</HeadlinePrincipal>
      <TextBodyTwo>{data.description}</TextBodyTwo>

      <ImageResponTwo>
        <ImageCrew src={data.image_path} />
      </ImageResponTwo>
    </>
  );
}
