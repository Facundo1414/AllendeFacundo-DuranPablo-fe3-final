export const reducer = (state, action)=> {
    switch(action.type){
        case "getFavorites":
            return {...state, odontologos: action.payload}
        case 'addFavorites':
            return {...state, favs: [...state.favs, action.payload]};

        case 'deleteFavorites':
            const item = action.payload;
            const favs = state.favs.filter(fav => fav.id !== item.id); // Filtrar los favoritos para excluir el ítem a eliminar
            
            return {...state, favs}; // Devolver el nuevo estado con la lista de favoritos actualizada

        case "changeTheme":
            return {}
        default:
            return state;
    }
}
