# Generated by Django 4.0 on 2024-08-16 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blog_header_alter_blog_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='date_publisher',
            field=models.DateField(auto_now=True, verbose_name='Fecha creacion'),
        ),
    ]
