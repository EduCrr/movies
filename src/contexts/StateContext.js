import { createContext, useReducer, useContext, useEffect } from "react";
import FavoritosReducer from "../reducers/FavoritosReducer";

const initialState = {
  favoritos: FavoritosReducer(),
};

function mainReducer(state = initialState, action = {}) {
  return {
    favoritos: FavoritosReducer(state.favoritos, action),
  };
}
const localState = JSON.parse(localStorage.getItem("favoritos"));

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(state));
  }, [state]);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
