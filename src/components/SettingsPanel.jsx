import React, {useContext} from "react";
import {ContentContext} from "../context/index.js";

export const SettingsPanel = () => {

  const { dispatch } = useContext(ContentContext);

  const onSliderChange = (e) => {
    const difficulty = e.target.value;
    dispatch({type: 'SET_RATIO', payload: difficulty});
  }

  const onReset = () => {
    dispatch({type: 'SET_CONTENT'});
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 w-full my-4">
      <div className="flex items-center">
        <label htmlFor="difficulty-slider" className="mr-4">Difficulty Level</label>
        <input
          id="difficulty-slider"
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="0.5"
          onChange={onSliderChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

