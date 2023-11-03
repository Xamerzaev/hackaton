from rest_framework import serializers
from powerbank.apps.event.models.event_models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = {'id', 'name', 'point'}