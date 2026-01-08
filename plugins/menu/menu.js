export const command = 'menu';

export async function run({ sock, msg }) {
  const text = `
🤖 THANUVA-X-MD Menu

.ping - Test bot
.alive - Check bot
.song - Download song
.video - Download video
.ytmp3 - YouTube MP3
.ytmp4 - YouTube MP4
.tiktok - TikTok download
`;
  await sock.sendMessage(msg.key.remoteJid, { text });
}
