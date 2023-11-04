import logging
import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.contrib.middlewares.logging import LoggingMiddleware


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

async def send_event_notifications():
    while True:
        # Здесь вы можете проверять вашу модель данных на наличие новых мероприятий
        # Если есть новые мероприятия, отправляйте уведомления подписанным пользователям
        for user_id in subscribed_users:
            await bot.send_message(user_id, "У нас есть новое мероприятие!")

        # Периодичность отправки уведомлений (например, каждые 24 часа)
        await asyncio.sleep(24 * 60 * 60)

if __name__ == '__main__':
    # Запустим цикл отправки уведомлений
    loop = asyncio.get_event_loop()
    loop.create_task(send_event_notifications())

    # Запустим бота и обработчики
    from aiogram import executor
    executor.start_polling(dp, skip_updates=True)
