import mystic from 'mystic-api';

// Configuración de la nueva API
mystic.setApiUrl('https://api.mystic.ai/v4');
mystic.setAuthToken('TU_TOKEN_DE_API');

// Autenticación
mystic.authenticate()
  .then(() => {
    console.log('Autenticación exitosa');
  })
  .catch((error) => {
    console.error('Error de autenticación:', error);
  });

export default mystic;
