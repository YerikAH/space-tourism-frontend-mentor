import { RootObject } from "../interface/data";

export const DATA_INITIAL_STATE: RootObject = {
  home: {
    title: "",
    subtitle: "",
    text: "",
    button: "",
  },
  destination: {
    moon: {
      image_path: "",
      title: "",
      description: "",
      distance: "",
      time: "",
    },
    mars: {
      image_path: "",
      title: "",
      description: "",
      distance: "",
      time: "",
    },
    europa: {
      image_path: "",
      title: "",
      description: "",
      distance: "",
      time: "",
    },
    titan: {
      image_path: "",
      title: "",
      description: "",
      distance: "",
      time: "",
    },
  },
  crew: {
    douglas_hurley: {
      image_path: "",
      name: "",
      job: "",
      description: "",
    },
    mark_shuttleworth: {
      image_path: "",
      name: "",
      job: "",
      description: "",
    },
    victor_glover: {
      image_path: "",
      name: "",
      job: "",
      description: "",
    },
    anousheh_ansari: {
      image_path: "",
      name: "",
      job: "",
      description: "",
    },
  },
  tech: {
    launch_vehicle: {
      image_path: "",
      name: "",
      description: "",
    },
    space_port: {
      image_path: "",
      name: "",
      description: "",
    },
    space_capsule: {
      image_path: "",
      name: "",
      description: "",
    },
  },
};
