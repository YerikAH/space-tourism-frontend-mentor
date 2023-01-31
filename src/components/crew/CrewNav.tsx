import React from "react";
/* styles */
import { Navigation, NavigationOptions } from "../../styles/crew_styles";

/* Interface */
import { NavProps } from "../../interface/props";

export default function CrewNav({ options, handleClick }: NavProps) {
  return (
    <Navigation>
      {options.map((item) => (
        <NavigationOptions
          key={item.name}
          className={item.value ? "true" : "false"}
          value={item.name}
          onClick={(e) => handleClick(e)}
        />
      ))}
    </Navigation>
  );
}
