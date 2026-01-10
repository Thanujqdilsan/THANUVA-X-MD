export const command = '3'

export async function run({ sock, msg }) {
const text = `*👥 GROUP COMMANDS*

.add
.kick
.promote
.demote
.tagall
.hidetag
.mute
.unmute
.lock
.unlock
.setdesc
.setname

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
}
