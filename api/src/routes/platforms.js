const { Router } = require('express');
const router = Router();
const { allPlatforms } = require ('./controllers.js')


router.get('/platforms', async (req, res, next) => {
 
    try {
        return res.status(200).json(await allPlatforms());
    } catch (error) {
        next(error);
    }
    
});


module.exports = router;