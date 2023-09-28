
// src/reducers/reducer.js

import {getObjectsFromText} from "../helpers/index.js";


export const initialState = {
  fileContent: '',
  content: [],
  ratio: 0.5,
  generation: 0,
  totalGaps: 0,
  correctGaps: 0,
  completed: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILE_CONTENT':
      return {
        ...state,
        fileContent: action.payload,
      }
    case 'SET_CONTENT':
      const content = getObjectsFromText(state.fileContent, state.ratio);
      const totalGaps = content.flat().filter(item => item.isHidden).length;
      return {
        ...state,
        content,
        totalGaps,
        correctGaps: 0,
        generation: state.generation + 1,
        completed: false,
      }
    case 'SET_RATIO':
      return {
        ...state,
        ratio: action.payload,
      }
    case 'SET_CORRECT_GAP':
      const id = action.payload;
      return {
        ...state,
        content: state.content.map(
          line => line.map(
            item => item.id === id ? {...item, isCorrect: true} : item
          )
        ),
        correctGaps: state.correctGaps + 1,
        completed: state.correctGaps + 1 === state.totalGaps,
      }
    default:
      return state;
  }
}

