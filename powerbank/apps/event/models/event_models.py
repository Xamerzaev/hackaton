from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Organization(models.Model):
    name = models.CharField("Название", max_length=255)
    description = models.TextField(verbose_name="Описание")
    image = models.ImageField("Фото", upload_to='organization_images')
    creation_date = models.DateField("Дата создания", auto_now_add=True)
    contact_email = models.EmailField("Контактный email")
    contact_phone = models.CharField("Контактный телефон", max_length=15)
    address = models.TextField("Адрес", )
    responsible_person = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, verbose_name="Владелец организации")

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'Организация'
        verbose_name_plural = 'Организации'

class Event(models.Model):
    name = models.CharField("Название", max_length=256)
    event_type = models.CharField("Тип мероприятия", max_length=128)
    description = models.TextField("Описание")
    start = models.DateTimeField("Старт мероприятия")
    owner = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Владелец мероприятия")
    image = models.ImageField("Фото", upload_to='event_images')
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)
    updated_at = models.DateTimeField("Дата обновления", auto_now=True)

    def __str__(self) -> str:
        return self.name


    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'

class Review(models.Model):
    description = models.TextField("")
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        default=1, verbose_name="Оценка")
    owner = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Владелец отзыва")
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name="Мероприятие")


    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'


class Participation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Владелец заявки")
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name="Мероприятие")
    status = models.CharField(max_length=128, verbose_name="Статус")


    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
