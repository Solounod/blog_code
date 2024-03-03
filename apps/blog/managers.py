from django.db import models




class BlogManager(models.Manager):

    def get_shears_blogs(self, keyword):
        return self.filter(
            models.Q(title__icontains=keyword) |
            models.Q(date_publisher__incontains=keyword) |
            models.Q(category__category_blog__incontains=keyword)
        ).order_by('-id')