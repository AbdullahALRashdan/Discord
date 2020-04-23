
const Discord = require('discord.js');
fs = require('fs');

const bot = new Discord.Client();

const token =  "NzAyMzAzNDI0NzgzMzE5MTEy.Xp-FJA.DN4iZBdbegVR6PzQ0_DPjfr9qIk";
const prifix = "!";

bot.login(token);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

  
bot.on('message', msg => {
    let args = msg.content.substring(prifix.length).split(" ");

    switch(args[0]){
        case "help":
            const Embed = new Discord.MessageEmbed()
            .setAuthor("to: " + msg.author.username)
            .setTitle("BOT Helper")
            .setColor(0x48B494)
            .setDescription("available commands:\n1: !ping\n2: !admin\n3: !flag\n4: `Under Constructions`")
            .setThumbnail('https://cutewallpaper.org/21/gir-background/Invader-Zim-Gir-Transparent-Background-Invader-Zim-Design-.png')
            msg.author.send(Embed);
        break;

        case "ping":
            msg.author.send("pong");
        break;

        case "flag":
            msg.author.send("nope!");
        break;

        case "admin":
            msg.author.send("CipherTextCTFv2");
        break;

        case "l3tM3G3tmYFl4gg_B07":
            fs.readFile('./flag.txt', 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                msg.author.send("Here's your flag: `" + data + "`");
            });
        break;
    }

});

