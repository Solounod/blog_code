# Generated by Django 4.0 on 2024-08-09 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Nombre')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone', models.CharField(blank=True, max_length=50, verbose_name='Telefono')),
                ('subject', models.CharField(max_length=200, verbose_name='Asunto')),
                ('message', models.TextField(blank=True, verbose_name='Mensaje')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='Fecha')),
            ],
            options={
                'ordering': ['-create_date'],
            },
        ),
        migrations.CreateModel(
            name='LinkSocial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Red social')),
                ('url', models.URLField(verbose_name='Enlace')),
                ('img', models.ImageField(upload_to='media/contact/', verbose_name='Icono link')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')),
            ],
            options={
                'verbose_name': 'Enlace',
                'verbose_name_plural': 'enlaces',
                'ordering': ['name'],
            },
        ),
    ]
