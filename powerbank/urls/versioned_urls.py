from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import SimpleRouter

from powerbank.apps.accounts.views import ProfileViewSet

router = SimpleRouter()
router.register("profile", ProfileViewSet, basename="profile")

versioned_urls = [path("", include(router.urls))]

urlpatterns = versioned_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
