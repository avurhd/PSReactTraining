import React from "react";
import { useSelector } from "react-redux";
import { filteredCharacterList } from "../store/selectors";
import { Row, Col } from "reactstrap";

export const CharacterList = () => {
  const list = useSelector(filteredCharacterList);

  return (
    <Row>
      {list.map((item) => {
        return (
          <Col xs={12} md={4} key={item.id}>
            {item.name}
          </Col>
        );
      })}
    </Row>
  );
};
