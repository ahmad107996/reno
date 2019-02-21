const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "r#";

const account = JSON.parse(fs.readFileSync('./account.json', 'utf8')); // create " account.json " folder and put into it " {} "

client.on('message', async message => {
    if (!message.guild) return;
    if (!account[message.author.id]) {
        account[message.author.id] = {
            reg: false,
            name: 'nothing'
        };
    }
    if (message.content === `${prefix}register`) {
        if (account[message.author.id].reg === true) return message.channel.send('❌ | لديك حساب مٌسجل بالفعل...');
        if (message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
        if (!args[0]) return message.channel.send('❌ | أدخل إسم للتسجيل به.');
        if (args[0]) {
            account[message.author.id].reg = true;
            account[message.author.id].name = args;
            await saveChanges();
            message.channel.send('تم تسجيل الحساب !!');
        }
    } else if (message.content === `${prefix}ping`) {
        if (account[message.author.id].reg === false) return message.channel.send('❌ | يجب أن تكون مٌسجل لإستخدام هذا الأمر');
        message.channel.send('PONG');
    }
});

function saveChanges() {
    return fs.writeFile('./account.json', JSON.stringify(account), error => {
        if (error) console.log(error);
    });
}

function saveChanges() {
    return fs.writeFile('./account.json', JSON.stringify(account), error => {
        if (error) console.log(error);
    });
}
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


//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'Rainbow')
    if(role) return message.channel.send(`**يوجد بلفعل رتبه Rainbow !**`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('**تم رتبه Rinbow تعمل الان**')//if the step completed
}});

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 2000);//the rainbow time
});client.on("message", message => {
  if (message.content === "r#help") {
      message.react('🌈')
message.author.send(`**
r#set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
r#inv 
- لدعوة البوت
- To Invite the bot
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
