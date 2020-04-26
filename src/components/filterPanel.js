import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterList } from "../store/selectors";
export const FilterPanel = ({ value, label, property }) => {
  const list = useSelector(filterList({ value, property }));
  return (
    <div>
      <h1>{label}</h1>
      <ul>
        {list.map((item, index) => {
          return <li key={`${value}_${index}`}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
