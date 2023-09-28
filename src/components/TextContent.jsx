
// src/components/TextContent.jsx

import {useContext, useEffect} from "react";
import {Line} from "./";
import {ContentContext} from "../context";

export const TextContent = () => {

  const {state, dispatch} = useContext(ContentContext);

  useEffect(() => {
    dispatch({type: 'SET_CONTENT'});
  }, [state.fileContent]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 w-full my-4">
      <div className="text-gray-800 dark:text-gray-200">
        {
          state.content.map((line, index) => (
            <Line generation={state.generation} key={`generation-${state.generation}-line-${index}`} lineIndex={index} line={line} />
          ))
        }
      </div>
    </div>
  )
}

