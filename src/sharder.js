const { ClusterManager } = require("discord-hybrid-sharding");
require("dotenv").config();
config = require("./settings/config.js");

const manager = new ClusterManager(`${__dirname}/index.js`, {
    totalShards: "auto",
    shardsPerClusters: 5,
    totalClusters: "auto",
    mode: "process",
    token: process.env.TOKEN || config.token, 
});

manager.on("clusterCreate", (cluster) => console.log(`[INFO] Bot Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });


/**
 * @INFO
 * Coder  en francais par 202.sql
 * @INFO
 *  Support | https://discord.gg/WzQGA8A5
 * @INFO
 * N'enlever pas les crédits
 * @INFO
 */