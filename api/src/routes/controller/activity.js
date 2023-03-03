//const axios = require("axios");
const { Country, Activities } = require("../../db");

const createActivity = async (name, difficulty, duration, season, countries) => {
    
  
  let newActivity = await Activities.create({
      name,
      dificulty,
      duration,
      season,
    });
    const paisesAll = await Country.findAll({
      where: {
        name: countries,
      },
    });
    newActivity.addCountry(paisesAll);
  };
  
  const getAllActivities = async function () {
    const data = await Activities.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: {
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
      ],
    });
    return data;
  };
  
  const deleteActivity = async (id) => {
    await Activities.destroy({ where: { id } });
  };
  
  const putUpdate = async (data, id) => {
    await Activities.update(data, { where: { id } });
  };

  module.exports = {
    createActivity,
    getAllActivities,
    deleteActivity,
    putUpdate,
  }