import React from "react";
import { DestinationDataProps } from "../../interface/props";
import {
  Decoration,
  DivBoxOne,
  DivBoxTwo,
  HeadlinePrincipal,
  Subtitle,
  TextBodyOne,
  TextBodyTwo,
} from "../../styles/destination_style";

export default function DestinationInfo({ data }: DestinationDataProps) {
  return (
    <>
      <HeadlinePrincipal>{data.title}</HeadlinePrincipal>
      <TextBodyOne>{data.description}</TextBodyOne>
      <Decoration></Decoration>
      <DivBoxOne>
        <DivBoxTwo>
          <Subtitle>AVG. DISTANCE</Subtitle>
          <TextBodyTwo>{data.distance}</TextBodyTwo>
        </DivBoxTwo>
        <DivBoxTwo>
          <Subtitle>Est. travel time</Subtitle>
          <TextBodyTwo>{data.time}</TextBodyTwo>
        </DivBoxTwo>
      </DivBoxOne>
    </>
  );
}
