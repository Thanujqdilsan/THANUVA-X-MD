import makeWASocket, { useMultiFileAuthState, fetchLatestBaileysVersion } from '@adiwajshing/baileys';
import handler from '../handler.js';

export default async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    auth: state,
    version,
    printQRInTerminal: true
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    // handle commands
    await handler(sock, msg);
  });
    }
