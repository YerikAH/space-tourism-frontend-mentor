import React from "react";
import { DestinationNavProps } from "../../interface/Props";
import { Navigation, NavigationOptions } from "../../styles/destination_style";

export default function DestinationNav({
  options,
  handleClick,
}: DestinationNavProps) {
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