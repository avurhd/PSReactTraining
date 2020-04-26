import React from "react";
import { FilterList } from "./filterPanel";
import { CharacterList } from "./characterList";
import { NameSearch } from "./nameSearch";
import { Container, Row, Col } from "reactstrap";
export const Wrapper = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <FilterList />
        </Col>

        <Col xs={12} md={8}>
          <NameSearch />
          <CharacterList />
        </Col>
      </Row>
    </Container>
  );
};
