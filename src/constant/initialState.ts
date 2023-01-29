import { Crew, Destination, Home, Tech } from "../interface/data";

export const DESTINATION_INITIAL_STATE: Destination = {
  title: "",
  description: "",
  distance: "",
  time: "",
  image_path: "",
};
export const HOME_INITIAL_STATE: Home = {
  title: "",
  text: "",
  subtitle: "",
  button: "",
};

export const CREW_INITIAL_STATE: Crew = {
  name: "",
  description: "",
  image_path: "",
  job: "",
};

export const TECH_INITIAL_STATE: Tech = {
  name: "",
  description: "",
  image_path_mobile: "",
  image_path_desktop: "",
};
