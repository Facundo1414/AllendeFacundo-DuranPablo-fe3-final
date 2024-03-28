import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../Components/utils/global.context';

const Card = ({ name, username, id }) => {
  const { theme } = useTheme();
  const divStyle = theme === 'dark' ? 'bg-gray-200 text-black' : 'bg-blue-200';
  //const {dispatchFavoritos} = useProductStates();

  const addFav = () => {
    if ("ya existe el favorito ") {
      //dispatchFavoritos({type: "deleteFavorites" , payload: item.id});
    }
    else{
      //dispatchFavoritos({ type: "addFavorites", payload: { name, username, id } });
    }
  }

    return (
      <div to={`/detail/${id}`} className={`card ${divStyle} shadow-md`}>
          <Link to={`/detail/${id}`} className="flex flex-col text-center justify-center items-center p-4 gap-2">
            <img className="w-1/2 h-1/2" src="/images/doctor.jpg" alt="imagenDoctor" />
            <h4>{name}</h4>
            <h4><p className="font-bold">Username: </p>{username}</h4>
          </Link>
          <button onClick={addFav} className="favButton rounded-full bg-sky-500 hover:bg-sky-600 ...">Add fav</button>
      </div>
    );
};

export default Card;
