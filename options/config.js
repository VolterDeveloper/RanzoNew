const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['12056834746','62895418551246']
global.ownernomer = "62895418551246"
global.premium = ['62895418551246','12056834746']
global.packname = 'Created By Ranzo'
global.author = 'Botz Whatsapp'
global.sessionName = 'ranzostoree'
global.jumhal = '100000000000000'
global.prefa = ['','!','.','#','&']
global.sp = 'Ranzo Storee'
global.mess = {
    success: '*_DONE ... ✅_*',
    admin: '*_FITUR KHUSUS ADMIN GROUP ❗_*',
    botAdmin: '*_BOT HARUS MENJADI ADMIN TERLEBIH DAHULU ❗_*',
    premime: '*_FITUR KHUSUS USER PREM , MAU DAFTAR ? KETIK #owner ❗_*',
    owner: '*_FITUR KHUSUS OWNER BOT ❗_*',
    group: '*_FITUR DIGUNAKAN KHUSUS GROUP❗_*',
    private: '*_FITUR DIGUNAKAN KHUSUS PRIVATE ❗_*',
    bot: '*_FITUR KHUSUS PENGGUNA NOMOR BOTZ ❗_*',
    wait: '*_[❗] SEDANG DIPROSES_*',
    endLimit: '*_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_*',
}
global.limitawal = {
    premium: "Unlimited",
    free: 5
}
global.thumb = fs.readFileSync('./image/ranzo.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
