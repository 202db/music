const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { inviteUrl, INVITE_URL } = require("../../../settings/config");

module.exports = {
    name: "invite",
    description: "Affiche le lien pour ajouter le bot a ton serveur.",
    category: "Information",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });


        const embed = new EmbedBuilder().setDescription(`### You can join our bot discord by clicking [here](${inviteUrl})`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
