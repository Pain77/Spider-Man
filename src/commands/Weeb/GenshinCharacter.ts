import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'genshincharacter',
            description: `Gives you the data of the given genshin character.`,
            aliases: ['gchar', 'genshin'],
            category: 'weeb',
            usage: `${client.config.prefix}gchar [name]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the character name that you wanna search.`))
        const gchara = joined.trim()
        await axios
            .get(`https://api.genshin.dev/characters/${gchara}`)
            .then((response) => {
                const text = `š *Name:* ${response.data.name}\nš  *Vision:* ${response.data.vision}\nš *Weapon:* ${response.data.weapon}\nā© *Nation:* ${response.data.nation}\nš *Affiliation:* ${response.data.affiliation}\nā *Constellation:* ${response.data.constellation}\nš *Rarity:* ${response.data.rarity} stars\nš *Birthday:* ${response.data.birthday}\nš *Description:* ${response.data.description}\n`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`Sorry, couldn't find character *${gchara}*\nš *Note:* Nicknames does not work here.`)
            })
    }
}
