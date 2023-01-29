import React from "react";
import { Tech } from "../../interface/data";
import { StyleProps } from "../../interface/props";
import {
  HeadlinePrincipal,
  ImageTech,
  SubtitleOne,
  ImageRespon,
  TextBodyOne,
} from "../../styles/tech_styles";

export default function CrewInfo({ name, description, image_path }: Tech) {
  return (
    <>
      <SubtitleOne className="mobile">THE TERMINOLOGY…</SubtitleOne>
      <HeadlinePrincipal className="mobile">{name}</HeadlinePrincipal>
      <TextBodyOne className="mobile">{description}</TextBodyOne>

      <ImageRespon className="tablet">
        <ImageTech src={image_path} />
      </ImageRespon>
    </>
  );
}
