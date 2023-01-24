import React from "react";
import { NavProps } from "../../interface/props";
import { Navigation, NavigationOptions } from "../../styles/destination_style";

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
