const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db.js');
const { Op } = require ('sequelize');
const { API_KEY } = process.env;


async function allVideogames() {

    const apiGames = [];
    let url = `http://api.rawg.io/api/games?key=${API_KEY}`;
    for (let i = 1; i <= 5; i++) {
        let pages = await axios.get(url);

        pages.data?.results.forEach((game) => {
            apiGames.push({
                id: game.id,
                name: game.name,
                rating: game.rating,
                image: game.background_image,
                genres: game.genres.map(({id, name}) => {return {id ,name}}),
                platforms: game.platforms.map((p) => p.platform).map(({id, name}) => {return {id ,name}}),

            });
        });
        url = pages.data.next;
    };
    
    const DbGames = await Videogame.findAll ({
        include: [
            {
                model: Platform,
                attributes: ['id', 'name'], 
                through: { attributes: [] },
            },
            {
                model: Genre,
                attributes: ['id', 'name'], 
                through: { attributes: [] },
            }
        ],
    });

    const allGames = [...apiGames, ...DbGames];
    return allGames;

};


async function videogamesByName(name) {

    const apiGamesByName = [];
    let nameResults = await axios(`http://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);

        nameResults.data?.results.forEach((game) => {
            apiGamesByName.push({
                id: game.id,
                name: game.name,
                rating: game.rating,
                image: game.background_image,
                genres: game.genres.map(({id, name}) => {return {id ,name}}),
                platforms: game.platforms.map((p) => p.platform).map(({id, name}) => {return {id ,name}}),

            });
        });
    
    const DbGamesbyName = await Videogame.findAll ({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: [ 
            {
                model: Platform,
                attributes: ['id', 'name'], 
                through: { attributes: [] },
            },
            {
                model: Genre,
                attributes: ['id', 'name'], 
                through: { attributes: [] },
            },
        ]
    });

    const allGamesByName = [...apiGamesByName, ...DbGamesbyName].slice(0, 15);

    return allGamesByName 
    
};

async function videogamesById(id) {

    if (Number(id)) {
        let game = await axios.get(`http://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        let apiGamesById = {
            id: game.data.id,
            name: game.data.name,
            description: game.data.description_raw,
            released: game.data.released,
            rating: game.data.rating,
            platforms: game.data.platforms.map((platform) => platform.platform),
            image: game.data.background_image,
            genres: game.data.genres.map(({id, name}) => {return {id, name}}),

        };
        return [apiGamesById];

    } else {
        let dbGamesById = await Videogame.findAll({ 
            where: { id: id }, 
            include: [
                {
                    model: Platform,
                    attributes: ['id', 'name'], 
                    through: { attributes: [] },
                },
                {
                    model: Genre,
                    attributes: ['id', 'name'], 
                    through: { attributes: [] },
                }
            ],
            
        });

        return dbGamesById;
    };
};

async function allGenres() {

    let genres = await Genre.findAll();
    if (!genres.length) {
        const genresApi = await axios.get (`http://api.rawg.io/api/genres?key=${API_KEY}`);

        genres = await genresApi.data.results.map((genre) => ({
            id: genre.id,
            name: genre.name,
        }));
        await Genre.bulkCreate(genres);
        genres = await Genre.findAll();
    };
    return genres;
};

async function allPlatforms() {

    let platforms = await Platform.findAll();
    if (!platforms.length) {
        const platformsApi = await axios.get (`http://api.rawg.io/api/platforms?key=${API_KEY}`);

        platforms = await platformsApi.data.results.map((platform) => ({
            id: platform.id,
            name: platform.name,
        }));
        await Platform.bulkCreate(platforms);
        platforms = await Platform.findAll();
    };
    return platforms;

};

/*
BUSQUEDA DE PLATAFORMAS SOLAMENTE DE LOS 100 JUEGOS QUE TRAIGO DE LA API

async function allPlatforms() {

    let platformsFind = await Platform.findAll();
    let platforms = [];

    if (!platformsFind.length) {
        
        let url = `http://api.rawg.io/api/games?key=${API_KEY}`;
        for (let i = 1; i <= 5; i++) {
            let pages = await axios.get(url);
        
            pages.data.results.forEach((game) => {
                platforms.push(game.platforms.map((p) => p.platform).map(({id, name}) => {return {id ,name}}));
            });
            url = pages.data.next;
        };
    };

    let flatPlatforms = platforms.flat()
    flatPlatforms.forEach(el => {
        Platform.findOrCreate({
            where: {name: el.name, id: el.id},

        })
    });

    flatPlatforms = await Platform.findAll();
    return flatPlatforms
};
*/

module.exports = {
	allVideogames,
    videogamesByName,
    videogamesById,
    allGenres,
    allPlatforms,

};