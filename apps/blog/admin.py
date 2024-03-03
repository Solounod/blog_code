from django.contrib import admin
from .models import CategoryBlog, Blog

# Register your models here.
admin.site.register(CategoryBlog)
admin.site.register(Blog)