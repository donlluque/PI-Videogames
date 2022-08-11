const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames.js')
const platforms = require('./platforms.js')
const genres = require('./genres.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/',videogames)
router.use('/',platforms)
router.use('/',genres)


module.exports = router;
