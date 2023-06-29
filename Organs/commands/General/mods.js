module.exports = {
  name: "mods",
  alias: ["owner"],
  usage: `${global.prefa}mods`,
  desc: "shows mods list",
  category: "General",
  react: "✅",

  start: async (client, m, {}) => {
    const mod = global.owner;
    const owner = mod.map((mod) => mod + "@s.whatsapp.net");
    let mo = `
       *🎉 𝙎𝙖𝙨𝙪𝙠𝙚 𝙈𝙤𝙙𝙨 🎉*\n\n`;
    for (let i = 0; i < mod.length; i++) {
      const um = await client.username(mod[i] + "@s.whatsapp.net");
      mo += `\n*👑 Name:* ${um}\n*🎖️ Tag:* @${mod[i].split("@")[0]}\n`;
    }
    let urlll = [
      "https://media.tenor.com/Ro2ZR3dRlOcAAAPo/sasuke.mp4",
      "https://media.tenor.com/-S-g9i-TqLkAAAPo/sasuke-gif.mp4",
      "https://media.tenor.com/CdMowOhahv8AAAPo/sasuke.mp4",
      "https://media.tenor.com/0JRoWdTPF0QAAAPo/sasuke-boruto.mp4",
    ];
    let rae = urlll[Math.floor(Math.random() * urlll.length)];
    await client.sendMessage(
      m.from,
      { video: { url: rae }, gifPlayback: true, caption: mo, mentions: owner },
      { quoted: m }
    );
  },
};
