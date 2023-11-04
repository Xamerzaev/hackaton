from aiogram import Bot, Dispatcher, types



bot = Bot(token='6817032082:AAEdkyui-cgReIJzrzYhg0gaETApuskdfIg')
dp = Dispatcher(bot)

subscribed_users = set()

@dp.message_handler(commands=['start'])
async def on_start(message: types.Message):
    user_id = message.from_user.id
    if user_id not in subscribed_users:
        subscribed_users.add(user_id)
        await message.answer("Вы подписались на рассылку о новых мероприятиях.")
    else:
        await message.answer("Вы уже подписаны на рассылку.")

async def send_message(message: types.Message, text):
    await bot.send_message(chat_id=message.chat.id, text=text)

if __name__ == '__main__':
    from aiogram import executor
    from powerbank.apps.event import signals
    # Запустим цикл отправки уведомлений
    executor.start_polling(dp, skip_updates=True)