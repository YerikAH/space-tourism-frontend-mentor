export interface Home {
  title: string;
  subtitle: string;
  text: string;
  button: string;
}

export interface Planet {
  image_path: string;
  title: string;
  description: string;
  distance: string;
  time: string;
}

export interface Destination {
  moon: Planet;
  mars: Planet;
  europa: Planet;
  titan: Planet;
}

export interface Person {
  image_path: string;
  name: string;
  job: string;
  description: string;
}

export interface Crew {
  douglas_hurley: Person;
  mark_shuttleworth: Person;
  victor_glover: Person;
  anousheh_ansari: Person;
}

export interface TechChild {
  image_path: string;
  name: string;
  description: string;
}

export interface Tech {
  launch_vehicle: TechChild;
  space_port: TechChild;
  space_capsule: TechChild;
}

export interface RootObject {
  home: Home;
  destination: Destination;
  crew: Crew;
  tech: Tech;
}
