var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/N64sq4Q/IMG-20241013-WA0071.jpg';
    const groupAdmins = participants.filter(p => p.admin);
    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora y modalidad)
    if (args.length < 2) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA Y UNA MODALIDAD*\n_Ejemplo: .16vs16 10:00 Infinito_');

    const hora = args[0]; // Primer texto (hora)
    const modalidad = args.slice(1).join(' '); // Segundo texto (modalidad), puede contener más de una palabra

    let yo = `│🕓 𝗛𝗢𝗥𝗔: *${hora}*`;
    let modo = `│🎮 𝗠𝗢𝗗𝗔𝗟𝗜𝗗𝗔𝗗: *${modalidad}*`;

    let texto = `
╭──────>⋆☽⋆ 🆚 ⋆☾⋆<──────╮
ㅤ             ㅤ16 𝐕𝐄𝐑𝐒𝐔𝐒 16
${groupMetadata.subject}
╰──────>⋆☽⋆ 🆚 ⋆☾⋆<──────╯
╭──────>⋆☽⋆ 🔥 ⋆☾⋆<──────╮
${yo}
${modo}
│➥ 𝐂𝐎𝐋𝐎𝐑 𝐃𝐄 𝐑𝐎𝐏𝐀: 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│     
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 4
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│⚜️ ➤ 
│⚜️ ➤ 
╰──────>⋆☽⋆ 🔥 ⋆☾⋆<──────╯`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}
handler.help = ['16vs16 <hora> <modalidad>']
handler.tags = ['ffvs']
handler.command = /^(16x16|16vs16|16v16|16v|v16|16vs)$/i
handler.admin = true
handler.group = true

export default handler