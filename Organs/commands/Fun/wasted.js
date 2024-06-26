const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const canvacord = require("canvacord");
module.exports = {
    name: "wasted",
    alias: ["wast"],
    usage: `${prefa}wasted <mention>`,
    react: "🎉",
    category: "Fun",
    start: async (client, m, { command, pushName, groupName, isAdmin, iscreator, mentionByTag, prefix, text, args, quoted, mime }) => {
        if (m.quoted) {
            try {
                img = await client.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://wallpapercave.com/dwp1x/wp10861823.jpg"
            }
            result = await canvacord.Canvacord.wasted(img);
        } else if (mentionByTag[0]) {
            try {
                img = await client.profilePictureUrl(mentionByTag[0], 'image')
            } catch {
                img = "https://wallpapercave.com/dwp1x/wp10861823.jpg"
            }
            result = await canvacord.Canvacord.wasted(img);
        } else if (m.sender) {
            try {
                ppuser = await client.profilePictureUrl(m.sender, 'image')
            } catch {
                ppuser = 'https://wallpapercave.com/dwp1x/wp10861823.jpg'
            }
            result = await canvacord.Canvacord.wasted(ppuser);
        }
        let sticker = new Sticker(result, {
            pack: `Wasted`,
            author:"" ,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 75,
            background: 'transparent' // The sticker background color (only for full stickers)
        })
        const stikk = await sticker.toBuffer()
        client.sendMessage(m.from, {sticker: stikk}, {quoted: m})
    }
}
