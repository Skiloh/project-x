from django.db import models

# Create your models here.
class admins(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

class property_table(models.Model):
    """Model definition for property_table.
    """
    property_id = models.AutoField(primary_key=True)
    property_name = models.CharField(max_length=100)
    property_adress = models.CharField(max_length=100)
    propert_type = models.CharField(max_length=100)
    property_bathrooms = models.IntegerField()
    property_square_feet = models.FloatField()
    property_description = models.TextField()
    property_buying_price = models.FloatField()
    property_renting_price = models.FloatField()
    property_hoafees = models.FloatField()
    property_availability = models.BooleanField()
    property_lastupdatedate = models.DateField() 

class property_agent_table(models.Model):
    """Model defination of agent details
    """
    agent_id = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    agent_name = models.CharField(max_length=100)
    agent_email = models.EmailField()
    agent_number = models.IntegerField()

class property_amenity_table(models.Model):
    """Model defination of property amenities
    """
    amenity_id = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    amenity_description = models.TextField()

class property_location_table(models.Model):
    """model defination of location details
    """
    location_id = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    neighborhood = models.CharField(max_length=100)
    nearbyamenities = models.TextField()
    distancetocitycenter = models.FloatField()
    publictransport = models.CharField(max_length=100)

class property_additional_info_table(models.Model):
    """model defination of the additional information of the properties table
    """
    additional_info_table = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    additional_info = models.TextField()

class property_features_table(models.Model):
    """model defination of the features table
    """
    feature_id = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    feature_description = models.TextField()

class property_media_table(models.Model):
    """model defination of the media table
    """
    media_id = models.AutoField(primary_key=True)
    property_id = models.ForeignKey(property_table, on_delete=models.CASCADE)
    media_type = models.CharField(max_length=100)
    media_url = models.URLField()



    def __str__(self):
        return self.property_name