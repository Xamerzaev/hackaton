from rest_framework import generics
from powerbank.apps.event.models.event_models import Location
from powerbank.apps.event.serializers.event_serializers import LocationSerializer

class LocationListCreateView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer