
// src/context/ContentProvider.jsx

import {ContentContext} from "./";
import {useReducer} from "react";
import {initialState, reducer} from "../reducers";


export const ContentProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContentContext.Provider value={{
      state,
      dispatch,
    }}>
      { children }
    </ContentContext.Provider>
  )
}

