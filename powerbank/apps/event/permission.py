from rest_framework import permissions

class IsParticipant(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверьте, является ли пользователь участником
        return request.user.role == 'Oraginizer'