import React from "react";

/* styles */
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

/* interface */
import { Crew } from "../../interface/data";

export default function CrewImage({
  image_path,
  job,
  name,
  description,
}: Crew) {
  return (
    <>
      <DivStart>
        <DivTitle>
          <BStyle>02</BStyle>
          <HeadlineSecond>Meet your crew</HeadlineSecond>
        </DivTitle>
      </DivStart>

      <ImageRespon className="mobile">
        <ImageCrew src={image_path} />
      </ImageRespon>

      <SubtitleOne className="tablet"> {job} </SubtitleOne>
      <HeadlinePrincipal className="tablet">{name}</HeadlinePrincipal>

      <TextBodyOne className="tablet">{description}</TextBodyOne>
    </>
  );
}
