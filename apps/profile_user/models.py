from django.db import models
from django.conf import settings
from apps.blog.models import Blog

# Create your models here.

class ProfileUser(models.Model):
    class Meta:
        verbose_name = 'Perfil'
        verbose_name_plural = 'Perfiles'
        ordering = ['id']

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
    
    def __str__(self):
        return f"{self.id}-{self.user}"
