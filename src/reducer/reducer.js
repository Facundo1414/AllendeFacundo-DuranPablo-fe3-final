export const reducer = (state, action)=> {
    switch(action.type){
        case "getFavorites":
            return {...state, odontologos: action.payload}
        case 'addFavorites':
            return {...state, favs: [...state.favs, action.payload]};

        case 'deleteFavorites':
            const item = action.payload;
            const favs =  {...state, odontologos: action.payload}
            return

        case "changeTheme":
            return {}
        default:
            return state;
    }
}
