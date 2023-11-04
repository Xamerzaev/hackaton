from allauth.account.models import EmailAddress
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from powerbank.apps.event.models.event_models import Event


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The given email should be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        if user.is_superuser:
            EmailAddress.objects.create(
                user=user, email=email, primary=True, verified=True
            )

        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise Exception("Superuser must have is_staff set at true")

        if extra_fields.get("is_superuser") is not True:
            raise Exception("Superuser must have is_superuser set at true")

        return self._create_user(email, password, **extra_fields)


def user_directory_path(instance, filename):
    return f"users/{instance.id}/{filename}"


class AccountType(models.TextChoices):
    # Just here so that it can be extended easily later
    GENERAL = "general", _("General")
    STAFF = "staff", _("Staff")


class User(AbstractUser):
    username = models.CharField(max_length=50, blank=True)
    email = models.EmailField(unique=True)
    profile_pic = models.ImageField(
        upload_to=user_directory_path,
        name="profile_pic",
        blank=True,
        null=True,
    )
    account_type = models.CharField(
        choices=AccountType.choices, default=AccountType.GENERAL, max_length=8
    )
    image = models.ImageField(upload_to='user_images/', blank=True)
    history_event = models.ManyToManyField(Event, related_name='history_users')
    favorite_event = models.ManyToManyField(Event, related_name='favorite_users')
    phone_number = models.CharField(max_length=20, help_text='Введите свой номер телефона')
    fisrt_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self) -> str:
        return self.email
