/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/bEjgXsPzWMkAAAPo/chitanda-eru.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `𝙈𝙤𝙨𝙝𝙞 𝙢𝙤𝙨𝙝, 𝙢𝙮 𝙣𝙖𝙢𝙚 𝙞𝙨 𝙘𝙝𝙞𝙩𝙖𝙣𝙙𝙖 𝙚𝙧𝙪 𝙖 𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙗𝙤𝙩 𝙘𝙧𝙚𝙖𝙩𝙚𝙙 𝙗𝙮 𝙖𝙠𝙖𝙨𝙝𝙞. 𝙞𝙛 𝙮𝙤𝙪 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙖𝙙𝙙 𝙢𝙚 𝙞𝙣 𝙮𝙤𝙪𝙧 𝙜𝙧𝙤𝙪𝙥 𝙩𝙝𝙚𝙣 𝙩𝙮𝙥𝙚 ".𝙢𝙤𝙙𝙨" 𝙖𝙣𝙙 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙢𝙮 𝙘𝙧𝙚𝙖𝙩𝙤𝙧. Use something from *${this.client.config.prefix}help* list if you want anything. \n`,
			}
		);
	};
}
