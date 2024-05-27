from django.contrib import admin
from .models import property_table, property_agent_table, property_amenity_table, property_location_table, property_additional_info_table, property_features_table, property_media_table
# Register your models here.
admin.site.register(property_table)
admin.site.register(property_agent_table)
admin.site.register(property_amenity_table)
admin.site.register(property_location_table)
admin.site.register(property_additional_info_table)
admin.site.register(property_features_table)
admin.site.register(property_media_table)