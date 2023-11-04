from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import SimpleRouter

from powerbank.apps.accounts.views import ProfileViewSet
from powerbank.apps.event.views.event_views import (
    EventAPIView,
    ReviewAPIView,
    ParticipationAPIView,
    RecommendationViewSet,
    OrganizationViewSet
)

router = SimpleRouter()
router.register("profile", ProfileViewSet, basename="profile")
router.register('events', EventAPIView, basename='event_list')
router.register('review', ReviewAPIView, basename='review_list')
router.register(r'recommendations', RecommendationViewSet, basename='recommendation_list')
router.register('organization', OrganizationViewSet, basename='organization')
router.register('participation', ParticipationAPIView, basename='participation_list')

versioned_urls = [path("", include(router.urls))]

urlpatterns = versioned_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
