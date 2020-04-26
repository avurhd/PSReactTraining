import React from "react";
import { useSelector } from "react-redux";
import { filteredCharacterList } from "../store/selectors";
import { Row, Col } from "reactstrap";

export const Character = ({ item }) => {
  return (
    <article className="characterCard__Wrapper">
      <div data="card header" className="characterCard__ImgWrapper">
        <div className="card-image">
          <img
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="characterCard__Title">
          <h2 className="characterCard__Title__Name">{item.name}</h2>
          <p className="characterCard__Title__Description">
            id: {item.id} - created 2 years ago
          </p>
        </div>
      </div>
      <div data="card info" className="characterCard__InfoWrapper">
        <div className="characterCard__TextWrapper">
          <span>STATUS</span>
          <p>{item.status}</p>
        </div>
        <div className="characterCard__TextWrapper">
          <span>SPECIES</span>
          <p>{item.species}</p>
        </div>
        <div className="characterCard__TextWrapper">
          <span>GENDER</span>
          <p>{item.gender}</p>
        </div>
        <div className="characterCard__TextWrapper">
          <span>ORIGIN</span>
          <p>{item.origin && item.origin.name}</p>
        </div>
        <div className="characterCard__TextWrapper">
          <span>LAST LOCATION</span>
          <p>{item.location && item.location.name}</p>
        </div>
      </div>
    </article>
  );
};

export const CharacterList = () => {
  const list = useSelector(filteredCharacterList);

  return (
    <div className="characterCard">
      {list.map((item) => {
        return <Character key={item.id} item={item} />;
      })}
    </div>
  );
};
