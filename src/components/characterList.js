import React from "react";
import { useSelector } from "react-redux";
import { filteredCharacterList } from "../store/selectors";
import { Row, Col } from "reactstrap";

export const Character = ({ item }) => {
  return (
    <article class="characterCard__Wrapper">
      <div data="card header" class="characterCard__ImgWrapper">
        <div class="card-image">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/62.jpeg"
            alt="Canklanker Thom"
          />
        </div>
        <div class="characterCard__Title">
          <h2 class="characterCard__Title__Name">Canklanker Thom</h2>
          <p class="characterCard__Title__Description">
            id: 62 - created 2 years ago
          </p>
        </div>
      </div>
      <div data="card info" class="characterCard__InfoWrapper">
        <div class="characterCard__TextWrapper">
          <span>STATUS</span>
          <p>Dead</p>
        </div>
        <div class="characterCard__TextWrapper">
          <span>SPECIES</span>
          <p>Alien, Gromflomite</p>
        </div>
        <div class="characterCard__TextWrapper">
          <span>GENDER</span>
          <p>Male</p>
        </div>
        <div class="characterCard__TextWrapper">
          <span>ORIGIN</span>
          <p>Gromflom Prime</p>
        </div>
        <div class="characterCard__TextWrapper">
          <span>LAST LOCATION</span>
          <p>unknown</p>
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
