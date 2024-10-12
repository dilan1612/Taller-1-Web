const routes = require('express').Router()

const {
  findAll,
  save
} = require('./../controllers/controll-instruments')

routes.get('/',findAll)
routes.post('/:id',save)

module.exports = routes