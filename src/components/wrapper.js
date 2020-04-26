import React from "react";
import { FilterPanel } from "./filterPanel";

export const Wrapper = () => {
  const filters = [
    { value: "species", label: "Species" },
    { value: "gender", label: "Gender" },
    { value: "origin", label: "Origin", property: "name" },
  ];
  return (
    <div>
      {filters.map((filterItem, index) => {
        return (
          <FilterPanel key={`Filter_${index}`} {...filterItem}></FilterPanel>
        );
      })}
    </div>
  );
};
