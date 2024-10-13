const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description:'Ejemplo de documentar son Swagger',
    license : {
      name : 'Licensed Under MIT',
      url : 'https://spdx.org/licenses/MIT.html'
    },
    contact : {
      name : 'Jairo Armando',
      url : 'https://ni.idea.com'
    }
  }, 
  servers: [
    {
      url: 'http://localhost:3030',
      description: 'Server to Training'
    }
  ]
}
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Archivos donde Swagger buscará la documentación
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
