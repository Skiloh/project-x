from rest_framework import serializers
from .models import property_details

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = property_details
        fields = '__all__'
