import React from "react";

/* styles */
import {
  HeadlinePrincipal,
  ImageTech,
  ImageRespon,
  SubtitleOne,
  TextBodyOne,
  DivContent,
} from "../../styles/tech_styles";

/* interface */
import { Tech } from "../../interface/data";

export default function TechImage({
  image_path_mobile,
  name,
  description,
}: Tech) {
  return (
    <>
      <ImageRespon className="mobile">
        <ImageTech src={image_path_mobile} />
      </ImageRespon>
      <DivContent>
        <SubtitleOne className="tablet"> THE TERMINOLOGY… </SubtitleOne>
        <HeadlinePrincipal className="tablet">{name}</HeadlinePrincipal>
        <TextBodyOne className="tablet">{description}</TextBodyOne>
      </DivContent>
    </>
  );
}
