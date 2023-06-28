module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4',
                   'https://media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4',
                   'https://media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4',
                   'https://media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4',
                   'https://media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://i.ibb.co/t3Jd1wK/Eternity-6.png"
        
                         
const lemo = `
*━『 WE 』━*

*1) [ SURVEY >> CORPS ] :*
https://chat.whatsapp.com/K1vfhEePsNYKTkd5KtYRT6
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
