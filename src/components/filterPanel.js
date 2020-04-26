import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterList } from "../store/selectors";
import { filterItemParams } from "../store/filters";
import { Form, FormGroup, Label, Input } from "reactstrap";
export const FilterPanel = ({ value, label, property }) => {
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
    <Form>
      <h3>{label}</h3>

      <ul>
        {list.map((item, index) => {
          return (
            <FormGroup check>
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
      </ul>
    </Form>
  );
};
