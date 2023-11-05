from django.shortcuts import get_object_or_404
from django.conf import settings

from rest_framework.response import Response
from rest_framework import viewsets

from powerbank.apps.event.models.event_models import (Event,
                                                      Review,
                                                      Participation,
                                                      Organization)
from powerbank.apps.event.serializers.event_serializers import (EventSerializer,
                                                                ReviewSerializer,
                                                                ParticipationSerializer,
                                                                OrganizationSerializer)

from powerbank.apps.event.permission import IsParticipant

User = settings.AUTH_USER_MODEL


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [IsParticipant]


class EventAPIView(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class ReviewAPIView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ParticipationAPIView(viewsets.ModelViewSet):
    queryset = Participation.objects.all()
    serializer_class = ParticipationSerializer


class RecommendationViewSet(viewsets.ViewSet):
    def list(self, request, user_id):
        user = get_object_or_404(User, id=user_id)

        user_participations = Participation.objects.filter(user=user)

        user_event_types = user_participations.values_list(
            'event__event_type', flat=True)

        similar_users = User.objects.filter(
            history_event__event_type__in=user_event_types)

        recommended_events = Event.objects.filter(
            participation__user__in=similar_users).exclude(participation__user=user)

        serializer = EventSerializer(recommended_events, many=True)
        return Response(serializer.data)
