const Instrument = require('./../models/instrument'); // Cambio a mayúscula inicial para seguir las convenciones
const Shop = require('./../models/shop'); // Cambio a mayúscula inicial

module.exports = {
  findAll: async (req, res) => {
    return res.status(200).json({ state: true, data: 'naaa' });
  },

  save: async (req, res) => {
    const instrumento = new Instrument(req.body); // Instancia correcta del modelo
    const { id } = req.params;

    try {
      // Buscar la tienda por su ID
      const tienda = await Shop.findById(id);
      if (tienda) {
        
        tienda.instruments.push(instrumento);
        await tienda.save(); 

        instrumento.shop = tienda._id; 

        
        const result = await instrumento.save();

        // Enviar respuesta exitosa con el instrumento guardado
        return res.status(201).json({ state: true, data: result });
      } else {
        return res.status(404).json({ state: false, data: null, message: 'Shop not found' });
      }
    } catch (err) {
      return res.status(500).json({ state: false, error: err });
    }
  }
};
