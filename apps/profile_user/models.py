from django.db import models
from django.conf import settings
from blog.models import Blog

# Create your models here.

class ProfileUser(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    first_name = models.CharField(
        max_length = 200,
        verbose_name = 'Nombre')
    last_name = models.CharField(
        max_length = 200,
        verbose_name = 'Apellido')
    avatar = models.ImageField(
        upload_to='avatars/',
        null= True,
        blank=True)
    

class SavePostUser(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    post = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE)