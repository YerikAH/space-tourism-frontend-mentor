import React from "react";
import { NavProps } from "../../interface/props";
import { Navigation, NavigationOptions } from "../../styles/tech_styles";

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
