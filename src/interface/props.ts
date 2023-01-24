import { Destination } from "./data";
import { DestinationOptions } from "./options";

export interface DestinationNavProps {
  options: DestinationOptions[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface DestinationDataProps {
  data: Destination;
}
