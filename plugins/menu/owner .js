import config from '../../config.js'

export const command = '2'

export async function run({ sock, msg }) {
const sender = msg.key.participant || msg.key.remoteJid
if (!config.owners.some(o => sender.includes(o)))
return sock.sendMessage(msg.key.remoteJid,{ text:'❌ Owner only command' })

const text = `*👑 OWNER COMMANDS*

.restart
.shutdown
.broadcast
.setpp
.block
.unblock
.join
.leave
.autoread on/off

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
  }
