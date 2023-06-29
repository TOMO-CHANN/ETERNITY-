const canvacord = require("canvacord");
module.exports = {
    name: "slap",
    alias: ["slap"],
    usage: `${prefa}slap <mention>`,
    react: "🎉",
    category: "Fun",
    start: async (client, m, { command, pushName, groupName, isAdmin, iscreator, mentionByTag, prefix, text, args, quoted, mime }) => {
    if (!m.quoted && !mentionByTag[0]) return m.reply("*❄️ Tag Someone*")
    if (m.quoted) {
            try {
                img = await client.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://wallpapercave.com/dwp1x/wp10861823.jpg"
            }
        } else {
            try {
                img = await client.profilePictureUrl(mentionByTag[0], 'image')
            } catch {
                img = "https://wallpapercave.com/dwp1x/wp10861823.jpg"
            }
        }
        try {
            ppuser = await client.profilePictureUrl(m.sender, 'image')
        } catch {
            ppuser = 'https://wallpapercave.com/dwp1x/wp10861823.jpg'
        }
        result = await canvacord.Canvacord.slap(ppuser, img);
        await client.sendMessage(m.from, { image: result }, { quoted: m });
    }
}
