const { Client, GatewayIntentBits } = require('discord.js')
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
    if(!content) return
    const send = (message) => {
        msg.channel.send(message)
    }
    switch (content) {
        case 'help':
            send(`1 ~ 5까지 숫자를 입력해 주세요`)
            break
        case '1':
            send('hello')
            break
        case '2':
            send('안녕하세요')
            break
        case '3':
            send('hola')
            break
        case '4':
            send('bonjour')
            break
        case '5':
            send('你好')
            break
        default:
            send('wrong command')
    }
})

client.login(config.BOT_TOKEN)