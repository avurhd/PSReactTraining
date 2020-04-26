import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedNames,
  nameFilterInput,
  addSelected,
  deleteSelected,
  updateInput,
  updateSortByID,
  sortByID,
  SORT_BY_TYPES,
} from "../store/nameFilters";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export const NameSearch = () => {
  const names = useSelector(selectedNames);
  const nameValue = useSelector(nameFilterInput);
  const sortByIDValue = useSelector(sortByID);
  const dispatch = useDispatch();
  const submitNameSearch = () => {
    dispatch(addSelected(nameValue));
    dispatch(updateInput(""));
  };
  const deleteName = (name) => {
    dispatch(deleteSelected(name));
  };
  return (
    <div className="nameFilter__Wrapper mt-2 mt-md-0">
      <div>
        <h1> Selected Filters</h1>
      </div>
      <div>
        <div className="chips">
          {names.map((item, index) => {
            return (
              <div key={"name_" + index} className="chips__item">
                {item}
                <span
                  onClick={() => deleteName(item)}
                  className="chips__item__del"
                >
                  {" "}
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Row>
        <Col xs={12} lg={8}>
          <Form inline className="nameFilter__FormInline">
            <FormGroup className="mb-2 mt-2 mb-sm-0">
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
                className=" mr-0 mr-sm-2 mb-2 mb-sm-0"
              />

              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  submitNameSearch();
                }}
              >
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={12} lg={4}>
          <Form>
            <FormGroup>
              <Label>Sort By ID</Label>
              <Input
                type="select"
                name="select"
                value={sortByIDValue}
                onChange={(e) => {
                  dispatch(updateSortByID(Number(e.target.value)));
                }}
              >
                <option value={SORT_BY_TYPES.ASC}>Ascending</option>
                <option value={SORT_BY_TYPES.DESC}>Descending</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
