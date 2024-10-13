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

/**
 * @swagger
 * /instruments:
 *   get:
 *     summary: Retrieve a list of instruments
 *     description: Retrieve all instruments from the database.
 *     responses:
 *       200:
 *         description: A list of instruments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Instrument'
 *   post:
 *     summary: Add a new instrument
 *     description: Create a new instrument with name and type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Instrument'
 *     responses:
 *       201:
 *         description: Instrument created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Instrument'
 *       400:
 *         description: Bad request.
 */
routes.post('/', (req, res) => {
  // Lógica para crear un instrumento
  res.status(201).json({ message: 'Instrument created successfully' });
});

/**
 * @swagger
 * /instruments/{id}:
 *   put:
 *     summary: Update an existing instrument
 *     description: Update the details of a specific instrument.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the instrument to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Instrument'
 *     responses:
 *       200:
 *         description: Instrument updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Instrument'
 *       404:
 *         description: Instrument not found.
 */
routes.put('/:id', (req, res) => {
  // Lógica para actualizar un instrumento
  res.status(200).json({ message: 'Instrument updated successfully' });
});

/**
 * @swagger
 * /instruments/{id}:
 *   delete:
 *     summary: Delete an instrument
 *     description: Delete a specific instrument by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the instrument to delete
 *     responses:
 *       200:
 *         description: Instrument deleted successfully.
 *       404:
 *         description: Instrument not found.
 */
routes.delete('/:id', (req, res) => {
  // Lógica para eliminar un instrumento
  res.status(200).json({ message: 'Instrument deleted successfully' });
});


