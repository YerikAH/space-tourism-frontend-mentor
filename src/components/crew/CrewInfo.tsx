import React from "react";
import { CrewDataProps } from "../../interface/props";
import {
  HeadlinePrincipal,
  ImageCrew,
  ImageRespon,
  TextBodyOne,
} from "../../styles/crew_styles";
import { Subtitle } from "../../styles/destination_style";

export default function CrewInfo({ data }: CrewDataProps) {
  return (
    <>
      <Subtitle>{data.job}</Subtitle>
      <HeadlinePrincipal>{data.name}</HeadlinePrincipal>
      <TextBodyOne>{data.description}</TextBodyOne>

      <ImageRespon>
        <ImageCrew src={data.image_path} />
      </ImageRespon>
    </>
  );
}
