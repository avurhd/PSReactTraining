import React from "react";
import { FilterPanel } from "./filterPanel";
import {FILTER_TYPES} from "../constants";
export const Wrapper = () => {
  
  return (
    <div>
      {FILTER_TYPES.map((filterItem, index) => {
        return (
          <FilterPanel key={`Filter_${index}`} {...filterItem}></FilterPanel>
        );
      })}
    </div>
  );
};
