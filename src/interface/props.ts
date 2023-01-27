import { Crew, Destination } from "./data";
import { Options } from "./options";

export interface NavProps {
  options: Options[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface DestinationDataProps {
  data: Destination;
}
export interface CrewDataProps {
  data: Crew;
}
export interface ContextProps {
  children: JSX.Element;
}
