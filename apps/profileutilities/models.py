from django.db import models
from django.utils import timezone
from django.conf import settings
from apps.blog.models import Blog

# Create your models here.


class CommentPost(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    post = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE
    )
    content = models.TextField()
    date_publisher = models.DateTimeField(
        default=timezone.now)

class SavePostUser(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
    post = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE)