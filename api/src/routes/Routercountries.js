const { Router } = require('express');
const { Country, Activities } = require("../db");
const { countriesLoader, findCountry, findCountriesbyId} = require('./controller/country.js')

const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req,res) => {

    const {name} = req.query
    let TotalCountries = await findCountry();
    try {
      if(name){
        let nameCountries = await TotalCountries.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
        nameCountries.length ?
        res.status(200).send(nameCountries):
        res.status(404).send('No esta el pais')
    } else{
      res.status(200).send(TotalCountries)
    }  
    } catch (error) {
      res.status(404).send(error.message);
    }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params
  const countriesT = await findCountry()
  if (id) {
    let countriesId = await countriesT.filter(elemento => elemento.id.toLowerCase() === id.toLowerCase())
    countriesId.length?
    res.status(200).json(countriesId):
    res.status(404).send('No se encontro el pais por Id')
  }
  
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;