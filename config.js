//my secript by @deltatech 𝐯𝟏𝟒
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀 𝐕➎🐦‍🔥"
global.dana = "chat admin"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "233267990454"
global.namabot = "𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀 𝐕➎🐦‍🔥"
global.nomorbot = "233267990454"
global.nameCreator = "𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀 𝐕➎🌹"
global.linkyt = "https://whatsapp.com/channel/0029VauerXp2f3ERPtUjBy0u"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/yu194w.jpeg'
global.isLink = "https://whatsapp.com/channel/0029VauerXp2f3ERPtUjBy0u"
global.packname = "𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀 𝐕➎🐦‍🔥"
global.author = "𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀 𝐕➎🐦‍🔥"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})