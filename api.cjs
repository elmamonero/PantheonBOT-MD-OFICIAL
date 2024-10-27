const mystic = require('./auth'); // Asegúrate de que la ruta sea correcta

// Función para obtener un pipeline
function getPipeline(nombre) {
  mystic.getPipeline(nombre)
    .then((pipeline) => {
      console.log('Pipeline obtenido:', pipeline);
    })
    .catch((error) => {
      console.error('Error al obtener el pipeline:', error);
    });
}

// Agregar más funciones según sea necesario
module.exports = {
  getPipeline,
  // Exporta más funciones aquí si es necesario
};
