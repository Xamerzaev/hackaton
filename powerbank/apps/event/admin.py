from django.contrib import admin


from powerbank.apps.event.models import event_models

admin.site.register(event_models.Event)
admin.site.register(event_models.Review)
admin.site.register(event_models.Participation)
