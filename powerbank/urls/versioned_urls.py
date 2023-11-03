from django.urls import include, path
from rest_framework.routers import SimpleRouter

from powerbank.apps.accounts.views import ProfileViewSet


router = SimpleRouter()
router.register("profile", ProfileViewSet, basename="profile")

versioned_urls = [path("", include(router.urls))]
