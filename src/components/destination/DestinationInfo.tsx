import React from "react";

/* styles */
import {
  Decoration,
  DivBoxOne,
  DivBoxTwo,
  HeadlinePrincipal,
  Subtitle,
  TextBodyOne,
  TextBodyTwo,
} from "../../styles/destination_style";

/* interface */
import { Destination } from "../../interface/data";

export default function DestinationInfo({
  title,
  description,
  distance,
  time,
}: Destination) {
  return (
    <>
      <HeadlinePrincipal>{title}</HeadlinePrincipal>
      <TextBodyOne>{description}</TextBodyOne>
      <Decoration></Decoration>
      <DivBoxOne>
        <DivBoxTwo>
          <Subtitle>AVG. DISTANCE</Subtitle>
          <TextBodyTwo>{distance}</TextBodyTwo>
        </DivBoxTwo>
        <DivBoxTwo>
          <Subtitle>Est. travel time</Subtitle>
          <TextBodyTwo>{time}</TextBodyTwo>
        </DivBoxTwo>
      </DivBoxOne>
    </>
  );
}
