export const command = '4'

export async function run({ sock, msg }) {
const text = `*🎬 MOVIE COMMANDS*

.movie <name>
.fmovie <name>
.sinhala
.subtitle
.imdb <name>
.trailer <name>

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
}
