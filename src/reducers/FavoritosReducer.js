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

  switch (action.type) {
    case "addFav":
      let newFav = [...state.favoritosMovies];
      addData(newFav);
      return { ...state, favoritosMovies: newFav };
      break;

    case "remove":
      let listFav = [...state.favoritosMovies];
      let newFavList = listFav.filter((item) => item.id !== action.id);
      return { ...state, favoritosMovies: newFavList };
      break;

    //serie

    case "addFavSerie":
      let newSer = [...state.favoritosSeries];
      addData(newSer);
      return { ...state, favoritosSeries: newSer };
      break;

    case "removeSerie":
      let listSerie = [...state.favoritosSeries];
      let newSerieList = listSerie.filter((item) => item.id !== action.id);
      return { ...state, favoritosSeries: newSerieList };
      break;
  }
  return state;
}
