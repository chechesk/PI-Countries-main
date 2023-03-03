const { getAllActivities,createActivity,deleteActivity,putUpdate,  }= require('./controller/activity.js');

const { Router } = require('express');
const {Activities, Country} = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req,res) => {
   const activities = await getAllActivities({
    include: [{ model: Country,
          attributes: ["id","name"],
          through: {
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
      ], }
  );
    res.status(200).send(activities);
});

router.post('/', async (req, res, next) => {

  const {name,dificulty,duration,season,countries} = req.body;
  try {
      let activity = await Activities.create({ name, dificulty, duration, season })
      await activity.setCountries(countries)

      let activityWithCountry = await Activities.findOne({
          where: { name: name },
          attributes: {
              exclude: ['updatedAt', 'createdAt'],
          },
          include: {
              model: Country,
              through: {
                  attributes: []
              }
          }
      })
      res.json(activityWithCountry)
  } catch (error) {
      next(error)
  }

});



router.delete('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const response = await deleteActivity(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.put('/:id',async (req,res)=>{
    try {
      const {id} =req.params;
      const {name,dificulty,duration,season,countries} = req.body;
      const response = await putUpdate(req.body.id);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
      
    }
  })

//promesa
// router.post('/', async (req,res) => {
//     const {name, dificulty, duration, season} = req.body; // destructuring de req.body
//     Activities.create({name, dificulty, duration, season}).then(() => res.status(201).("Creado con Exito");
// });



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;