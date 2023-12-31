# Generated by Django 3.2.8 on 2023-11-04 23:47

from django.db import migrations, models
import django.utils.timezone
import powerbank.apps.accounts.models.user_models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('role', models.CharField(choices=[('Participant', 'participant'), ('Organizer', 'organizer')], default='Participant', max_length=64)),
                ('name', models.CharField(max_length=128)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to=powerbank.apps.accounts.models.user_models.user_directory_path)),
                ('account_type', models.CharField(choices=[('general', 'General'), ('staff', 'Staff')], default='general', max_length=8)),
                ('phone_number', models.CharField(help_text='Введите свой номер телефона', max_length=20)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', powerbank.apps.accounts.models.user_models.UserManager()),
            ],
        ),
    ]
