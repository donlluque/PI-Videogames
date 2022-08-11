const { Router } = require('express');
const router = Router();
const { allGenres } = require ('./controllers.js')


router.get('/genres', async (req, res, next) => {

    try {
        return res.status(200).json(await allGenres());
    } catch (error) {
        next(error);
    }
    
});


module.exports = router;