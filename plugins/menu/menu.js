import os from 'os'
import moment from 'moment-timezone'
import config from '../../config.js'

export const command = 'menu'

export async function run({ sock, msg }) {
  const pushName =
    msg.pushName || 'User'

  const uptime = process.uptime()
  const hours = Math.floor(uptime / 3600)
  const minutes = Math.floor((uptime % 3600) / 60)
  const seconds = Math.floor(uptime % 60)

  const ramUsed = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
  const ramTotal = (os.totalmem() / 1024 / 1024).toFixed(0)

  const text = `*Hello ${pushName} 👋*
I am *${config.botName}* Userbot🎈
*┌────────────────────┐*
*├ ⏰ 𝐔𝐩𝐭𝐢𝐦𝐞* : ${hours} hour, ${minutes} minute, ${seconds} seconds
*├ 🚨 𝐇𝐨𝐬𝐭* : Heroku
*├ 🎡 𝐏𝐫𝐞𝐟𝐢𝐱* : ${config.prefix}
*├ 👤 𝐔𝐬𝐞𝐫* : ${pushName}
*├ ⛵ 𝐑𝐚𝐦 𝐮𝐬𝐬𝐚𝐠𝐞* : ${ramUsed}MB / ${ramTotal}MB
*├ 👨🏻‍💻 𝐎𝐰𝐧𝐞𝐫* : ${config.owners[0]}
*├ ⚖ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬* : THANUVA ᴵᴺᶜ
*├ 🧬 𝐕𝐞𝐫𝐬𝐢𝐨𝐧* : 10.0.0
*├ 💼 𝐖𝐨𝐫𝐤 𝐓𝐲𝐩𝐞* : only_group
*└────────────────────┘*

*🫟 Your all-in-one WhatsApp assistant — fast, reliable, and easy to use!*

*Reply Below Number 🔢*

*1* ||  MAIN COMMANDS
*2* ||  OWNER COMMANDS
*3* ||  GROUP COMMANDS
*4* ||  MOVIE COMMANDS
*5* ||  DOWNLOAD COMMANDS
*6* ||  CONVERT COMMANDS
*7* ||  SEARCH COMMANDS
*8* ||  LOGO COMMANDS
*9* ||  AI COMMANDS
*10* || OTHER COMMANDS

*● THANUVA-X-MD WHATSAPP BOT ●*`

  await sock.sendMessage(
    msg.key.remoteJid,
    { text },
    { quoted: msg }
  )
}
