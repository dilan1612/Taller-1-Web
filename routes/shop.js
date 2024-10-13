const routes = require('express').Router()

const {
  createShop,
  listShop,
  updateShop,
  deleteShop,
  findById
} = require('./../controllers/controll-shop')

routes.get('/',listShop)
routes.get('/:id',findById)
routes.post('/',createShop)
routes.put('/', updateShop)
routes.delete('/',deleteShop)

module.exports = routes
