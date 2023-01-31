import { Options } from "../interface/options";
import { NavegatorString, StylesMenu } from "../interface/props";

export const DESTINATION_OPTIONS: Options[] = [
  {
    name: "moon",
    value: true,
  },
  {
    name: "mars",
    value: false,
  },
  {
    name: "europa",
    value: false,
  },
  {
    name: "titan",
    value: false,
  },
];

export const CREW_OPTIONS: Options[] = [
  {
    name: "douglas hurley",
    value: true,
  },
  {
    name: "mark shuttleworth",
    value: false,
  },
  {
    name: "victor glover",
    value: false,
  },
  {
    name: "anousheh ansari",
    value: false,
  },
];

export const TECH_OPTIONS: Options[] = [
  {
    name: "launch vehicle",
    value: true,
  },
  {
    name: "spaceport",
    value: false,
  },
  {
    name: "space capsule",
    value: false,
  },
];
export const OPTIONS_INITIAL_STATE: Options[] = [
  {
    name: "home" as NavegatorString,
    value: true,
  },
  {
    name: "destination" as NavegatorString,
    value: false,
  },
  {
    name: "crew" as NavegatorString,
    value: false,
  },
  {
    name: "technology" as NavegatorString,
    value: false,
  },
];
export const INIT_STYLE: StylesMenu = {
  left: "-100vw",
};
