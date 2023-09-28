
// src/components/ScorePanel.jsx

import { useContext } from 'react';
import { ContentContext } from '../context';

export const ScorePanel = () => {
  const { state } = useContext(ContentContext);

  return (
    <div className="score-panel bg-white dark:bg-gray-800 shadow-md rounded-md p-4 w-full my-4">
      <div className="text-gray-800 dark:text-gray-200">
        <p className="text-lg font-semibold">Correctas: {state.correctGaps} de {state.totalGaps}</p>
      </div>
    </div>
  );
};
