from rest_framework import serializers
from .models import SavePostUser
from apps.blog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title',
                  'slug']


class SavePostUserSerializer(serializers.ModelSerializer):
    post_details = BlogSerializer(source='post', read_only=True)

    class Meta:
        model = SavePostUser
        fields = [
            'id',
            'user',
            'post',
            'post_details'
        ]

    def get_post_title(self, obj):
        return obj.post.title