import React, { useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavsStates, useTheme } from '../Components/utils/global.context';

const Card = ({ name, username, id, btn }) => {
  //Estilos
  const { theme } = useTheme();
  const divStyle = theme === 'dark' ? 'bg-gray-200 text-black' : 'bg-blue-200';

  // Add odontologo a lista de favs
  const {dispatchFavs, favsState} = useFavsStates() 
  
  const addFav = () => {
    const isFavorite = favsState?.favs.some(fav => fav.id === id); // Check if the id exists in favorites
    if (!isFavorite) {
        dispatchFavs({ type: "addFavorites", payload: { name, username, id } });
        alert("Se agrego a favoritos")
    } else {
      console.log("Ya existe en favs");
    }
}
  // delete odontologo de la lista de favs
  const deleteFav = ()=> {
    dispatchFavs({type:"deleteFavorites", payload: { name, username, id }})
    alert("Se elimino de favoritos")
  }

  //
  const [optionBtn, setOptionBtn] = useState(true)

  useEffect(()=>{
    if (btn == "add") {
      setOptionBtn(true)
    }
    if (btn == "del") {
      setOptionBtn(false)
    }

  },[btn])

    return (
      <div to={`/detail/${id}`} className={`card ${divStyle} shadow-md`}>
          <Link to={`/detail/${id}`} className="flex flex-col text-center justify-center items-center p-4 gap-2">
            <img className="w-1/2 h-1/2" src="/images/doctor.jpg" alt="imagenDoctor" />
            <h4>{name}</h4>
            <h4><p className="font-bold">Username: </p>{username}</h4>
          </Link>
          {optionBtn? 
            <button onClick={addFav} className="favButton rounded-full bg-sky-500 hover:bg-sky-600 ...">Add fav</button>
          : 
            <button onClick={deleteFav} className="favButton rounded-full bg-sky-500 hover:bg-sky-600 ...">Del fav</button>
          }
      </div>
    );
};

export default Card;
