from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import property_table
from .serializer import *

class property_details_view(viewsets.ModelViewSet):
    queryset = property_table.objects.all()
    serializer_class = PropertySerializer