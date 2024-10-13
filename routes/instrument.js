const routes = require('express').Router()

const {
  save,
  listInstrument,
  updateInstrument,
  deleteInstrument
} = require('./../controllers/controll-instruments')

routes.post('/:id',save)
routes.get("/", listInstrument)
routes.put('/:id', updateInstrument);
routes.delete('/:id', deleteInstrument);

module.exports = routes