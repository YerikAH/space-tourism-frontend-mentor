import React from "react";

/* styles */
import { Navigation, NavigationOptions } from "../../styles/tech_styles";

/* interface */
import { NavProps } from "../../interface/props";

export default function TeachNav({ options, handleClick }: NavProps) {
  return (
    <Navigation>
      {options.map((item, i) => (
        <NavigationOptions
          key={item.name}
          className={item.value ? "true" : "false"}
          value={item.name}
          onClick={(e) => handleClick(e)}
        >
          {i + 1}
        </NavigationOptions>
      ))}
    </Navigation>
  );
}
