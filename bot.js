const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "r#";
// Toxic Codes
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("Rainbow , r#help .",{type: 'WATCHING'});
  
  });// Toxic Codes

// Toxic Codes

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها :ok_hand:```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);// Toxic Codes
    switch(command) {
        case "set" :
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINSTRATOR`' );
        message.guild.createRole({name : "RainbowBot .", color : "RANDOM"}).then(r => {// Toxic Codes
            r.edit({color : "RANDOM"});
        });// Toxic Codes
    };// Toxic Codes
});// Toxic Codes
client.on("message", message => {
  if (message.content === "r#help") {
      message.react('🌈')
message.author.send(`**
r#set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
r#inv 
- لدعوة البوت
- To Invite the bot
// Toxic Codes// Toxic Codes// Toxic Codes
خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه// Toxic Codes
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!// Toxic Codes
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow // Toxic Codes
رآبط البوت - Bot Invite link// Toxic Codes
- http://cutt.us/RainbowBott
**`)// Toxic Codes
  }})
   client.on('message', message => {
	   if(message.content.startsWith(`r#inv`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.react('🌈')// Toxic Codes// Toxic Codes
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")// Toxic Codes// Toxic Codes// Toxic Codes
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")// Toxic Codes
		   .setTimestamp()// Toxic Codes// Toxic Codes// Toxic Codes// Toxic Codes
		   .setFooter(`Requested By | ${message.author.username}`)// Toxic Codes
		   .setColor("RANDOM")
		   message.author.send({embed})// Toxic Codes// Toxic Codes// Toxic Codes
	   }// Toxic Codes// Toxic Codes// Toxic Codes// Toxic Codes// Toxic Codes
   });
client.login(process.env.BOT_TOKEN)
