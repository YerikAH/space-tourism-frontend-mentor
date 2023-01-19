import { DataDestination, MenuDestination } from "../interface/interface";
import moon from "../../assets/destination/image-moon.png";

export const DESTINATION_OPTIONS: MenuDestination[] = [
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
export const INITIAL_STATE_DESTINATION: DataDestination = {
  imagePath: moon,
  title: "MOON",
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  time: "3 days",
};
