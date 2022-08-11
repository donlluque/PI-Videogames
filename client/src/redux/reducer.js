import { ALL_VIDEOGAMES, ALL_GENRES, ALL_PLATFORMS, GAME_BY_NAME, GAME_BY_ID, CREATE_GAME, FILTER_BY_PLATFORMS, 
    CLEAR_DETAIL, CLEAR_SEARCH, CLEAR_FILTER, FILTER_BY_ORIGIN, FILTER_BY_GENRE, ORDER_BY_NAME, ORDER_BY_RATING } from "./actionTypes";

const initialState = {
    videogames : [], // cards renderizadas siempre
    videogamesCopy : [], //copia que contiene todas y no se renderiza
    searchVideogame: [],
    searchVideogameCopy: [],
    gameDetails : [],
    genres : [],
    platforms : [],
};


export default function rootReducer (state = initialState, action){
    switch (action.type) {

        case ALL_VIDEOGAMES:

            return {
                ...state,
                videogames : action.payload,
                videogamesCopy : action.payload,
            }

        case ALL_GENRES:
            return {
                ...state,
                genres : action.payload,
            }

        case ALL_PLATFORMS:
            return {
                ...state,
                platforms : action.payload,
            }

        case GAME_BY_NAME:
            return {
                ...state, 
                searchVideogame : action.payload,
                searchVideogameCopy : action.payload,
            }

        case GAME_BY_ID:
            return {
                ...state, 
                gameDetails: action.payload,
            }
            
        case CREATE_GAME:
            return {
                ...state,
            }

        case CLEAR_DETAIL:
            return {
                ...state,
                gameDetails: [],
            }

        case CLEAR_SEARCH:
            return {
                ...state,
                searchVideogame: [],
                searchVideogameCopy: [],
            }

        case CLEAR_FILTER:
            return {
                ...state,
                videogamesCopy: state.videogames,
                searchVideogameCopy: state.searchVideogame
            }

        //------------------------------------------------------------------------------------
        case FILTER_BY_PLATFORMS:
            const filter = action.payload;
            let filterPlatform = [];
            let filterPlatformSearch = [];

            if (filter === 'all') {
                return {
                    ...state,
                    videogamesCopy: state.videogames,
                    searchVideogameCopy: state.searchVideogame
                }
            }
            
            // recorre el arreglo que tiene todos los videojuegos
            for(let i=0; i<state.videogames.length; i++){
        
                const videogame = state.videogames[i]; 
                //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
                for(let j=0; j<videogame.platforms.length; j++){
                    if(videogame.platforms[j].name.toLowerCase().includes(filter.toLowerCase())){
                        filterPlatform.push(videogame);
                        break;
                    }
                }
            }

            // recorre el arreglo que tiene todos los videojuegos
            for(let i=0; i<state.searchVideogame.length; i++){
        
                const videogame = state.searchVideogame[i]; 
                //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
                for(let j=0; j<videogame.platforms.length; j++){
                    if(videogame.platforms[j].name.toLowerCase().includes(filter.toLowerCase())){
                        filterPlatformSearch.push(videogame);
                        break;
                    }
                }
            }

            return {
              ...state,
              videogamesCopy: filterPlatform,
              searchVideogameCopy: filterPlatformSearch
            }
        //------------------------------------------------------------------------------------
        case FILTER_BY_GENRE:
            const filter1 = action.payload;
            let filterGenre = [];
            let filterGenreSearch = [];

            if (filter1 === 'all') {
                return {
                    ...state,
                    videogamesCopy: state.videogames,
                    searchVideogameCopy: state.searchVideogame
                }
            }
            
            // recorre el arreglo que tiene todos los videojuegos
            for(let i=0; i<state.videogames.length; i++){
        
                const videogame = state.videogames[i]; 
                //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
                for(let j=0; j<videogame.genres.length; j++){
                    if(videogame.genres[j].name.toLowerCase().includes(filter1.toLowerCase())){
                        filterGenre.push(videogame);
                        break;
                    }
                }
            }

            // recorre el arreglo que tiene todos los videojuegos
            for(let i=0; i<state.searchVideogame.length; i++){
        
                const videogame = state.searchVideogame[i]; 
                //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
                for(let j=0; j<videogame.genres.length; j++){
                    if(videogame.genres[j].name.toLowerCase().includes(filter1.toLowerCase())){
                        filterGenreSearch.push(videogame);
                        break;
                    }
                }
            }

            return {
              ...state,
              videogamesCopy: filterGenre,
              searchVideogameCopy: filterGenreSearch
            }
        //-------------------------------------------------------------------------------------        
        case FILTER_BY_ORIGIN:
            const filter2 = action.payload;
            let filterOrigin;
            let filterOriginSearch;

            if (filter2 === 'all') {
                return {
                    ...state,
                    videogamesCopy: state.videogames,
                    searchVideogameCopy: state.searchVideogame
                }
            }

            filterOrigin = state.videogames.filter (game=> {

                if (filter2 === 'api'){
                    
                    // si es de la API (3456)
                    if (!isNaN(Number(game.id))){
                        return true
                    } else {
                        return false
                    }
                    
                } else {
                    // si es de la DB (ertty-567jj)
                    if (isNaN(Number(game.id))){
                        return true
                    } else {
                        return false
                    }
                }
                
            }) 

            filterOriginSearch = state.searchVideogame.filter (game=> {

                if (filter2 === 'api'){
                    
                    // si es de la API (3456)
                    if (!isNaN(Number(game.id))){
                        return true
                    } else {
                        return false
                    }
                    
                } else {
                    // si es de la DB (ertty-567jj)
                    if (isNaN(Number(game.id))){
                        return true
                    } else {
                        return false
                    }
                }           
            }) 

            return {
                ...state,
                videogamesCopy: filterOrigin,
                searchVideogameCopy: filterOriginSearch
            };
        //-----------------------------------------------------------------------------------
        case ORDER_BY_NAME:
            const order = action.payload;
            let orderName;
            let orderNameSearch

            if (order === 'all') {
                return {
                    ...state,
                    videogamesCopy: state.videogames,
                    searchVideogameCopy: state.searchVideogame
                }
            }

            if (order === 'asc') {
                orderNameSearch = [...state.searchVideogame].sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (order === 'des') {
                orderNameSearch = [...state.searchVideogame].sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            }

            if (order === 'asc') {
                orderName = [...state.videogames].sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (order === 'des') {
                orderName = [...state.videogames].sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            }
            return {
                ...state,
                searchVideogameCopy: orderNameSearch,
                videogamesCopy: orderName,
            }
        //---------------------------------------------------------------------------------
        case ORDER_BY_RATING:
            const order2 = action.payload;
            let orderRating;
            let orderRatingSearch;

            if (order2 === 'all') {
                return {
                    ...state,
                    videogamesCopy: state.videogames,
                    searchVideogameCopy: state.searchVideogame
                }
            }

            if (order2 === 'low') {
                orderRatingSearch = [...state.searchVideogame].sort(function(a, b) {
                    return a.rating - b.rating
                })
                orderRating = [...state.videogames].sort(function(a, b) {
                    return a.rating - b.rating
                })
            }
            if (order2 === 'high') {
                orderRatingSearch = [...state.searchVideogame].sort(function(a, b) {
                    return b.rating - a.rating
                })
                orderRating = [...state.videogames].sort(function(a, b) {
                    return b.rating - a.rating
                })
            }
            return {
                ...state,
                searchVideogameCopy: orderRatingSearch,
                videogamesCopy: orderRating,
            }

        default: 
            return {
                ...state
            }
    }
};