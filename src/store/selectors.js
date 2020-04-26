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
  let list = [...state.characters.list];

  /* Name Filtering starts here */

  const { selected: selectedName = [], sortByID } = state.nameFilters;

  if (selectedName.length) {
    list = selectedName.reduce((pV, cV = "") => {
      const filteredList = list.filter(
        ({ name = "" }) => name.toLowerCase().indexOf(cV.toLowerCase()) > -1
      );
      return [...pV, ...filteredList];
    }, []);
  }
  /* Sort starts here */
  list.sort((a, b) => (a.id - b.id) * sortByID);
  return list;
};

export { filterList, filteredCharacterList };
