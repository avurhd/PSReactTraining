const filterList = ({ value, property }) => (state) => {
  return [
    ...new Set(
      state.characters.list.map((item) =>
        property ? item[value][property] : item[value]
      )
    ),
  ];
};

const filteredCharacterList = (state) => {
  return state.characters.list;
};

export { filterList, filteredCharacterList };
