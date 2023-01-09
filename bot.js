const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('5885597437:AAEUDmDQTnhRC3Jsn6WFeylS4EOaUxa6-Uo');


bot.command('start', (ctx) => {
    console.log('Ползьватель запустил бот');
    ctx.reply(`Забонро интихоб намоед/ Выберите язык`, {
        reply_markup: Markup.keyboard([['Точики','Русский'],['English']])
    });
})

bot.on('message', (ctx) => {
    ctx.reply('Zur')
})

bot.launch();

console.log('Bot works')