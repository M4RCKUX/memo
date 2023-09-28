
// src/components/FilePicker.jsx

import {useContext} from "react";
import {ContentContext} from "../context";


export const FilePicker = () => {

  const { dispatch } = useContext(ContentContext);

  const onRead = (e) => {
    const file = e.target.files[0];
    if (!file) {
      dispatch({type: 'SET_FILE_CONTENT', payload: ''});
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        dispatch({type: 'SET_FILE_CONTENT', payload: text});
      }
      reader.readAsText(file, 'UTF-8');
    }
  }

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 w-full my-4"
    >
      <input
        type="file"
        accept=".txt"
        className="mr-2"
        onChange={onRead}
      />

    </div>
  )
}

