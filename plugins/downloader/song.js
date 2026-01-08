export const command = 'song';

export async function run({ sock, msg, args }) {
  const url = args[0];
  if (!url) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide song URL!' });

  // implement downloader logic (use lib/downloader.js)
  await sock.sendMessage(msg.key.remoteJid, { text: `🎵 Downloading ${url}...` });
}
