from rest_framework import serializers
from powerbank.apps.event.models.event_models import (
    Event,
    Review,
    Participation,
    Organization)


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['id', 'name', 'description',
                  'image', 'creation_date', 'contact_email',
                  'contact_phone', 'address', 'responsible_person']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'event_type',
                  'description', 'start', 'owner',
                  'image', 'created_at', 'updated_at']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'description', 'rating', 'owner', 'event']


class ParticipationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participation
        fields = ['id', 'user', 'event', 'status']
