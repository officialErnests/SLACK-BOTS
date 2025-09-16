const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Who is das!?'),
	async execute(interaction) {
		await interaction.reply('!YOUR!');
		await wait(2_000);
		await interaction.editReply('!HELLO!');
		await wait(2_000);
		await interaction.editReply('!HAS!');
		await wait(2_000);
		await interaction.editReply('!BEEN!');
		await wait(2_000);
		await interaction.editReply('!NOOBINATED!');
	},
};
