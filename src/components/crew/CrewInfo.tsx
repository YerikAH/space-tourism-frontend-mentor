import React from "react";

/* styles */
import {
  HeadlinePrincipal,
  ImageCrew,
  SubtitleOne,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";

/* interface */
import { Crew } from "../../interface/data";

export default function CrewInfo({ job, name, description, image_path }: Crew) {
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
