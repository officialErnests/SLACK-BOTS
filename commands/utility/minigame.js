const { SlashCommandBuilder,  ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { error } = require('node:console');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('minigame')
		.setDescription('Fun mini game XD'),
	async execute(interaction) {
		const play = new ButtonBuilder()
			.setCustomId('startGame')
			.setLabel('Start')
			.setStyle(ButtonStyle.Primary);

		const exit = new ButtonBuilder()
			.setCustomId('endGame')
			.setLabel('Exit')
			.setStyle(ButtonStyle.Secondary);

		const row = new ActionRowBuilder()
			.addComponents(play, exit);
		
			
		let response = await interaction.reply({
			content: 'Hello and welcome to the NOOBINATOR! \n Start a new game??',
			components: [row],
			withResponse: true,
		});
		try {
			const confirmation = await response.resource.message.awaitMessageComponent({time: 60_000});
			if (confirmation.customId === 'startGame') {
				const opt1 = new ButtonBuilder()
					.setCustomId('opt1')
					.setLabel('Kill the dragon')
					.setStyle(ButtonStyle.Primary);
				const opt2 = new ButtonBuilder()
					.setCustomId('opt2')
					.setLabel('Take cover')
					.setStyle(ButtonStyle.Primary);
				const row = new ActionRowBuilder()
					.addComponents(opt1, opt2, exit);
		
				await confirmation.update({
					content: 'You see a big dragon, what do you do??',
					components: [row],
					withResponse: true,
				});
				try {
					const confirmation2 = await response.resource.message.awaitMessageComponent({time: 60_000});
					if (confirmation2.customId === 'opt1') {
						await confirmation2.update({
							content: 'As you aproached the dragon it started spewing fire at you and burned you alive.\n You died.',
							components: [],
						});
					} else if (confirmation2.customId === 'opt2') {
						await confirmation2.update({ content: 'You rolled behind table, hoping that the dragon didn\'t notice you.\n But, unfortunatlly the dragon saw you and burned you alive.\n You died.', components: [] });
					} else if (confirmation2.customId === 'endGame') {
						await confirmation2.update({ content: 'You fleed and covered in fear and decided to stop playing :cry:', components: [] });
					}
				} catch (error) {
					await interaction.editReply({ content: 'Game ended after 1 min timeout :((' + error});
				}
			} else if (confirmation.customId === 'endGame') {
				await confirmation.update({ content: 'You fleed and covered in fear and decided to stop playing :cry:', components: [] });
			}
		} catch (error) {
			await interaction.editReply({ content: 'Game ended after 1 min timeout :((' + error});
		}
	},
};
