from django.contrib import admin
from .models import CommentPost, SavePostUser

# Register your models here.
admin.site.register(CommentPost)
admin.site.register(SavePostUser)