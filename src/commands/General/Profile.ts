import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'profile',
            description: 'Displays user-profile 📜',
            category: 'general',
            usage: `${client.config.prefix}profile (@tag)`,
            aliases: ['p']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
       
        let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://avatarfiles.alphacoders.com/185/185733.jpg'
        }
        const data = await this.client.getUser(user)
        if (data.Xp <= 50) {
            var role = '🎯️ Noobie'
    
        } else if (data.Xp>50 && data.Xp<=150) {
            var role = '✨️ Elite'
    
        } else if (data.Xp > 150 && data.Xp<=250){
            var role = '🔶️ Ace'
    
        } else if (data.Xp > 250 && data.Xp<=350) {
            var role = '💎️ Supreme' 
    

} else if (data.Xp > 350 && data.Xp<=450) {
            var role = '🛡️ Legendary' 
    
} else if (data.Xp > 450 && data.Xp<=550) {
            var role = '🛡️ Legendary II' 
    
    } else if (data.Xp > 550 && data.Xp<=650) {
            var role = '🛡️ Legendary III' 
    
} else if (data.Xp > 650 && data.Xp<=750) {
            var role = '❄️ Mystic' 
    
} else if (data.Xp > 750 && data.Xp<=850) {
            var role = '❄️ Mystic II' 
    
} else if (data.Xp > 850 && data.Xp<=950) {
        var role = '❄️ Mystic III' 
   

} else { 
            var role = '⚔️ Sama'
    
        }
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://avatarfiles.alphacoders.com/307/307418.jpg'
            ),
            MessageType.image,
            undefined,
            undefined,
            `🏮 *Username: ${username}*\n\n🎗 *About: ${
                (await this.client.getStatus(user)).status || 'None'
            }*\n\n⭐ *XP: ${data.Xp || 0}*\n\n🔺️ *Rank:${role}*\n\n👑 *Admin: ${
                M.groupMetadata?.admins?.includes(user) || false
            }*\n\n✖ *Ban ${data.ban || false}*`
        )
    }
}
