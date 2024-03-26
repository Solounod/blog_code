from rest_framework import serializers
from .models import Blog, CategoryBlog

class CategoryBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryBlog
        fields = [
            'id',
            'category_blog',
            'slug_category',
        ]

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model= Blog
        fields = [
            'id',
            'category',
            'title',
            'slug',
            'authors',
            'date_publisher',
            'header',
            'description',
            'image',
            'objects_blog',
        ]



