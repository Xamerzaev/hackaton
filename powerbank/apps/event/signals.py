from django.db.models.signals import post_save
from django.dispatch import receiver
from models.event_models import Event # Импортируйте модель, к которой хотите привязать сигнал
from tg_bot import send_message

@receiver(post_save, sender=Event)  # Замените YourModel на модель, к которой вы хотите привязать сигнал
def send_telegram_message(sender, instance, created, **kwargs):
    """
    Функция, которая будет вызываться при каждом сохранении объекта модели.
    """
    if created:
          # Замените на реальный идентификатор чата
        message_text = f'Новый объект был создан в модели'
        send_message(text=message_text)
