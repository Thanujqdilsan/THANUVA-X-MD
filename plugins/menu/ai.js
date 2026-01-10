export const command = '9'

export async function run({ sock, msg }) {
const text = `*🤖 AI COMMANDS*

.ai <question>
.gpt <question>
.imagine <prompt>
.ask <question>
.translate <text>
.chatbot on/off

━━━━━━━━━━━━━━
*THANUVA-X-MD*`

await sock.sendMessage(msg.key.remoteJid,{ text },{ quoted: msg })
}
