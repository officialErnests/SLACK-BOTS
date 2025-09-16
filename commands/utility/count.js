const { SlashCommandBuilder } = require('discord.js');
let count = 0;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('count')
		.setDescription('count up :DD'),
	async execute(interaction) {
		count += 1;
		await interaction.reply('WOW, you have counted already till ' + count);
	},
};
