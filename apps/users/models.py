from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
# Create your models here.

class UserManager(BaseUserManager):

    def _create_user(self, username, email, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            username = username,
            email = email,
            password = password,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields 
        )
        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_user(self, username, email, password=None, **extra_fields ):
        return self._create_user(
            username = username,
            email = self.normalize_email(email),
            password = password,
            is_staff= False,
            is_superuser = False,
            **extra_fields

        )
    
    def create_superuser(self, username, email, password=None, **extra_fields):
        return self._create_user(
            username = username,
            email = self.normalize_email(email),
            password = password,
            is_superuser= True,
            is_staff = True,
            **extra_fields
        )
    


class User(AbstractUser):
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['id']

        username = models.CharField(max_length = 255,
                                     unique= True,
                                     verbose_name= 'Nombre usuario')
        email = models.EmailField(unique=True,
                                  verbose_name= 'Correo electronico')
        password = models.CharField(mas_length = 100,
                                    verbose_name = 'Contraseña')
        is_active = models = models.BooleanField(default = True,
                                                 verbose_name = 'Activo')
        is_staff = models.BooleanField(default = False,
                                              verbose_name = 'Staff')
        is_premium = models.BooleanField(default = False,
                                         verbose_name = 'Premium')
        date_joined = models.DateTimeField(auto_now_add=True, 
                                           verbose_name='Fecha de creación')
        last_login = models.DateTimeField(auto_now_add=True,
                                          verbose_name='Último inicio de sesión')
        objects = UserManager() 
        

