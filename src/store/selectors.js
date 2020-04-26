import { FILTER_TYPES } from "../constants";

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

  const { selected: selectedNames = [], sortByID } = state.nameFilters;
  /* Filters Start here */
  const selectedFilters = FILTER_TYPES.filter(
    ({ value }) => (state.filters[value] || []).length
  );
  /* list = list.filter((item)=>{
    let allowed = true;
      selectedFilters.forEach((value, property="")=>{
        const itemProperty = property ? item[value][property] : item[value];
        if((state.filters)[value].indexOf(itemProperty)<=-1){
          allowed = false;
        }
      })
    return allowed
  }) */
  /* Name Filtering starts here */
  if (selectedNames.length) {
    list = selectedNames.reduce((pV, cV = "") => {
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
