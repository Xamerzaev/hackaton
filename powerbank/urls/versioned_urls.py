from django.urls import include, path
from rest_framework.routers import SimpleRouter

from powerbank.apps.accounts.views import ProfileViewSet
from powerbank.apps.powerbank.views import ItemsViewSet

router = SimpleRouter()
router.register("profile", ProfileViewSet, basename="profile")
router.register("items", ItemsViewSet, basename="items")

versioned_urls = [path("", include(router.urls))]
