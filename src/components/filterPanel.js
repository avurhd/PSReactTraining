import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterList } from "../store/selectors";
import { filterItemParams } from "../store/filters";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { FILTER_TYPES } from "../constants";

const FilterPanel = ({ value, label, property }) => {
  const { valueSelector, valueOnChange } = filterItemParams(value);
  const list = useSelector(filterList({ value, property }));
  const values = useSelector(valueSelector);
  const dispatch = useDispatch();
  const isChecked = (val) => values.indexOf(val) > -1;

  const handleOnChange = (item) => {
    let newValue;
    if (!isChecked(item)) {
      newValue = [...values, item];
    } else {
      newValue = values.filter((val) => val !== item);
    }
    dispatch(valueOnChange(newValue));
  };

  return (
    <Form className="filterItem__Wrapper">
      <h3>{label}</h3>

      <div>
        {list.map((item, index) => {
          return (
            <FormGroup key={"Filter_" + index} check>
              <Label check key={`${value}_${index}`}>
                <Input
                  type="checkbox"
                  checked={isChecked(item)}
                  onChange={() => handleOnChange(item)}
                />
                {item}
              </Label>
            </FormGroup>
          );
        })}
      </div>
    </Form>
  );
};

export const FilterList = () => {
  return (
    <div>
      <h1>Filters</h1>
      {FILTER_TYPES.map((filterItem, index) => {
        return (
          <FilterPanel key={`Filter_${index}`} {...filterItem}></FilterPanel>
        );
      })}
    </div>
  );
};
