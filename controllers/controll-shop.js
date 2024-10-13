const Shop = require('./../models/shop');

module.exports = {
  // Crear una nueva tienda
  createShop: async (req, res) => {
    const { id, name, city } = req.body;

    try {
      const shop = await Shop.create({ id, name, city });
      return res.status(201).json({ state: true, data: shop });
    } catch (error) {
      return res.status(400).json({ state: false, message: 'Error creating new shop' });
    }
  },

  // Listar todas las tiendas
  listShop: async (req, res) => {
    try {
      const shops = await Shop.find().populate('instruments'); // Carga los instrumentos asociados
      return res.status(200).json({ state: true, data: shops });
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  },

  // Actualizar una tienda por su ID
  updateShop: async (req, res) => {
    const { id } = req.params;
    const { name, city } = req.body;

    try {
      const shop = await Shop.findByIdAndUpdate(id, { name, city }, { new: true });
      if (shop) {
        return res.status(200).json({ state: true, data: shop });
      } else {
        return res.status(404).json({ state: false, message: 'Shop not found' });
      }
    } catch (error) {
      return res.status(400).json({ state: false, message: error });
    }
  },

  // Eliminar una tienda por su ID
  deleteShop: async (req, res) => {
    const { id } = req.params;

    try {
      const shop = await Shop.findByIdAndDelete(id);
      if (shop) {
        return res.status(200).json({ state: true, message: 'Shop deleted' });
      } else {
        return res.status(404).json({ state: false, message: 'Shop not found' });
      }
    } catch (error) {
      return res.status(400).json({ state: false, message: error });
    }
  },

  // Encontrar una tienda por su ID
  findById: async (req, res) => {
    const { id } = req.params;

    try {
      const shop = await Shop.findById(id).populate('instruments');
      if (shop) {
        return res.status(200).json({ state: true, data: shop });
      }
      return res.status(404).json({ state: false, message: 'Shop not found' });
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  }
};
