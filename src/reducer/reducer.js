const reducerFavs = (state, action)=> {
    switch(action.type){
        case 'addFavorites':
            const { name, username, id } = action.payload;
            const newCard = { name, username, id };
            // Agregar lógica para guardar en el localStorage
            const updatedFavs = [...state, newCard];
            localStorage.setItem('favoriteCards', JSON.stringify(updatedFavs));
            return updatedFavs;

        case 'deleteFavorites':
            const item = action.payload;
            localStorage.removeItem('favoriteCards', JSON.stringify(item))
            return
        default:
            return state;
    }
}
