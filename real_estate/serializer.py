from rest_framework import serializers
from .models import property_table

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = property_table
        fields = '__all__'
