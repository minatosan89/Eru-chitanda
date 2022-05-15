/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "chitanda",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 500,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/xa8GtMmTWBwAAAPo/chitanda-eru-hyouka.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `💕 *♥ eru chitanda ♥* 💕\n\n🕊 *Description: A WhatsApp Bot With Rich NSFW features created by Lord Akashi.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/minatosan89/Eru-chitanda* \n\n 📒 *Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n\n 👾 *BOT URL:https://github.com/minatosan89Eru-chitanda* \n`,
			}
		);
	};
}
