import React from "react";
import { Tech } from "../../interface/data";

import {
  BStyle,
  DivStart,
  DivTitle,
  HeadlinePrincipal,
  HeadlineSecond,
  ImageTech,
  ImageRespon,
  SubtitleOne,
  TextBodyOne,
} from "../../styles/tech_styles";

export default function TechImage({
  image_path_desktop,
  image_path_mobile,
  name,
  description,
}: Tech) {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>03</BStyle>
          <HeadlineSecond>SPACE LAUNCH 101</HeadlineSecond>
        </DivTitle>
      </DivStart>

      <ImageRespon className="mobile">
        <ImageTech src={image_path_mobile} />
      </ImageRespon>

      <SubtitleOne className="tablet"> THE TERMINOLOGY… </SubtitleOne>
      <HeadlinePrincipal className="tablet">{name}</HeadlinePrincipal>

      <TextBodyOne className="tablet">{description}</TextBodyOne>
    </>
  );
}
