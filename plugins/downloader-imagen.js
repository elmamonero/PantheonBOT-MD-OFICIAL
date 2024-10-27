import fs from 'fs';
import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    console.log('Iniciando el handler...');

    // Verificación del idioma y la ruta del archivo
    const idioma = 'es';
    const filePath = './src/languages/es.json';
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${filePath} no existe.`);
    }

    // Lectura del archivo de traducción
    const _translate = JSON.parse(fs.readFileSync(filePath));
    console.log('Archivo de traducción cargado:', _translate);

    // Acceso a los textos traducidos
    const tradutor = _translate.plugins.descargas_play;
    console.log('Traductor cargado:', tradutor);
    if (!tradutor || !tradutor.texto1 || !tradutor.texto2) {
      throw new Error('Error en la configuración de traducción.');
    }

    // Verificación del texto del comando
    if (!text) throw `${tradutor.texto1} _imagen_desde_url_`;

    // Petición a la API de Pixabay
    console.log('Buscando imagen para:', text);
    const apiKey = '46726352-29d94c5bbefc886d384806814';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${text}&image_type=photo`;
    const res = await fetch(url);
    console.log('Respuesta de la API de Pixabay:', res);
    if (!res.ok) throw new Error('No se pudo descargar la imagen.');
    const data = await res.json();
    console.log('Datos recibidos de la API:', data);

    // Selección de la imagen
    const image = data.hits[0]?.webformatURL;
    if (!image) throw new Error('No se encontraron imágenes para el término de búsqueda proporcionado.');

    // Descarga de la imagen
    const resImage = await fetch(image);
    if (!resImage.ok) throw new Error('No se pudo descargar la imagen.');
    const buffer = await resImage.buffer();
    console.log('Imagen descargada con éxito.');

    // Envío de la imagen al chat
    await conn.sendMessage(m.chat, { image: buffer, caption: 'Aquí tienes tu imagen.' }, { quoted: m });

  } catch (error) {
    console.error(`Error: ${error.message}`);
    m.reply(`> *[❗] Error: ${error.message}`);
  }
};

handler.command = /^(imagen|img)$/i;
export default handler;
