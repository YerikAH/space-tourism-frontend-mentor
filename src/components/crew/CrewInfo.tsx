import React from "react";
import { Crew } from "../../interface/data";
import { StyleProps } from "../../interface/props";
import {
  HeadlinePrincipal,
  ImageCrew,
  SubtitleOne,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";
export default function CrewInfo(
  { job, name, description, image_path }: Crew,
  style: StyleProps
) {
  console.log(style);
  return (
    <>
      <SubtitleOne className="mobile">{job}</SubtitleOne>
      <HeadlinePrincipal className="mobile">{name}</HeadlinePrincipal>
      <TextBodyOne className="mobile">{description}</TextBodyOne>

      <ImageRespon className="tablet">
        <ImageCrew src={image_path} />
      </ImageRespon>
    </>
  );
}
