import { DataDestination, MenuDestination } from "./interface";

export interface DestinationNavProps {
  options: MenuDestination[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface DestinationDataProps {
  data: DataDestination;
}
