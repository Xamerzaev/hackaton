from django.contrib import admin

from powerbank.apps.powerbank.models import Item


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description")
