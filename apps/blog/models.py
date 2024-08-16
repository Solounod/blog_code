from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from ckeditor.fields import RichTextField
from .managers import BlogManager


# Create your models here.
class CategoryBlog(models.Model):
    class Meta:
        verbose_name = 'Categoria de blog'
        verbose_name_plural = 'Categorias de blog'
        ordering = ['id']

    category_blog = models.CharField(
        max_length=100,
        verbose_name='Categoria de blog')
    slug_category = models.SlugField(
        max_length=100, 
        verbose_name='Slug', 
        unique=True, 
        blank=True)
    datetime_creation = models.DateTimeField(
        auto_now_add=False,
        auto_now=True,
        verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(
        auto_now_add=True,
        auto_now=False,
        verbose_name='Fecha modificación')
    

    def save(self, *args, **kwarg):
        if not self.slug_category:
            self.slug_category = slugify(self.category_blog)
        super().save(*args, **kwarg)    

    def __str__(self):
        return f"{self.id}-{self.category_blog}"
    


class Blog(models.Model):
    class Meta:
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'
        ordering = ['id']

    category = models.ManyToManyField(
        CategoryBlog,
        verbose_name='Categoria')
    title = models.CharField(
        max_length=200,
        verbose_name='Titulo')
    slug = models.SlugField(
        unique=True,
        max_length=200,
        verbose_name='Slug')
    authors = models.TextField(
        max_length=100,
        verbose_name='Autor')
    date_publisher = models.DateField(
        auto_now_add=False,
        auto_now=True, 
        verbose_name='Fecha creacion')
    header = models.TextField(
        verbose_name='Encabezado')
    description = RichTextUploadingField(
        verbose_name='Descripción')
    image = models.ImageField(
        upload_to='blog',
        null=True, blank=True,
        verbose_name='Imagen')
    objects_blog = BlogManager() 
    datetime_creation = models.DateTimeField(
        auto_now_add=False,
        auto_now=True,
        verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(
        auto_now_add=True,
        auto_now=False,
        verbose_name='Fecha modificación')
    
    def save(self, *args, **kwarg):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwarg)    

    def __str__(self):
        return f'{self.title} - {self.category}'