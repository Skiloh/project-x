from django.db import models

# Create your models here.

class property_details(models.Model):
    property_id = models.AutoField(primary_key=True)
    property_name = models.CharField(max_length=100)
    property_type = models.CharField(max_length=100)
    property_price = models.FloatField()
    property_area = models.FloatField()
    property_location = models.CharField(max_length=100)
    property_description = models.TextField()
    property_image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.property_name