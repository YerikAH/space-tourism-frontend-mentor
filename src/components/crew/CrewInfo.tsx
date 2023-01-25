import React from "react";
import { CrewDataProps } from "../../interface/props";
import {
  HeadlinePrincipal,
  ImageCrew,
  SubtitleOne,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";
export default function CrewInfo({ data }: CrewDataProps) {
  return (
    <>
      <SubtitleOne className="mobile">{data.job}</SubtitleOne>
      <HeadlinePrincipal className="mobile">{data.name}</HeadlinePrincipal>
      <TextBodyOne className="mobile">{data.description}</TextBodyOne>

      <ImageRespon className="tablet">
        <ImageCrew src={data.image_path} />
      </ImageRespon>
    </>
  );
}
