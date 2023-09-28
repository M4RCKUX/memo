
// src/components/Header.jsx

import {useContext, useEffect} from "react";
import {ContentContext} from "../context";
import Swal from "sweetalert2";

export const Header = () => {

  const { state, dispatch } = useContext(ContentContext);

  useEffect(() => {
    if (state.completed) {
      Swal.fire({
        title: '¡Felicidades!',
        text: `Has completado el ejercicio`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Otra vez',
        cancelButtonText: 'No gracias',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({type: 'SET_CONTENT'});
        }
      });
    }
  }, [state.completed]);

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white dark:text-gray-200 p-4">
      <h1 className="text-2xl">MemoApp</h1>
    </header>
  );
};

