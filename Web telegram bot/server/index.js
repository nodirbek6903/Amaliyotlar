const TelegramBot = require("node-telegram-bot-api")
const token = "6421968270:AAEmNt9w2onF8iWa3u0A9y5CqSxAWe-ja-k"

const bot = new TelegramBot(token,{polling:true})

const bootstrap = () => {
    bot.on("message", async (msg) => {
        const chatId = msg.chat.id
        const text = msg.text

        if(text === "/start"){
            await bot.sendMessage(chatId, "nodirbek-myprotfolio.netlify.app saytida Nodirbek bilan bog'lanishingiz mumkin")
        }
    })
}

bootstrap()