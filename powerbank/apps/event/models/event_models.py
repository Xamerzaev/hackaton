from django.contrib.gis.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Event(models.Model):
    name = models.CharField(max_length=256)
    type = models.CharField(max_length=128)
    description = models.TextField()
    start = models.DateTimeField()
    location = models.PointField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='event_images')
    reviews = models.OneToOneField
    craeted_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    description = models.TextField()
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        default=1  # You can set a default value if needed
    )
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)


class Recommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ManyToManyField(Event)