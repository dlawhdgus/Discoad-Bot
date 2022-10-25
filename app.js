const Discord = require('discord.js')
const { Client, GatewayIntentBits, EmbedBuilder} = require('discord.js')
const config = require('./config.json')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})


client.once('ready', () => {
    console.log('ready')
})

client.on('messageCreate', msg => {
    const content = msg.content.split('!')[1]
    const CommandEmbed = new EmbedBuilder()
        .setTitle('command')
        .setDescription('1 ~ 5까지 입력해주세요')
        .setColor(0xFFFFFF)
    const date = new Date()
    if(!content) return
    const send = (message) => {
        msg.channel.send(message)
    }
    switch (content) {
        case 'help':
            send({embeds : [CommandEmbed]})
            break
        case '1':
            send('`hello`')
            break
        case '2':
            send('*안녕하세요*')
            break
        case '3':
            send(Discord.bold('hola'))
            break
        case '4':
            send(Discord.italic('bonjour'))
            break
        case '5':
            send(Discord.time(date))
            break
        default:
            send(`\`\`\`fix\n Wrong Command \`\`\``)
    }
})

client.login(config.BOT_TOKEN)