import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'elements',
            description: 'get the info of the chemical element',
            aliases: ['element'],
            category: 'misc',
            usage: `${client.config.prefix}element [name]`
        })
    }
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('๐ Provide a element symbol')
        const term = joined.trim()
        await axios
            .get(`https://neelpatel05.pythonanywhere.com/element/symbol?symbol=${term}`)
            .then((response) => {
                // console.log(response);
                const text = `Information of the element *${term}* is \n ๐งช *Name:* ${response.data.name} \n โ๏ธ *Symbol:* ${response.data.symbol} \n ๐ *Atomic Number:* ${response.data.atomicNumber} \n ๐งซ *Atomic Mass:* ${response.data.atomicMass} \n ๐ฏ *Atomic Radius:* ${response.data.atomicRadius} \n ๐ *Bonding type:* ${response.data.bondingType} \n โ *Density:* ${response.data.density} \n ๐ *Group Block:* ${response.data.groupBlock} \n ๐ *State:* ${response.data.standardState}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`๐ Please provide a valid place name \n Error: ${err}`)
            })
    }
}
