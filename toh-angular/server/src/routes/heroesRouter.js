const { Router } = require('express');
const heroesController = require('../controllers/heroesController')();

function heroesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(heroesController.getAll);

  routes
    .route('/:heroId/')
    .get(heroesController.getHeroById);

  return routes;
}

module.exports = heroesRouter();
