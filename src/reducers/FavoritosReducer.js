const initialState = {
  favoritosMovies: [],
  favoritosSeries: [],
};

export default function FavoritosReducer(state = initialState, action = {}) {
  function addData(info) {
    let index = info.findIndex((item) => item.id === action.add.id);
    if (index > -1) {
      alert("Filme já adicionado!");
    } else {
      info.push(action.add);
    }
  }

  function RemoveData(info) {
    let newFavList = info.filter((item) => item.id !== action.id);
    return newFavList;
  }

  switch (action.type) {
    case "addFav":
      let newFav = [...state.favoritosMovies];
      addData(newFav);
      return { ...state, favoritosMovies: newFav };
      break;

    case "remove":
      let listFav = [...state.favoritosMovies];
      let newListFav = RemoveData(listFav);
      return { ...state, favoritosMovies: newListFav };
      break;

    //serie

    case "addFavSerie":
      let newSer = [...state.favoritosSeries];
      addData(newSer);
      return { ...state, favoritosSeries: newSer };
      break;

    case "removeSerie":
      let listSerie = [...state.favoritosSeries];
      let newListFavSerie = RemoveData(listSerie);

      return { ...state, favoritosSeries: newListFavSerie };
      break;
  }
  return state;
}
