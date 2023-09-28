
// src/components/WordInput.jsx

import {useContext, useEffect, useRef, useState} from "react";
import {ContentContext} from "../context";

export const WordInput = ({item}) => {

  const { dispatch } = useContext(ContentContext);

  const { id, word, isCorrect} = item;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleDoubleClick = () => {
    setInputValue(word);
  }

  useEffect(() => {
    if (word === inputValue) {
      dispatch({type: 'SET_CORRECT_GAP', payload: id});
    }
  }, [inputValue]);

  return (
    <input
      type="text"
      className={
        `p-1 rounded-md mr-2
        bg-white text-gray-800
        dark:bg-gray-700 dark:text-gray-200 border-2
        ${isCorrect? 'border-green-500': 'border-gray-800 dark:border-gray-200'} 
        `
      }
      size={item.word.length}
      value={inputValue}
      disabled={isCorrect}
      onChange={handleChange}
      onDoubleClick={handleDoubleClick}
    />
  )
}

