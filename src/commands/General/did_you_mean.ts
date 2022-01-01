import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/ichi/ichigo.mp4','./assets/images/ichi/ichigo2.mp4'
        ]
        let spiderman = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: spiderman }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Do you mean *${this.client.config.prefix}help*? \n`}
        )
    }
}
          
