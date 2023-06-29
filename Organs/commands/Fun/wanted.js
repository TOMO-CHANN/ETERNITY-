const canvacord = require("canvacord");
module.exports = {
    name: "wanted",
    alias: ["wanted"],
    usage: `${prefa}wanted <mention>`,
    react: "🎉",
    category: "Fun",
    start: async (client, m, { command, pushName, groupName, isAdmin, iscreator, mentionByTag, prefix, text, args, quoted, mime }) => {

        if (m.quoted) {
            try {
                img = await client.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://wallpapercave.com/dwp1x/wp10861823.jpg"
            }
            result = await canvacord.Canvacord.wanted(img);
        } else if (mentionByTag) {
            try {
                ppuser = await client.profilePictureUrl(mentionByTag[0] || m.sender, 'image')
            } catch {
                ppuser = 'https://wallpapercave.com/dwp1x/wp10861823.jpg'
            }
            result = await canvacord.Canvacord.wanted(ppuser);
        } 
        await client.sendMessage(m.from, { image: result }, { quoted: m });
    }
}
