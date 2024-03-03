# Generated by Django 4.0 on 2024-03-02 23:40

import ckeditor.fields
import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.manager
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryBlog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_blog', models.CharField(max_length=100, verbose_name='Categoria de blog')),
                ('slug_category', models.SlugField(blank=True, max_length=100, unique=True, verbose_name='Slug')),
                ('datetime_creation', models.DateTimeField(auto_now=True, verbose_name='Fecha creación')),
                ('update_datetime', models.DateTimeField(auto_now_add=True, verbose_name='Fecha modificación')),
            ],
            options={
                'verbose_name': 'Categoria de blog',
                'verbose_name_plural': 'Categorias de blog',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', ckeditor.fields.RichTextField(max_length=200, verbose_name='Titulo')),
                ('slug', models.SlugField(max_length=200, unique=True, verbose_name='Slug')),
                ('authors', models.TextField(max_length=100, verbose_name='Autor')),
                ('date_publisher', models.DateTimeField(default=django.utils.timezone.now)),
                ('header', ckeditor.fields.RichTextField(verbose_name='Encabezado')),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Descripción')),
                ('image', models.ImageField(blank=True, null=True, upload_to='blog', verbose_name='Imagen')),
                ('datetime_creation', models.DateTimeField(auto_now=True, verbose_name='Fecha creación')),
                ('update_datetime', models.DateTimeField(auto_now_add=True, verbose_name='Fecha modificación')),
                ('category', models.ManyToManyField(to='blog.CategoryBlog', verbose_name='Categoria')),
            ],
            options={
                'verbose_name': 'Blog',
                'verbose_name_plural': 'Blogs',
                'ordering': ['id'],
            },
            managers=[
                ('objects_blog', django.db.models.manager.Manager()),
            ],
        ),
    ]
