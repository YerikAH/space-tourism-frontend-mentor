import { Options } from "./options";

export interface NavProps {
  options: Options[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface ContextProps {
  children: JSX.Element;
}
