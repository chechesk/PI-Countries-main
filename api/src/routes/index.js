const { Router } = require('express');
const ActivitiesRouter = require('./Routeractivities');
const CountriesRouter = require('./Routercountries');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/activities', ActivitiesRouter);

router.use('/countries', CountriesRouter);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
