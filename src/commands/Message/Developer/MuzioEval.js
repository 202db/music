module.exports = {
    name: "eval",
    description: "Note le bot.",
    category: "Developer",
    aliases: [],
    owner: true,
    run: (client, message) => {
        const content = message.content.split(" ").slice(1).join(" ");

        const result = new Promise((resolve) => resolve(eval(content)));

        return result
            .then((output) => {
                if (typeof output !== "string") {
                    output = require("util").inspect(output, { depth: 0 });
                }
                if (output.includes(client.token)) {
                    output = output.replace(this.client.token, "HEHE");
                }
                return message.reply(`\`\`\`${output}\`\`\``, {
                    code: "js",
                });
            })
            .catch((err) => {
                err = err.toString();

                if (err.includes(client.token)) {
                    err = err.replace(this.client.token, "BIG YOUTUBER");
                }

                return message.reply(err, {
                    code: "js",
                });
            });
    },
};
