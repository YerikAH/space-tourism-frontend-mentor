export interface Home {
  title: string;
  subtitle: string;
  text: string;
  button: string;
}

export interface Destination {
  image_path?: string;
  title?: string;
  description?: string;
  distance?: string;
  time?: string;
}

export interface Crew {
  image_path?: string;
  name?: string;
  job?: string;
  description?: string;
}

export interface Tech {
  image_path: string;
  name: string;
  description: string;
}

export interface RootObject {
  home: Home[];
  destination: Destination[];
  crew: Crew[];
  tech: Tech[];
}
