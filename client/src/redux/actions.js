import { ALL_VIDEOGAMES, ALL_GENRES, ALL_PLATFORMS, GAME_BY_NAME, GAME_BY_ID, CREATE_GAME, CLEAR_DETAIL, 
    CLEAR_SEARCH, CLEAR_FILTER, FILTER_BY_ORIGIN, FILTER_BY_GENRE, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_BY_PLATFORMS } from "./actionTypes";


export function getAllVideogames () {
    return function (dispatch) {
        return fetch ('http://localhost:3001/videogames')
        .then (response => response.json())
        .then (videogames => dispatch({type: ALL_VIDEOGAMES, payload: videogames}))
        .catch (error => alert ('Sorry, I cant get all videogames, please reload', error.message));
    };
};

export function getGameName (name) {
    return function (dispatch) {
        return fetch (`http://localhost:3001/videogames?name=${name}`)
        .then (response => response.json())
        .then (game => dispatch({type: GAME_BY_NAME, payload: game}))
        .catch (error => dispatch({ type: GAME_BY_NAME, payload: error.message='Error' }));
    };
};

export function getGameId (id) {
    return function (dispatch) {
        return fetch (`http://localhost:3001/videogames/${id}`)
        .then (response => response.json())
        .then (gameId => dispatch({type: GAME_BY_ID, payload: gameId}))
        .catch (error => dispatch({ type: GAME_BY_ID, payload: error.message='Error' }));
    };
};

export function postNewGame (payload) {
    return function (dispatch) {
        return fetch ('http://localhost:3001/videogames', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then (response => response.json())
        .then (newGame => dispatch({type: CREATE_GAME, payload: newGame}))
        .catch (error => alert ('Sorry, I cant create your new game', error.message));
    };
};

export function getAllGenres () {
    return function (dispatch) {
        return fetch ('http://localhost:3001/genres')
        .then (response => response.json())
        .then (genres => dispatch({type: ALL_GENRES, payload: genres}))
        .catch (error => console.log (error));
    };
};

export function getAllPlatforms () {
    return function (dispatch) {
        return fetch ('http://localhost:3001/platforms')
        .then (response => response.json())
        .then (platforms => dispatch({type: ALL_PLATFORMS, payload: platforms}))
        .catch (error => console.log (error));
    };
};

export function filterByGenre(payload){
    return {
        type: FILTER_BY_GENRE,
        payload

    };

};

export function filterByPlatforms(payload){
    return {
        type: FILTER_BY_PLATFORMS,
        payload

    };

};

export function filterByOrigin(payload){
    return {
        type: FILTER_BY_ORIGIN,
        payload

    };
};

export function OrderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload

    };
};

export function OrderByRating(payload){
    return {
        type: ORDER_BY_RATING,
        payload

    };
};

export function clearFilter(){
    return {
        type: CLEAR_FILTER
    };
};

export function clearDetail(){
    return {
        type: CLEAR_DETAIL
    };
};

export function clearSearch(){
    return {
        type: CLEAR_SEARCH
    };
};