import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useTheme } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const { theme } = useTheme();
  const mainStyle = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';



  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favoriteCards'));
    if (storedFavs) {
      setFavoriteCards(storedFavs);
    }
  }, []);
  return (
    <div className={`${mainStyle} h-screen`}>
      <h1 className="text-2xl">Dentists Favs</h1>
      <div className="card-grid">
        {favoriteCards.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
          ))}
      </div>
    </div>
  );
};

export default Favs;
