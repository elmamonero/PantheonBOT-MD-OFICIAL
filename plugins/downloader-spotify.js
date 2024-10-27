import fs from 'fs';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    const idioma = 'es'; // Ajusta esto según tus necesidades
    const filePath = `./src/languages/${idioma}.json`;

    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${filePath} no existe.`);
    }

    const _translate = JSON.parse(fs.readFileSync(filePath));
    const tradutor = _translate.plugins.descargas_play;

    if (!text) throw `${tradutor.texto1} _${usedPrefix + command} Good Feeling - Flo Rida_`;

    const res = await fetch(`${global.MyApiRestBaseUrl}/api/spotifysearch?text=${text}&apikey=${global.MyApiRestApikey}`);
    const data = await res.json();
    const linkDL = data?.spty?.resultado[0]?.url || data?.spty?.resultado[0]?.link;
    const musics = await fetch(`${global.MyApiRestBaseUrl}/api/spotifydl?text=${linkDL}&apikey=${global.MyApiRestApikey}`);
    const music = await conn.getFile(musics?.url);
    const infos = await fetch(`${global.MyApiRestBaseUrl}/api/spotifyinfo?text=${linkDL}&apikey=${global.MyApiRestApikey}`);
    const info = await infos.json();
    const spty = info?.spty?.resultado;
    const img = await (await fetch(`${spty.thumbnail}`)).buffer();

    let spotifyi = ` _${tradutor.texto2[0]}_\n\n`;
    spotifyi += ` ${tradutor.texto2[1]} ${spty.title}\n`;
    spotifyi += ` ${tradutor.texto2[2]} ${spty.artist}\n`;
    spotifyi += ` ${tradutor.texto2[3]} ${spty.album}\n`;
    spotifyi += ` ${tradutor.texto2[4]} ${spty.year}\n\n`;
    spotifyi += `> ${tradutor.texto2[5]}`;

    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error('Error: ' + error.message);
    m.reply(`> *[❗] Error: ${error.message}`);
  }
};

handler.command = /^(spotify|music)$/i;
export default handler;

// Código antiguo/obsoleto comentado al final
/*
import Spotify from 'spotifydl-x';
import NodeID3 from 'node-id3';
import axios from 'axios';
import {find_lyrics} from '@brandond/findthelyrics';

const credentials = {
  clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
  clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
};

const spotify = new Spotify.default(credentials);

const handler = async (m, { conn, text }) => {
  if (!text) throw `*[❗] Ingrese el nombre de alguna canción de spotify.*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    const artist = spty.data.artists.join(', ') || '-';
    const img = await (await fetch(`${spty.data.cover_url}`)).buffer();
    const letra_s = await find_lyrics(spty.data.name ? spty.data.name : '');
    let letra;
    letra = `${letra_s ? letra_s + '\n\n Descarga por Elmo & Elmo - BOT ' : ' Descarga por Elmo & Elmo - BOT '}`;

    const tags = {
      title: spty.data.name || '-',
      artist: artist,
      album: spty.data.album_name || '-',
      year: spty.data.release_date || '-',
      genre: 'Música',
      comment: {
        language: 'spa',
        text: letra,
      },
      unsynchronisedLyrics: {
        language: 'spa',
        text: letra,
      },
      image: {
        mime: 'image/jpeg',
        type: {
          id: 3,
          name: 'front cover',
        },
        description: 'Spotify Thumbnail',
        imageBuffer: await axios.get(spty.data.cover_url, { responseType: "arraybuffer" }).then((response) => Buffer.from(response.data, "binary")),
      },
      mimetype: 'image/jpeg',
      copyright: 'Copyright Darlyn ©2023',
    };
    await fs.promises.writeFile(filePath, spty.audio);
    await NodeID3.write(tags, filePath);

    let spotifyi = `*•  Spotify Download •*\n\n`;
    spotifyi += `◦  *Título:* ${spty.data.name}\n`;
    spotifyi += `◦  *Artista:* ${spty.data.artists}\n`;
    spotifyi += `◦  *Album:* ${spty.data.album_name}\n`;
    spotifyi += `◦  *Publicado:* ${spty.data.release_date}\n\n`;
    spotifyi += `El audio se esta enviando, espere un momento
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '*[❗] Error, no se encontraron resultados.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;

async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await spotify.getTrack(url);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Tiempo de espera agotado'));
        }, 300000);
      });
      const audioPromise = spotify.downloadTrack(url);
      const audio = await Promise.race([audioPromise, timeoutPromise]);
      resolve({ data: res, audio });
    } catch (error) {
      reject(error);
    }
  });
}*/