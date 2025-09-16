const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('says whatever')
		.addStringOption(option => option.setName('say').setDescription('make terminator talk').setRequired(true)),
	async execute(interaction) {
		await interaction.reply('NOOBINATOR SAYS ' + interaction.options.getString('say').toUpperCase());
	},
};