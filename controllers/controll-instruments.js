const Instrument = require('./../models/instrument');
const Shop = require('./../models/shop');

module.exports = {
  // Crear un nuevo instrumento
   save: async (req, res) => {
    const instrumento = new Instrument(req.body);
    const { id } = req.params;

    try {
      const tienda = await Shop.findById(id);
      if (tienda) {
        tienda.instruments.push(instrumento);
        await tienda.save();

        instrumento.shop = tienda._id;
        const result = await instrumento.save();

        return res.status(201).json({ state: true, data: result });
      } else {
        return res.status(404).json({ state: false, data: null, message: 'Shop not found' });
      }
    } catch (err) {
      return res.status(500).json({ state: false, error: err });
    }
  },

  // Listar todos los instrumentos
  listInstrument: async (req, res) => {
    try {
      const instruments = await Instrument.find().populate('shop'); // Carga la tienda asociada
      return res.status(200).json({ state: true, data: instruments });
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  },

  // Actualizar un instrumento por su ID
  updateInstrument: async (req, res) => {
    const { id } = req.params;
    const {type, marca, peso, value } = req.body;

    try {
      const instrument = await Instrument.findByIdAndUpdate(id, {type, marca ,peso, value }, { new: true });
      if (instrument) {
        return res.status(200).json({ state: true, data: instrument });
      } else {
        return res.status(404).json({ state: false, message: 'Instrument not found' });
      }
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  },

  // Eliminar un instrumento por su ID
  deleteInstrument: async (req, res) => {
    const { id } = req.params;

    try {
      const instrument = await Instrument.findByIdAndDelete(id);
      if (instrument) {
        return res.status(200).json({ state: true, message: 'Instrument deleted' });
      } else {
        return res.status(404).json({ state: false, message: 'Instrument not found' });
      }
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  },

  // Encontrar un instrumento por su ID
  findById: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Instrument.findById(id).populate('shop');
      if (result) {
        return res.status(200).json({ state: true, data: result });
      }
      return res.status(404).json({ state: false, message: 'Instrument not found' });
    } catch (error) {
      return res.status(500).json({ state: false, message: error });
    }
  }
};
