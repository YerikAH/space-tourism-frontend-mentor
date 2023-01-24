import { Destination } from "./data";
import { Options } from "./options";

export interface DestinationNavProps {
  options: Options[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface DestinationDataProps {
  data: Destination;
}
