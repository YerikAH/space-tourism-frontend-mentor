import { Options } from "./options";

export type NavegatorString = "home" | "crew" | "technology" | "destination";

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
export interface MenuMobileProps {
  menuo: boolean;
  handleClick(): void;
}

export interface StylesMenu {
  left: string;
}
