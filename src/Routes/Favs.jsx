import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useFavsStates, useTheme } from '../Components/utils/global.context';

const Favs = () => {
  //Estilos
  const { theme } = useTheme();
  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';

  // Lista de ondontologos favoritos
  const {favsState} = useFavsStates()

  return (
    <div className={`${mainStyle} h-screen p-12 space-y-5`}>
      <h1 className="text-2xl font-bold font-mono">FAVORITES</h1>
      <div className="card-grid">
        {favsState.favs?.map((fav) => <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} btn={"del"}/>)}
      </div>
    </div>
  );
};

export default Favs;
