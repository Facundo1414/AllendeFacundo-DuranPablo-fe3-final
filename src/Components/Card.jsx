import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const reducerFavs = (state, action)=> {
  switch(action.type){
    case 'addFavorites':

      const {name, username, id} = action.payload
      const newCard = {name, username , id}

      set
      return {

      }
    default:
      ""
  }
}

const Card = ({ name, username, id }) => {

  const [favoritos, dispatchFavoritos] = useReducer(reducerFavs, [{name:"", username:"", id:""}])
  const addFav = ()=>{
      // Aqui iria la logica para agregar la Card en el localStorage
      //dispatchFavoritos({type: "addFavorites", payload:{name,username,id}})
      
  }

  return (
    <div to={`/detail/${id}`} className="card">
        <Link to={`/detail/${id}`}>
          <img className="w-1/2 h-1/2" src="/images/doctor.jpg" alt="imagenDoctor" />
          <h4>Name: {name}</h4>
          <h4>Username: {username}</h4>
          <h4>ID: {id}</h4>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav()} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
