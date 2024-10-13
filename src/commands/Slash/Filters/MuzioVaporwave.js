const { EmbedBuilder } = require("discord.js");


module.exports = {
    name: "vaporwave",
    description: "Défini le filtre en Vaporwave.",
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

        await player.filters.setVaporwave(true);

        const embed = new EmbedBuilder().setDescription(`\`🔩\` | Filter has been set to: \`Vaporwave\``).setColor(client.color);


        return interaction.editReply({ embeds: [embed] });
    },
};
