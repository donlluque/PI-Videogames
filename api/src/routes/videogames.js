const { Router } = require('express');
const router = Router();
const { Videogame, Genre, Platform } = require('../db.js');
const { allVideogames, videogamesByName, videogamesById } = require ('./controllers.js')


// PRUEBA DE FUNCIONAMIENTO DE RUTA
router.get('/', async (req, res, next) => {

    try {
        res.status(200).send('Prueba de ruta OK')
    } catch (error) {
        next(error);
    }
    
});


// GET TODOS LOS VIDEOGAMES O HASTA 15 VIDEOGAMES POR NOMBRE
router.get('/videogames', async (req, res, next) => {
    const { name } = req.query;

    try {

        if(name){
            const gamesByName = await videogamesByName(name.toLowerCase());

            if (gamesByName.some(game => game.name)){ 
                return res.status(200).json(gamesByName)
            } else {
                return res.status(400).send('Error')
            }
        } else {
            return res.status(200).json(await allVideogames());
        }
        
    } catch (error) {
        next(error);
    }

});


// GET UN VIDEOGAME POR ID
router.get('/videogames/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
       return res.status(200).json(await videogamesById(id));
        
    } catch (error) {
        next(error);
    }

});


// POST UN VIDEOGAME EN LA DB
router.post('/videogames', async (req, res, next) => {
    const { name, description, released, rating, platforms, image, genres } = req.body;
    if (!name || !description || !platforms || !genres) res.status(400).send('Sorry, I need more videogame data');

    try {
        let newVideogame = await Videogame.create({ ...req.body });

        const genreDb = await Genre.findAll({ where: { name: genres }});
        await newVideogame.addGenre(genreDb);

        const platformDb = await Platform.findAll({ where: { name: platforms }});
        
        await newVideogame.addPlatforms(platformDb);

        res.status(200).json(newVideogame);

    } catch (error) {
        next(error);
    }

});



module.exports = router;