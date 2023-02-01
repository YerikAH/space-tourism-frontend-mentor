import React from "react";

/* styles */
import {
  HeadlinePrincipal,
  ImageTech,
  SubtitleOne,
  ImageRespon,
  TextBodyOne,
} from "../../styles/tech_styles";

/* interface */
import { Tech } from "../../interface/data";

export default function TechInfo({
  name,
  description,
  image_path_desktop,
}: Tech) {
  return (
    <>
      <SubtitleOne className="mobile">THE TERMINOLOGY…</SubtitleOne>
      <HeadlinePrincipal className="mobile">{name}</HeadlinePrincipal>
      <TextBodyOne className="mobile">{description}</TextBodyOne>
      <ImageRespon className="tablet">
        <ImageTech src={image_path_desktop} />
      </ImageRespon>
    </>
  );
}
