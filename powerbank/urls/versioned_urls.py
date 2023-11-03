from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import SimpleRouter

from powerbank.apps.accounts.views import ProfileViewSet
from powerbank.apps.event.views.event_views import LocationListCreateView

router = SimpleRouter()
router.register("profile", ProfileViewSet, basename="profile")
router.register("", LocationListCreateView, basename="location")

versioned_urls = [path("", include(router.urls))]


if settings.DEBUG:
    router += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)