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
/**
 *  @swagger
 * /shops:
 *   get:
 *     summary: Retrieve a list of shops
 *     description: Retrieve all shops from the database.
 *     responses:
 *       200:
 *         description: A list of shops.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shop'
 *   post:
 *     summary: Add a new shop
 *     description: Create a new shop with name and location.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shop'
 *     responses:
 *       201:
 *         description: Shop created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shop'
 *       400:
 *         description: Bad request.
 */
router.post('/', (req, res) => {
  // Lógica para crear una tienda
  res.status(201).json({ message: 'Shop created successfully' });
});

/**
 * @swagger
 * /shops/{id}:
 *   put:
 *     summary: Update an existing shop
 *     description: Update the details of a specific shop.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shop to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shop'
 *     responses:
 *       200:
 *         description: Shop updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shop'
 *       404:
 *         description: Shop not found.
 */
router.put('/:id', (req, res) => {
  // Lógica para actualizar una tienda
  res.status(200).json({ message: 'Shop updated successfully' });
});

/**
 * @swagger
 * /shops/{id}:
 *   delete:
 *     summary: Delete a shop
 *     description: Delete a specific shop by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shop to delete
 *     responses:
 *       200:
 *         description: Shop deleted successfully.
 *       404:
 *         description: Shop not found.
 */
router.delete('/:id', (req, res) => {
  // Lógica para eliminar una tienda
  res.status(200).json({ message: 'Shop deleted successfully' });
});


