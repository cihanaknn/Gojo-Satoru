//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+12403248506']
global.premium = ['+12403248506']
global.ownernomer = '+12403248506'
global.ownername = '〆𝙲𝚒𝚑𝚊𝚗𝚂𝚒𝚗𝚜'
global.botname = '〆𝙲𝚒𝚑𝚊𝚗𝚜𝚋𝚘𝚝'
global.footer = '©〆𝙲𝚒𝚑𝚊𝚗𝚂𝚒𝚗𝚜'
global.ig = 'https://instagram.com/cihan_aknn'
global.region = 'Turkey,Europe'
global.sc = 'https://github.com/cihanaknn/Gojo-Satoru'
global.myweb = 'https://cihanflix.wordpress.com'
global.packname = 'Gojo-Satoru'
global.author = '〆𝙲𝚒𝚑𝚊𝚗𝚂𝚒𝚗𝚜'
global.sessionName = 'session'
global.prefa = ['.']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Bu komutu Sadece adminler kullanabilir!',
    botAdmin: 'Bot Admin değil!',
    owner: 'Bu komutu sadece kurucu kullanabilir!',
    group: 'Bu komutu sadece gruplarda kullanabilirsin!',
    private: 'Bu komutu sadece özel sohbetlerde kullanabilirsin!',
    bot: 'Bu komutu sadece bot kullanabilir!(yani ben)',
    wait: 'Seni biraz bekleteceğim...',
    error: 'Hata! Api Anahtarının Süresi Dolmuş olabilir🤔!',
    endLimit: 'Günlük limitin doldu, Günlük limit her 12 saatte bir yenilenir',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
