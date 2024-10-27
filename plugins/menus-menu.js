import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 ${tradutor.texto1[10]}
 
 ╭─ ⚙️𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑⚙️
 *├❧ 🟢 ${usedPrefix}enable*
 *├❧ 🔴 ${usedPrefix}disable*

   𝙈𝘼𝙋𝘼𝙎 𝘿𝙀 𝙑𝙀𝙍𝙎𝙐𝙎

  *├❧ ${usedPrefix}bermuda*
  *├❧ ${usedPrefix}purgatorio*
  *├❧ ${usedPrefix}kalahari*

   𝙇𝙄𝙎𝙏𝘼𝙎 𝙑𝙀𝙍𝙎𝙐𝙎 

  *├❧🗺️ ${usedPrefix}4v4*
  *├❧ ${usedPrefix}6v6*
  *├❧ ${usedPrefix}8v8*
  *├❧ ${usedPrefix}12v12*
  *├❧ ${usedPrefix}16v16*
  *├❧ ${usedPrefix}24v24*
  *├❧ ${usedPrefix}scrim*
  *├❧ ${usedPrefix}guerra*

   𝙍𝙀𝙂𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙐𝙎

  *├❧ ${usedPrefix}reglasclk*

  ${tradutor.texto1[12]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}enable restrict_
  ├❧ _${usedPrefix}disable restrict_
  ├❧ _${usedPrefix}enable autoread_
  ├❧ _${usedPrefix}disable autoread_
  ├❧ _${usedPrefix}enable antispam_
  ├❧ _${usedPrefix}disable antispam_
  ├❧ _${usedPrefix}enable anticall_
  ├❧ _${usedPrefix}disable anticall_
  ├❧ _${usedPrefix}enable modoia_
  ├❧ _${usedPrefix}disable modoia_
  ├❧ _${usedPrefix}enable audios_bot_
  ├❧ _${usedPrefix}disable audios_bot_
  ├❧ _${usedPrefix}enable antiprivado_
  ├❧ _${usedPrefix}disable antiprivado_
  ╰───── • ◆ • ─────╯

  〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
 
  ╭───── • ◆ • ─────╮
  *├❧🕹️ ${usedPrefix}mates*
  *├❧🕹️ ${usedPrefix}fake *<txt1> <@tag> <txt2>**
  *├❧🕹️ ${usedPrefix}ppt *<papel / tijera /piedra>**
  *├❧🕹️ ${usedPrefix}prostituto *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}prostituta *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}gay2 *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}lesbiana *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}pajero *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}pajera *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}puto *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}puta *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}manco *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}manca *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}rata *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}love *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}doxear *<nombre / @tag>**
  *├❧🕹️ ${usedPrefix}pregunta *<txt>***
  *├❧🕹️ ${usedPrefix}suitpvp *<@tag>**
  *├❧🕹️ ${usedPrefix}slot *<apuesta>**
  *├❧🕹️ ${usedPrefix}ttt ${tradutor.texto1[32]}
  *├❧🕹️ ${usedPrefix}delttt*
  *├❧🕹️ ${usedPrefix}acertijo*
  *├❧🕹️ ${usedPrefix}simi *<txt>**
  *├❧🕹️ ${usedPrefix}top *<txt>**
  *├❧🕹️ ${usedPrefix}topgays*
  *├❧🕹️ ${usedPrefix}topotakus*
  *├❧🕹️ ${usedPrefix}formarpareja*
  *├❧🕹️ ${usedPrefix}verdad*
  *├❧🕹️ ${usedPrefix}reto*
  *├❧🕹️ ${usedPrefix}cancion*
  *├❧🕹️ ${usedPrefix}pista*
  *├❧🕹️ ${usedPrefix}akinator*
  *├❧🕹️ ${usedPrefix}wordfind*
  *├❧🕹️ ${usedPrefix}glx (RPG Mundo)*
  ╰───── • ◆ • ─────╯

  〔 🎬 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🎬 〕 

  ╭───── • ◆ • ─────╮
  *├❧ ${usedPrefix}play *<txt>**
  *├❧ ${usedPrefix}play2 *<txt>**
  *├❧ ${usedPrefix}play.1 *<txt>**
  *├❧ ${usedPrefix}play.2 *<txt>**
  *├❧ ${usedPrefix}playdoc *<txt>**
  *├❧ ${usedPrefix}playdoc2 *<txt>**
  *├❧ ${usedPrefix}playlist *<txt>**
  *├❧ ${usedPrefix}ytshort *<url>**
  *├❧ ${usedPrefix}ytmp3 *<url>**
  *├❧ ${usedPrefix}ytmp3doc *<url>**
  *├❧ ${usedPrefix}ytmp4 *<url>**
  *├❧ ${usedPrefix}ytmp4doc *<url>**
  *├❧ ${usedPrefix}videodoc *<url>**
  *├❧ ${usedPrefix}spotify *<txt>**
  *├❧ ${usedPrefix}facebook *<url>**
  *├❧ ${usedPrefix}instagram *<url>**
  *├❧ ${usedPrefix}igstory *<usr>**
  *├❧ ${usedPrefix}tiktok *<url>**
  *├❧ ${usedPrefix}tiktokimg *<url>**
  *├❧ ${usedPrefix}pptiktok *<usr>**
  *├❧ ${usedPrefix}mediafire *<url>**
  *├❧ ${usedPrefix}pinterest *<txt>**
  *├❧ ${usedPrefix}gitclone *<url>**
  *├❧ ${usedPrefix}gdrive *<url>**
  *├❧ ${usedPrefix}twitter *<url>**
  *├❧ ${usedPrefix}ringtone *<txt>**
  *├❧ ${usedPrefix}soundcloud *<txt>**
  *├❧ ${usedPrefix}stickerpack *<url>**
  *├❧ ${usedPrefix}wallpaper *<txt>**
  *├❧ ${usedPrefix}dapk2 *<url>**
  *├❧ ${usedPrefix}xnxxdl *<url>** (🔞)
  *├❧ ${usedPrefix}xvideosdl *<url>** (🔞)
  ╰───── • ◆ • ─────╯

 ${tradutor.texto1[16]}
  
  ╭───── • ◆ • ─────╮
  *├❧ ${usedPrefix}githubsearch *<txt>**
  *├❧ ${usedPrefix}pelisplus *<txt>**
  *├❧ ${usedPrefix}modapk *<txt>**
  *├❧ ${usedPrefix}stickersearch *<txt>**
  *├❧ ${usedPrefix}stickersearch2 *<txt>**
  *├❧ ${usedPrefix}xnxxsearch *<txt>**
  *├❧ ${usedPrefix}animeinfo *<txt>**
  *├❧ ${usedPrefix}google *<txt>**
  *├❧ ${usedPrefix}letra *<txt>**
  *├❧ ${usedPrefix}wikipedia *<txt>**
  *├❧ ${usedPrefix}ytsearch *<txt>**
  *├❧ ${usedPrefix}playstore *<txt>**
  ╰───── • ◆ • ─────╯

  〔❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
 
  ╭───── • ◆ • ─────╮
  *├❧ ${usedPrefix}add *num>**
  *├❧ ${usedPrefix}kick *<@tag>**
  *├❧ ${usedPrefix}kick2 *<@tag>**
  *├❧ ${usedPrefix}listanum *<txt>**
  *├❧ ${usedPrefix}kicknum *<txt>**
  *├❧ ${usedPrefix}grupo *<abrir/cerrar>**
  *├❧ ${usedPrefix}grouptime *<opcion>* *<time>**
  *├❧ ${usedPrefix}promote *<@tag>**
  *├❧ ${usedPrefix}demote *<@tag>**
  *├❧ ${usedPrefix}infogroup*
  *├❧ ${usedPrefix}resetlink*
  *├❧ ${usedPrefix}link*
  *├❧ ${usedPrefix}setname *<txt>**
  *├❧ ${usedPrefix}setdesc *<txt>**
  *├❧ ${usedPrefix}invocar *<txt>**
  *├❧ ${usedPrefix}setwelcome *<txt>**
  *├❧ ${usedPrefix}setbye *<txt>**
  *├❧ ${usedPrefix}hidetag *<txt>**
  *├❧ ${usedPrefix}hidetag *<audio>**
  *├❧ ${usedPrefix}hidetag *<video>**
  *├❧ ${usedPrefix}hidetag *<img>**
  *├❧ ${usedPrefix}warn *<@tag>**
  *├❧ ${usedPrefix}unwarn *<@tag>**
  *├❧ ${usedPrefix}listwarn*
  *├❧ ${usedPrefix}fantasmas*
  *├❧ ${usedPrefix}destraba*
  *├❧ ${usedPrefix}setpp *<img>**
  *├❧ admins *<txt>*_ ${tradutor.texto1[31]}*
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[18]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}toanime *<img>*_
  ├❧ _${usedPrefix}togifaud *<video>*_
  ├❧ _${usedPrefix}toimg *<sticker>*_
  ├❧ _${usedPrefix}tomp3 *<video>*_
  ├❧ _${usedPrefix}tomp3 *<nota de voz>*_
  ├❧ _${usedPrefix}toptt *<video / audio>*_
  ├❧ _${usedPrefix}tovideo *<sticker>*_
  ├❧ _${usedPrefix}tourl *<video / img / audio>*_
  ├❧ _${usedPrefix}tts *<idioma> <txt>*_
  ├❧ _${usedPrefix}tts *<efecto> <txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[19]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}logos *<efecto> <txt>*_
  ├❧ _${usedPrefix}logochristmas *<txt>*_
  ├❧ _${usedPrefix}logocorazon *<txt>*_
  ├❧ _${usedPrefix}ytcomment *<txt>*_
  ├❧ _${usedPrefix}hornycard *<@tag>*_
  ├❧ _${usedPrefix}simpcard *<@tag>*_
  ├❧ _${usedPrefix}lolice *<@tag>*_
  ├❧ _${usedPrefix}itssostupid_
  ├❧ _${usedPrefix}pixelar_
  ├❧ _${usedPrefix}blur_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[20]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}piropo_
  ├❧ _${usedPrefix}consejo_
  ├❧ _${usedPrefix}fraseromantica_
  ├❧ _${usedPrefix}historiaromantica_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[21]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ├❧ _${usedPrefix}cristianoronaldo_
  ├❧ _${usedPrefix}messi_
  ├❧ _${usedPrefix}cat_
  ├❧ _${usedPrefix}dog_
  ├❧ _${usedPrefix}meme_
  ├❧ _${usedPrefix}itzy_
  ├❧ _${usedPrefix}blackpink_
  ├❧ _${usedPrefix}navidad_
  ├❧ _${usedPrefix}wpmontaña_
  ├❧ _${usedPrefix}pubg_
  ├❧ _${usedPrefix}wpgaming_
  ├❧ _${usedPrefix}wpaesthetic_
  ├❧ _${usedPrefix}wpaesthetic2_
  ├❧ _${usedPrefix}wprandom_
  ├❧ _${usedPrefix}wallhp_
  ├❧ _${usedPrefix}wpvehiculo_
  ├❧ _${usedPrefix}wpmoto_
  ├❧ _${usedPrefix}coffee_
  ├❧ _${usedPrefix}pentol_
  ├❧ _${usedPrefix}caricatura_
  ├❧ _${usedPrefix}ciberespacio_
  ├❧ _${usedPrefix}technology_
  ├❧ _${usedPrefix}doraemon_
  ├❧ _${usedPrefix}hacker_
  ├❧ _${usedPrefix}planeta_
  ├❧ _${usedPrefix}randomprofile_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[22]}

  ${tradutor.texto1[23]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}bass_
  ├❧ _${usedPrefix}blown_
  ├❧ _${usedPrefix}deep_
  ├❧ _${usedPrefix}earrape_
  ├❧ _${usedPrefix}fast_
  ├❧ _${usedPrefix}fat_
  ├❧ _${usedPrefix}nightcore_
  ├❧ _${usedPrefix}reverse_
  ├❧ _${usedPrefix}robot_
  ├❧ _${usedPrefix}slow_
  ├❧ _${usedPrefix}smooth_
  ├❧ _${usedPrefix}tupai_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[24]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}start_
  ├❧ _${usedPrefix}next_
  ├❧ _${usedPrefix}leave_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[25]}
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}inspect *<wagc_url>*_
  ├❧ _${usedPrefix}chatgpt *<txt>*_
  ├❧ _${usedPrefix}delchatgpt_
  ├❧ _${usedPrefix}gptvoz *<txt>*_
  ├❧ _${usedPrefix}dall-e *<txt>*_
  ├❧ _${usedPrefix}spamwa *num|txt|cant>*_
  ├❧ _${usedPrefix}tamaño *<cant> <img / video>*_
  ├❧ _${usedPrefix}readviewonce *<img / video>*_
  ├❧ _${usedPrefix}clima *<país> <ciudad>*_
  ├❧ _${usedPrefix}encuesta *<txt1|txt2>*_
  ├❧ _${usedPrefix}afk *<motivo>*_
  ├❧ _${usedPrefix}ocr *<responde a img>*_
  ├❧ _${usedPrefix}hd *<responde a img>*_
  ├❧ _${usedPrefix}acortar *<url>*_
  ├❧ _${usedPrefix}calc *<operacion>*_
  ├❧ _${usedPrefix}del *<msj>*_
  ├❧ _${usedPrefix}whatmusic *<audio>*_
  ├❧ _${usedPrefix}readqr *<img>*_
  ├❧ _${usedPrefix}qrcode *<txt>*_
  ├❧ _${usedPrefix}readmore *<txt1|txt2>*_
  ├❧ _${usedPrefix}styletext *<txt>*_
  ├❧ _${usedPrefix}traducir *<txt>*_
  ├❧ _${usedPrefix}nowa *num>*_
  ├❧ _${usedPrefix}covid *<pais>*_
  ├❧ _${usedPrefix}horario_
  ├❧ _${usedPrefix}dropmail_
  ├❧ _${usedPrefix}igstalk *<usr>*_
  ├❧ _${usedPrefix}tiktokstalk *<usr>*_
  ├❧ _${usedPrefix}img *<txt>*_
  ╰───── • ◆ • ─────╯

  ${tradutor.texto1[26]}

  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}adventure_
  ├❧ _${usedPrefix}cazar_
  ├❧ _${usedPrefix}cofre_
  ├❧ _${usedPrefix}balance_
  ├❧ _${usedPrefix}claim_
  ├❧ _${usedPrefix}heal_
  ├❧ _${usedPrefix}lb_
  ├❧ _${usedPrefix}levelup_
  ├❧ _${usedPrefix}myns_
  ├❧ _${usedPrefix}perfil_
  ├❧ _${usedPrefix}work_
  ├❧ _${usedPrefix}minar_
  ├❧ _${usedPrefix}minar2_
  ├❧ _${usedPrefix}buy_
  ├❧ _${usedPrefix}buyall_
  ├❧ _${usedPrefix}verificar_
  ├❧ _${usedPrefix}robar *<cant> <@tag>*_
  ├❧ _${usedPrefix}crime
  ├❧ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ├❧ _${usedPrefix}unreg *<sn>*_
  ╰───── • ◆ • ─────╯

  ≪ STICKERS Y FILTROS ≫
  
  ╭───── • ◆ • ─────╮
  ├❧ _${usedPrefix}sticker *<responder a img o video>*_
  ├❧ _${usedPrefix}sticker *<url>*_
  ├❧ _${usedPrefix}sticker2 *<responder a img o video>*_
  ├❧ _${usedPrefix}sticker2 *<url>*_
  ├❧ _${usedPrefix}s *<responder a img o video>*_
  ├❧ _${usedPrefix}s *<url>*_
  ├❧ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ├❧ _${usedPrefix}scircle *<img>*_
  ├❧ _${usedPrefix}sremovebg *<img>*_
  ├❧ _${usedPrefix}semoji *<tipo> <emoji>*_
  ├❧ _${usedPrefix}qc *<txt>*_
  ├❧ _${usedPrefix}attp *<txt>*_
  ├❧ _${usedPrefix}attp2 *<txt>*_
  ├❧ _${usedPrefix}attp3 *<txt>*_
  ├❧ _${usedPrefix}ttp *<txt>*_
  ├❧ _${usedPrefix}ttp2 *<txt>*_
  ├❧ _${usedPrefix}ttp3 *<txt>*_
  ├❧ _${usedPrefix}ttp4 *<txt>*_
  ├❧ _${usedPrefix}ttp5 *<txt>*_
  ├❧ _${usedPrefix}pat *<@tag>*_
  ├❧ _${usedPrefix}slap *<@tag>*_
  ├❧ _${usedPrefix}kiss *<@tag>*_
  ├❧ _${usedPrefix}dado_
  ├❧ _${usedPrefix}wm *<packname> <autor>*_
  ├❧ _${usedPrefix}stickermarker *<efecto> <img>*_
  ├❧ _${usedPrefix}stickerfilter *<efecto> <img>*_
  ╰───── • ◆ • ─────╯

 ≪ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗢𝗪𝗡𝗘𝗥𝗦 ≫
  
  ╭───── • ◆ • ─────╮ 
  ├❧ _> *<funcion>*_
  ├❧ _=> *<funcion>*_
  ├❧ _$ *<funcion>*_
  ├❧ _${usedPrefix}dsowner_
  ├❧ _${usedPrefix}setprefix *<prefijo>*_
  ├❧ _${usedPrefix}resetprefix_
  ├❧ _${usedPrefix}autoadmin_
  ├❧ _${usedPrefix}grouplist_
  ├❧ _${usedPrefix}chetar_
  ├❧ _${usedPrefix}leavegc_
  ├❧ _${usedPrefix}cajafuerte_
  ├❧ _${usedPrefix}blocklist_
  ├❧ _${usedPrefix}addowner *<@tag / num>*_
  ├❧ _${usedPrefix}delowner *<@tag / num>*_
  ├❧ _${usedPrefix}block *<@tag / num>*_
  ├❧ _${usedPrefix}unblock *<@tag / num>*_
  ├❧ _${usedPrefix}enable *restrict*_
  ├❧ _${usedPrefix}disable *restrict*_
  ├❧ _${usedPrefix}enable *autoread*_
  ├❧ _${usedPrefix}disable *autoread*_
  ├❧ _${usedPrefix}enable *public*_
  ├❧ _${usedPrefix}disable *public*_
  ├❧ _${usedPrefix}enable *pconly*_
  ├❧ _${usedPrefix}disable *pconly*_
  ├❧ _${usedPrefix}enable *gconly*_
  ├❧ _${usedPrefix}disable *gconly*_
  ├❧ _${usedPrefix}enable *anticall*_
  ├❧ _${usedPrefix}disable *anticall*_
  ├❧ _${usedPrefix}enable *antiprivado*_
  ├❧ _${usedPrefix}disable *antiprivado*_
  ├❧ _${usedPrefix}enable *modejadibot*_
  ├❧ _${usedPrefix}disable *modejadibot*_
  ├❧ _${usedPrefix}enable *audios_bot*_
  ├❧ _${usedPrefix}disable *audios_bot*_
  ├❧ _${usedPrefix}enable *antispam*_
  ├❧ _${usedPrefix}disable *antispam*_
  ├❧ _${usedPrefix}msg *<txt>*_
  ├❧ _${usedPrefix}banchat_
  ├❧ _${usedPrefix}unbanchat_
  ├❧ _${usedPrefix}resetuser *<@tag>*_
  ├❧ _${usedPrefix}banuser *<@tag>*_
  ├❧ _${usedPrefix}unbanuser *<@tag>*_
  ├❧ _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ├❧ _${usedPrefix}añadirxp *<@tag> <cant>*_
  ├❧ _${usedPrefix}banuser *<@tag>*_
  ├❧ _${usedPrefix}bc *<txt>*_
  ├❧ _${usedPrefix}bcchats *<txt>*_
  ├❧ _${usedPrefix}bcgc *<txt>*_
  ├❧ _${usedPrefix}bcgc2 *<aud>*_
  ├❧ _${usedPrefix}bcgc2 *<vid>*_
  ├❧ _${usedPrefix}bcgc2 *<img>*_
  ├❧ _${usedPrefix}bcbot *<txt>*_
  ├❧ _${usedPrefix}cleartpm_
  ├❧ _${usedPrefix}restart_
  ├❧ _${usedPrefix}update_
  ├❧ _${usedPrefix}banlist_
  ├❧ _${usedPrefix}addprem *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ├❧ _${usedPrefix}delprem *<@tag>*_
  ├❧ _${usedPrefix}listcmd_
  ├❧ _${usedPrefix}setppbot *<responder a img>*_
  ├❧ _${usedPrefix}addcmd *<txt>*_
  ├❧ _${usedPrefix}delcmd_
  ├❧ _${usedPrefix}saveimage_
  ├❧ _${usedPrefix}viewimage_
  ╰───── • ◆ • ─────╯`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
