const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
let count = 0;
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
module.exports = {
	data: new SlashCommandBuilder()
		.setName('count')
		.setDescription('count up :DD'),
	async execute(interaction) {
		count += 1;
		await interaction.reply('WOW, you have counted already till ' + count);
	},
};
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('says whatever')
		.addStringOption(option => option.setName('say').setDescription('make terminator talk').setRequired(true)),
	async execute(interaction) {
		await interaction.reply('NOOBINATOR SAYS ' + interaction.options.getString('say').toUpperCase());
	},
};