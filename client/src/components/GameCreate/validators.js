
//Regular Expressions Validators
/* eslint-disable */

// Corroborar si la fecha ingresada tiene formato valido
export function isValidDate(str) {
	const regexDate = /^[1-2][089]\d{2}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
	return regexDate.test(str);
};

// Corroborar si la URL es para ingresar una imagen valida
export function isURL(str) {
	const regexURL = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
	return regexURL.test(str);
};

// Corroborar si el input tiene caracteres especiales
export function hasSpecialChars(str) {
	const regexSpecialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
	return regexSpecialChars.test(str);
};

export function validate(input){
    let error = {};

    if(!input.name){
        error.name = 'Name is required';
    } else if(hasSpecialChars(input.name)){
        error.name = 'Name may not contain special characters' 
    } else if(input.name.trim() === ''){
        error.name = 'Name may not be empty'
    } else if(input.name.length > 50 || input.name.length < 3){
        error.name = 'Name must have more tht 3 and less than 50 characters'
    };

    if(!input.description){
        error.description = 'Description is required';
    } else if(input.description.length < 10){
        error.description = 'Description must be longer';
    } else if(input.description.length > 300){
        error.description = 'Description can only have max 300 characters'
    } else if(input.description.trim() === ''){
        error.description = 'Description may not be empty'
    }

    if(isValidDate(input.released === false)) {
        error.released = 'Invalid date'
    } else if(!input.released){
        error.released = 'Invalid date'
    };

    if(input.rating > 5){
        error.rating = 'Rating must be lower than 5'
    } else if(input.rating < 0){
        error.rating = 'Invalid rating value'
    } else if (isNaN(parseInt(input.rating))){
        error.rating = 'only Numbers allowed'
    };

    if(input.image){
        if(isURL(input.image) === false) {
            error.image = 'Invalid URL'
		};
    };

    if(input.genres.length < 1){
        error.genres = 'You have to choose at least one genre'
    };
	if(input.genres.length > 3){
        error.genres = 'You have to choose less than three genres'
    };

    if(input.platforms.length < 1){
        error.platforms = 'You have to choose at least one platform'
    };
	if(input.platforms.length > 3){
        error.platforms = 'You have to choose less than three platforms'
    };


    return error
};