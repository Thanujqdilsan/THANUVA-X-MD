export const command = '1'

export async function run({ sock, msg }) {
const text = `*📌 MAIN COMMANDS*

.menu
.alive
.ping
.runtime
.speed
.owner
.rules
.help
.info

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
}
