var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/jRj4vBR/file.jpg';

    const groupAdmins = participants.filter(p => p.admin);

    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');

    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    // Verificar si se ingresaron suficientes argumentos (hora y vestimenta)

    if (args.length < 2) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` ⚜️\n\n*INGRESA UNA HORA Y VESTIMENTA*\n_Ejemplo: .hexagonal 10:00 negro_');

    const hora = args[0]; // Primer texto (hora)

    const vestimenta = args.slice(1).join(' '); // Segundo texto (vestimenta), puede contener más de una palabra

    let yo = `│⏰┨𝐇𝐎𝐑𝐀: : *${hora}*`;

    let vesti = `│👕┨𝐕𝐄𝐒𝐓𝐈𝐌𝐄𝐍𝐓𝐀: : *${vestimenta}*`;

    let texto = `

╭──────⚔──────╮

ㅤ     *HEXAGONAL*

${groupMetadata.subject}

╰──────⚔──────╯

HEXAGONAL

⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨

${yo}
${vesti}
│🛟┨𝐂𝐀𝐒𝐈𝐋𝐋𝐀𝐒:

Escuadra 1: 

➢⚜️
➢⚔️
➢⚔️
➢⚔️

Escuadra 2: 

➢⚜️ 
➢⚔️
➢⚔️
➢⚔️

𝙎𝙐𝙋𝙇𝙀𝙉𝙏𝙀𝙎 

➠
➠`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

}

handler.help = ['Hexagonal <hora> <vestimenta>']

handler.tags = ['ffvs']

handler.command = /^(hexagonal|hexago|hexa|hexag|hexagona)$/i

handler.admin = true

handler.group = true

export default handler