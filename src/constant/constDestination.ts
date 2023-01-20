/* interface */
import { DataDestination, MenuDestination } from "../interface/interface";

/* images */
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

export const DESTINATION_OPTIONS: MenuDestination[] = [
  {
    name: "moon",
    value: true,
    page: "moon",
  },
  {
    name: "mars",
    value: false,
    page: "mars",
  },
  {
    name: "europa",
    value: false,
    page: "europa",
  },
  {
    name: "titan",
    value: false,
    page: "titan",
  },
];

export const MOON_DESTINATION: DataDestination = {
  imagePath: moon,
  title: "MOON",
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  time: "3 days",
};
export const MARS_DESTINATION: DataDestination = {
  imagePath: mars,
  title: "MARS",
  description:
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  distance: "225 MIL. km",
  time: "9 months",
};
export const EUROPA_DESTINATION: DataDestination = {
  imagePath: europa,
  title: "EUROPA",
  description:
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin..",
  distance: "628 MIL. km",
  time: "3 years",
};
export const TITAN_DESTINATION: DataDestination = {
  imagePath: titan,
  title: "TITAN",
  description:
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 BIL. km",
  time: "7 years",
};
