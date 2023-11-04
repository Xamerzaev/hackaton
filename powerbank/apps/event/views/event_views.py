from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

from powerbank.apps.event.models.event_models import Event, Review, Recommendation, Participation
from powerbank.apps.event.serializers.event_serializers import EventSerializer, ReviewSerializer, RecommendationSerializer, ParticipationSerializer

class EventAPIView(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ReviewAPIView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class RecommendationAPIView(viewsets.ModelViewSet):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer

class ParticipationAPIView(viewsets.ModelViewSet):
    queryset = Participation.objects.all()
    serializer_class = ParticipationSerializer