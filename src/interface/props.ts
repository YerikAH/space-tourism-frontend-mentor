import { Options } from "./options";

type NavegatorString = "home" | "crew" | "tech" | "destination";

export interface NavProps {
  options: Options[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface ContextProps {
  children: JSX.Element;
}
export interface NavegatorProps {
  page: NavegatorString;
}
