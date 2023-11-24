const TelegramBot = require("node-telegram-bot-api");
const token = "6421968270:AAEmNt9w2onF8iWa3u0A9y5CqSxAWe-ja-k";

const bot = new TelegramBot(token, { polling: true });

const bootstrap = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        "nodirbek-myprotfolio.netlify.app saytida Nodirbek bilan bog'lanishingiz mumkin",
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Kurslarni ko'rish",
                  web_app: {
                    url: "https://web-telegram-bot-nine.vercel.app/",
                  },
                },
              ],
            ],
          },
        }
      );
    }

    if (msg.web_app_data?.data) {
      try {
        const data = JSON.parse(msg.web_app_data?.data);

        await bot.sendMessage(
          chatId,
          "Bizga ishonch bildirganingiz uchun rahmat,siz sotib olgan kurslar ro'yhati"
        );

        for (item of data) {
          await bot.sendMessage(chatId, `${item.title} - ${item.quantity}x`);
        }
        await bot.sendPhoto(chatId, item.Image)

        await bot.sendMessage(
          chatId,
          `Umumiy Narx - ${data.reduce((a, c) => a + c.price * c.quantity, 0).toLocaleString(
            "en-US", {
                style: "currency",
                currency: "USD"
            }
          )}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  });
};

bootstrap();
