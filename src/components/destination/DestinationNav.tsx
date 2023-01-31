import React from "react";
/* styles */
import { Navigation, NavigationOptions } from "../../styles/destination_style";

/* interface */
import { NavProps } from "../../interface/props";

export default function DestinationNav({ options, handleClick }: NavProps) {
  return (
    <Navigation>
      {options.map((item) => (
        <NavigationOptions
          key={item.name}
          className={item.value ? "true" : "false"}
          value={item.name}
          onClick={(e) => handleClick(e)}
        >
          {item.name}
        </NavigationOptions>
      ))}
    </Navigation>
  );
}
