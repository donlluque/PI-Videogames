// FUNCION COMPLETA JUNTA

// function filterArray(array, filter, search){

//     // sólo si tengo busqueda saco los que no coincidan
//     if(search && search.length){
//         
//         array = array.filter(e => e.name.toLowerCase().includes(search));
//     }

//     const filters = [];
//     // retorno las coincidencias
//     // recorre el arreglo que tiene todos los videojuegos
//     for(let i=0; i<array.length; i++){

//         const receta = array[i]; 

//         //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
//         for(let j=0; j<receta.diets.length; j++){

//             // // si es de la DB (ertty-567jj)
//             if(isNaN(Number(receta.id))){
//                 if(receta.diets[j].name.toLowerCase().includes(filter)){
//                     filters.push(receta);
//                     break;
//                 }
//                 
//             } else { // si es de la API (3456)

//                 if(receta.diets[j].toLowerCase().includes(filter)){
//                     filters.push(receta);
//                     break;
//                 }
//                 //console.log(receta.diets[j]);
//             }
//         }
//     }
//     return filters;
// }

//------------------------------------------------------------------------------


// FUNCIONES SEPARADAS

// function filterArray(array, filter, search){

//     if(search && search.length){
//         array = array.filter(e => e.name.toLowerCase().includes(search));
//     }

//     const filters = [];
//     // retorno las coincidencias
//     // recorre el arreglo que tiene todos los videojuegos
//     for(let i=0; i<array.length; i++){
        
//         const videogame = array[i]; 

//         //recorre al arreglo pasado en cada uno de los generos contenidos en los videojuegos
//         for(let j=0; j<videogame.genres.length; j++){
//             if(videogame.genres[j].name.toLowerCase().includes(filter)){
//                 filters.push(videogame);
//                 break;
//             }
//         }
//         return filters;
//     }   
// }

//------------------------------------------------------------------

// function filterArray2(array, filter, search){

//     if(search && search.length){
//         array = array.filter(e => e.name.toLowerCase().includes(search));
//     }

//     return array.filter (game=> {
//         console.log(game)
//         if (filter === 'api'  ){
            
//             // si es de la API (3456)
//             if (!isNaN(Number(game.id))){
//                 return true
//             } else {
//                 return false
//             }
            
//         } else {
//             // si es de la DB (ertty-567jj)
//             if (isNaN(Number(game.id))){
//                 return true
//             } else {
//                 return false
//             }
//         }

//     }) 
// }

//------------------------------------------------------------------

// function alfabeticAZ (a, b){
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
//     return 0;
// };

// function alfabeticZA (a, b){
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
//     return 0;
// };

// function mayorMenor (a, b){
//     return a - b
// };

// function menorMayor (a, b){
//     return b - a
// };