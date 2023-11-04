from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import ugettext_lazy as _

from powerbank.apps.accounts.models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (_("Login info"), {"fields": ("email", "password")}),
        (_("Personal info"), {"fields": ("username",)}),
        (_("Profile info"), {"fields": ("profile_pic", "account_type")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2", "username"),
            },
        ),
    )
    list_filter = ("groups",)
    list_display = ("email", "username")
    search_fields = ("email", "username")
    ordering = ("email",)
