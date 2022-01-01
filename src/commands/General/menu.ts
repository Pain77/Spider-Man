import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/ichi/ichigo.mp4','./assets/images/ichi/ichigo2.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        const mn=`
🪆𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚! 𝐈'𝐦 *𝙸𝚌𝚑𝚒𝚐𝚘-𝙱𝚘𝚝𝚝𝚘* , 𝐞𝐧𝐣𝐨𝐲 𝐮𝐬𝐢𝐧𝐠 𝐦𝐲 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬..! 
🎋 𝐇𝐞𝐫𝐞 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐋𝐢𝐬𝐭𝐞𝐝 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 : -

🎊 𝐅𝐔𝐍 🎊

🔖 ғᴀᴄᴛ  
🔖 ǫᴜᴏᴛᴇ
🔖 ғǫᴜᴏᴛᴇ      
🔖 ᴡʜʏ
🔖 ᴊᴏᴋᴇ        
🔖 ᴛʀɪɢɢᴇʀ

⛩️ 𝐖𝐄𝐄𝐁 ⛩️

🏷️ᴡᴀɪғᴜ            
🏷️ ɴᴇᴋᴏ
🏷️ ᴀɴɪᴍᴇ-ʟɪɴᴇ      
🏷️ ʟᴏʟɪ
🏷️ ʀᴘᴀᴘᴇʀ          
🏷️ ᴋɪᴛsᴜɴᴇ
🏷️ ᴍᴇɢᴜᴍɪᴘᴀᴘᴇʀ
🏷️ ʜᴜsʙᴀɴᴅʀᴏ
🏷️ sʜɪɴᴏʙᴜ-ᴘᴀᴘᴇʀ
🏷️ ɢᴇɴ𝐬ʜɪɴ ᴄʜᴀʀᴀᴄᴛᴇʀ
🏷️ ᴀɴɪᴍᴇ ᴄʜᴀʀᴀᴄᴛᴇʀ

🎐 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 🎐

♐ ᴀᴅᴍɪɴs        
♐ ᴅᴇʟᴇᴛᴇ
♐ ᴇᴠᴇʀʏᴏɴᴇ       
♐ ᴍᴏᴅs
♐ ᴘʀᴏғɪʟᴇ        
♐ xᴘ
♐ ɢᴏᴏɢʟᴇ
♐ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
♐ ʀᴇᴠᴏᴋᴇ
♐ ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ

🎼 𝐌𝐄𝐃𝐈𝐀 🎼

🎶 ʟʏʀɪᴄs     
🎶 sᴘᴏᴛɪғʏ
🎶 ʏᴛᴀ         
🎶 ʏᴛᴠ
🎶 ʏᴛs         
🎶 ᴘʟᴀʏ
🎶 ᴘʟᴀʏᴠ
🎶 ssᴡᴇʙ

📃 𝐌𝐈𝐒𝐂 📃

⛓️ ʜɪ          
⛓️ ʀᴇᴛʀɪᴇᴠᴇ
⛓️ ᴄʀʏᴘᴛᴏ
⛓️ ɢɪᴛʜᴜʙ  
⛓️ ᴡᴇᴀᴛʜᴇʀ
⛓️ ᴇʟᴇᴍᴇɴᴛ

📯 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐈𝐎𝐍 📯

📍ᴀᴄᴛɪᴠᴀᴛᴇ     
📍ᴄʟᴏsᴇ
📍ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ   
📍ᴏᴘᴇɴ
📍ᴅᴇᴍᴏᴛᴇ        
📍ᴘᴜʀɢᴇ
📍ᴘʀᴏᴍᴏᴛᴇ       
📍ʀᴇᴍᴏᴠᴇ
📍ɢʀᴏᴜᴘ ᴄʜᴀɴɢᴇ

⚠️ 𝐍𝐒𝐅𝐖 ⚠️

🀄 ʙʟᴏᴡᴊᴏʙ    
🀄 ɴsғᴡᴊᴏᴋᴇ
🀄 ɴsғᴡ-ɴᴇᴋᴏ  
🀄 ᴛʀᴀᴘ
🀄 ɴsғᴡ-ᴡᴀɪғᴜ

🎭 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 🎭

🎗️ ʙɪᴛᴇ        
🎗️ ʜɪɢʜғɪᴠᴇ
🎗️ ʙʟᴜsʜ       
🎗️ sᴍᴜɢ
🎗️ ʙᴏɴᴋ        
🎗️ ʜᴜɢ
🎗️ ʙᴜʟʟʏ       
🎗️ ᴋɪᴄᴋ
🎗️ ᴄʀɪɴɢᴇ      
🎗️ ᴋɪʟʟ
🎗️ ᴄʀʏ         
🎗️ ᴋɪss
🎗️ ᴄᴜᴅᴅʟᴇ      
🎗️ ʟɪᴄᴋ
🎗️ ᴅᴀɴᴄᴇ       
🎗️ ᴘᴀᴛ
🎗️ ᴇᴀᴛ         
🎗️ ᴘᴏᴋᴇ
🎗️ ʜᴀɴᴅʜᴏʟᴅ    
🎗️ sʟᴀᴘ
🎗️ ʜᴀᴘᴘʏ       
🎗️ sᴍɪʟᴇ
🎗️ ᴜʟᴛʀᴀʜᴜɢ    
🎗️ ᴡᴀᴠᴇ
🎗️ ᴡɪɴᴋ        
🎗️ ʏᴇᴇᴛ

🪦 𝐔𝐓𝐋𝐈𝐒 🪦

⏳ ʙʟᴜʀ    
⏳ sᴛɪᴄᴋᴇʀ
⏳ sᴛᴇᴀʟ   
⏳ sᴜʙʀᴇᴅ

🖥️ 𝐃𝐄𝐕 🖥️

💻 ʙᴀɴ
💻 ᴅɪ𝐬ᴀʙʟᴇ
💻 ᴇɴᴀʙʟᴇ
💻 ᴇᴠᴀʟ
💻 ʟᴇᴀᴠᴇ
💻 sᴛᴀᴛᴜs
💻 ᴜɴʙᴀɴ
 
𓊈𒆜𝐈𝐜𝐡𝐢𝐠𝐨-𝐁𝐨𝐭𝐭𝐨𒆜𓊉
`
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
