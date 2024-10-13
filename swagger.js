const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API for managing shops and instruments',
  },
  servers: [
    {
       url: 'https://backend-trp2.onrender.com/instruments'
    },
  ],
  components: {
    schemas: {
      Shop: {
        type: 'object',
        required: ['name', 'location'],
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier for the shop',
            example: 'abc123',
          },
          name: {
            type: 'string',
            description: 'Name of the shop',
            example: 'Shop 3',
          },
          location: {
            type: 'string',
            description: 'Location of the shop',
            example: 'Location 3',
          },
        },
      },
      Instrument: {
        type: 'object',
        required: ['name', 'type'],
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier for the instrument',
            example: 'xyz789',
          },
          name: {
            type: 'string',
            description: 'Name of the instrument',
            example: 'Violin',
          },
          type: {
            type: 'string',
            description: 'Type of the instrument (e.g., string, percussion)',
            example: 'String',
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Archivos donde Swagger buscará la documentación
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
