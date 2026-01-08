export const command = 'alive';

export async function run({ sock, msg }) {
  await sock.sendMessage(msg.key.remoteJid, { text: '✅ THANUVA-X-MD is alive!' });
}
