const debug = require('debug')('server:heroesController');
const Hero = require('../model/heroModel');

function heroesController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const tasks = await Hero.find({});
      res.status(200);
      res.json(tasks);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getHeroById(req, res) {
    debug('enter to function getHeroById');
    const { heroId } = req.params;
    debug(heroId);
    try {
      const hero = await Hero.findOne({ heroId: +heroId });
      res.status(200);
      res.json(hero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    getHeroById,
  };
}
module.exports = heroesController;
