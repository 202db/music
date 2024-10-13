const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "vibrato",
    description: "Défini le filtre en Vibrato.",
    category: "Filters",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: true,
        player: true,
        current: true,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });

        const player = client.poru.players.get(interaction.guild.id);

        await player.filters.setVibrato(true);

        const embed = new EmbedBuilder().setDescription(`\`🔩\` | Filter has been set to: \`Vibrato\``).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};