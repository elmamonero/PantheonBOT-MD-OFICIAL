import fetch from 'node-fetch';
import axios from 'axios';
import fs from "fs";
import yts from 'yt-search';
import ytdl from 'ytdl-core';

const handler = async (m, { conn, command, args, text, usedPrefix }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.descargas_play;

  if (!text) throw `${tradutor.texto1[0]} _${usedPrefix + command} ${tradutor.texto1[1]}`;
  const yt_play = await search(args.join(' '));
  let additionalText = '';

  if (['play2', 'play4', 'playdoc2'].includes(command)) {
    additionalText = 'vídeo';
  }

  if (!yt_play || !yt_play[0]?.title) return m.reply('> *[❗] Error: Audio/Video no encontrado.*');

  const texto1 = `${tradutor.texto2[0]} ${yt_play[0].title}\n${tradutor.texto2[1]} ${yt_play[0].ago}\n${tradutor.texto2[2]} ${secondString(yt_play[0].duration.seconds)}\n${tradutor.texto2[3]} ${MilesNumber(yt_play[0].views)}\n${tradutor.texto2[4]} ${yt_play[0].author.name}\n${tradutor.texto2[5]} ${yt_play[0].videoId}\n${tradutor.texto2[6]} ${yt_play[0].type}\n${tradutor.texto2[7]} ${yt_play[0].url}\n${tradutor.texto2[8]} ${yt_play[0].author.url}\n\n> ${tradutor.texto2[9]} ${additionalText}, ${tradutor.texto2[10]}`.trim();
  conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 }, { quoted: m });

  if (['play2', 'play4', 'playdoc2'].includes(command)) {
    try {
      const videoUrl = `https://widipe.com/download/ytdl?url=${yt_play[0].url}`;
      const res = await fetch(videoUrl);
      if (res.headers.get("content-type").includes("application/json")) {
        const linkDownload = await res.json();
        if (linkDownload.result?.mp4) {
          conn.sendMessage(m.chat, { video: { url: linkDownload.result.mp4 }, mimetype: "video/mp4" }, { quoted: m });
        } else {
          m.reply('> *[❗] Error: No se pudo obtener el enlace de descarga.*');
        }
      } else {
        m.reply('> *[❗] Error: No se pudo obtener el enlace de descarga.*');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      m.reply('> *[❗] Error: No se pudo obtener el enlace de descarga.*');
    }
  }
};

handler.command = /^(play|play2|play3|play4|playdoc|playdoc2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({ query, hl: 'es', gl: 'ES', ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? 'd ' : 'd ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? 'h ' : 'h ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? 'm ' : 'm ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
