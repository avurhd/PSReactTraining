import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedNames,
  nameFilterInput,
  addSelected,
  deleteSelected,
  updateInput,
} from "../store/nameFilters";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const NameSearch = () => {
  const names = useSelector(selectedNames);
  const nameValue = useSelector(nameFilterInput);
  const dispatch = useDispatch();
  const submitNameSearch = () => {
    dispatch(addSelected(nameValue));
    dispatch(updateInput(""));
  };
  const deleteName = (name) => {
    dispatch(deleteSelected(name));
  };
  return (
    <>
      <div>
        <h1> Selected Filters</h1>
      </div>
      <div>
        <ul>
          {names.map((item, index) => {
            return (
              <li key={"name_" + index}>
                {item}
                <span onClick={() => deleteName(item)}> X</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="char_name_search" className="mr-sm-2">
              Search By Name
            </Label>
            <Input
              type="text"
              name="char_name"
              id="char_name_search"
              value={nameValue}
              onChange={(e) => {
                dispatch(updateInput(e.target.value));
              }}
              placeholder=""
            />
          </FormGroup>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              submitNameSearch();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
