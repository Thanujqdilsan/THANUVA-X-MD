import fs from 'fs';
import config from './config.js';

const plugins = [];

fs.readdirSync('./plugins').forEach(dir => {
  const path = `./plugins/${dir}`;
  if (fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(file => {
      if (file.endsWith('.js')) plugins.push(import(`${path}/${file}`));
    });
  }
});

export default async function handler(sock, msg) {
  const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
  if (!text.startsWith(config.prefix)) return;

  const args = text.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  for (let plugin of await Promise.all(plugins)) {
    if (plugin.command === command) {
      try { 
        return plugin.run({ sock, msg, args });
      } catch (e) { 
        console.error(e);
        return sock.sendMessage(msg.key.remoteJid, { text: '⚠️ Error executing command' });
      }
    }
  }
}
