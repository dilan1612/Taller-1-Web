const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi : '3.0.0',
  info : {
    title : 'MyAPI',
    version: '1.0.0',
    description:'Ejemplo de documentar son Swagger',
    license : {
      name : 'Licensed Under MIT',
      url : 'https://spdx.org/licenses/MIT.html'
    },
    contact : {
      name : 'Dilan Bohorquez-Sergio Mesa',
      url : 'https://ni.idea.com'
    }
  }, 
  servers: [
    {
      url: 'https://backend-trp2.onrender.com',
      description: 'Server to Training'
    }
  ]
}
const options = {
  swaggerDefinition,
  apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec