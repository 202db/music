require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "TOKEN DE VOTRE BOT", // <==== Token de votre bot
    prefix: process.env.PREFIX || "/", // <==== Préfix
    color: process.env.EMBED_COLOR || "#FF0004", // <==== Couleur de l'embed en #
    owner: process.env.OWNER_ID || "ID OWNER", // <==== ID de l'owner du bot
    guildLogs: process.env.GUILD_LOGS || "000000000000000", // <==== ID du salon de join/leave voc logs
    leaveTimeout: process.env.LEAVE_TIMEOUT || "100000", // <====Défini le temps d'attente sans qu'il y ai quelqu'un dans le voc avant que le bot leave le voc || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "true"), // <====Choisissez false/true pour les nouveautées de youtube

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== Choisissez votre type de recherches de musique| "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== Choisissez la source par défaut || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "ClientID", // <==== Votre SPOTIFY CLIENT ID
        clientSecret: process.env.SPOTIFY_SECRET || "ClientSECRET", // <==== Votre SPOTIFY CLIENT SECRET
        reconnectTries: Infinity, // <==== Nombre total de tentative de reconnexion du bot en cas de probleme | Infinity par défaut
        playlistLimit: 2, // <==== 1 = 100 Musiques
        albumLimit: 2, // <==== 1 = 50 Musique
        artistLimit: 2, // <==== 1 = 50 Musique
        searchMarket: "us",
     },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Node 1", // Nom du lavalink (n'importe quel nom marchera)
            host: process.env.NODE_HOST1 || "LavalinkHOST", // <==== Mettez le host du lavalink
            port: parseInt(process.env.NODE_PORT1 || "PORT"), // <==== Port du lavalink
            password: process.env.NODE_PASSWORD1 || "PASSWORD", // <==== Mot de passe du lavalink
            secure: parseBoolean(process.env.NODE_SECURE1 || "true"), // <==== Sécuriter | "true/false"
            regions: process.env.NODE_REGIONS1 || ["Région"], // <==== Régions disponibles [ "singapore","indonesian","japan"," ]
        },
        {
            name: process.env.NODE_NAME2 || "Node 1", // Nom du lavalink (n'importe quel nom marchera)
            host: process.env.NODE_HOST2 || "LavalinkHOST", // <==== Mettez le host du lavalink
            port: parseInt(process.env.NODE_PORT2 || "PORT"), // <==== Port du lavalink
            password: process.env.NODE_PASSWORD2 || "PASSWORD", // <==== Mot de passe du lavalink
            secure: parseBoolean(process.env.NODE_SECURE2 || "true"), // <==== Sécuriter | "true/false"
            regions: process.env.NODE_REGIONS2 || ["Région"], // <==== Régions disponibles [ "singapore","indonesian","japan"," ]
        }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "URI", // <==== Votre lien Mongo
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/", // <==== Lien de votre serveur support
    voteUrl: process.env.VOTE_URL || "https://discord.gg/", // <==== Votre lien de vote 
    inviteUrl: process.env.INVITE_URL || "https://discord.com/oauth2/authorize?client_id=YOURID&permissions=8&integration_type=0&scope=bot+applications.commands", // <==== Lien d'invitations de votre bot
    imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/attachments/1281979329445625917/1282023558121394380/final1.png?ex=66ddd8fb&is=66dc877b&hm=37755a0db9f123959a679c5ede306ecf48c36090f66aa555d3be9b59089eb02c&", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}


/**
 * @INFO
 * Bot Coded by 202db | https://discord.gg/WzQGA8A5
 * @INFO
 * @INFO
 * N'enlever pas les crédits
 * @INFO
 */