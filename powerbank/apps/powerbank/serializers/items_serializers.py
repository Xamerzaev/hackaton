from rest_framework import serializers

from powerbank.apps.powerbank.models import Item


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"
        read_only_fields = ("id",)
