import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';
import {reducer} from '../../reducer/reducer'

// obtener favoritos del localStorage
const lsFavs = JSON.parse(localStorage.getItem("favoriteCards"))

export const initialState = { 
  favs: lsFavs === null ? [] : lsFavs, // get localStorage
  odontologos: [],
  theme: 'light', data: [] 
};

 // 
export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  // Cambio de tema
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  
  // Para renderizar el home. FavsState guarda la lista de Odontolgos para renderizar en Home y en Favs
  const [favsState, dispatchFavs] = useReducer(reducer, initialState);

  const getOdontologos = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    await dispatchFavs({type: "getFavorites", payload: data})
  }
  useEffect(()=>{
    getOdontologos()
  },[])

  // Para guardar en local storage
  useEffect(()=>{
    localStorage.setItem("favoriteCards", JSON.stringify(favsState.favs))
  },[favsState.favs])

  // Para eliminar en local storage
  


  return (
    <ContextGlobal.Provider value={{ theme, toggleTheme, favsState, dispatchFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Funcion para cambiar de tema dentro de los componentes
export const useTheme = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Context para acceder al state de odonotologos
export const useFavsStates = () => useContext(ContextGlobal)

export default ContextGlobal;


