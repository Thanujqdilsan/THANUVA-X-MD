export const command = '10'

export async function run({ sock, msg }) {
const text = `*🧩 OTHER COMMANDS*

.sticker
.toimg
.tts
.calculator
.weather
.time
.date
.qr <text>
.shorturl

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
}
