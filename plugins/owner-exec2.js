import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import punycode from 'punycode';

const handler = async (m, {conn, isOwner, command, text, usedPrefix, args, isROwner}) => {
   const datas = global.db.data;
   const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
   const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
   const tradutor = _translate.plugins.owner_exec2;

   if (!isROwner) return;
   if (global.conn.user.jid != conn.user.jid) return;

   m.reply(tradutor.texto1);

   // Validaciones y logs
   if (!command || !text) {
       m.reply("Comando o texto no definido.");
       return;
   }

   console.log("Command:", command);
   console.log("Text:", text);

   // Codificando el texto y el comando con punycode
   const encodedCommand = punycode.encode(command.trimStart());
   const encodedText = punycode.encode(text.trimEnd());

   let o;
   try {
       o = await promisify(exec)(encodedCommand + ' ' + encodedText);
   } catch (e) {
       o = e;
   } finally {
       const {stdout, stderr} = o;
       if (stdout && stdout.trim()) m.reply(stdout);
       if (stderr && stderr.trim()) m.reply(stderr);
   }
};