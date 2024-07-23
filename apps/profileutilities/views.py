from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView
from .models import SavePostUser
from .serializers import SavePostUserSerializer
from apps.blog.models import Blog

# Create your views here.

class SavePostUserViews(ListAPIView):
    """Listener posts saving for user"""
    permission_classes = [IsAuthenticated]
    serializer_class = SavePostUserSerializer

    def get_queryset(self):
        user = self.request.user
        return SavePostUser.objects.filter(user=user)
    
class SavePostUserRetrieveUpdate(RetrieveUpdateAPIView):
    """Save post for user"""
    permission_classes = [IsAuthenticated]
    serializer_class = SavePostUserSerializer

    def get_object(self):
        user = self.request.user
        post_id = self.kwargs['post_id']
        post = Blog.objects_blog.get(id=post_id)
        if not SavePostUser.objects.filter(user=user, post_id=post_id):
            postsaved, created = SavePostUser.objects.get_or_create(user=user, post=post)
            return postsaved
        else:
            return JsonResponse(({'message': 'the post exist'}))
        


class SavePostUserRetrieveDelete(RetrieveDestroyAPIView):
    """Delete post save for user"""
    permission_classes = [IsAuthenticated]
    serializer_class = SavePostUserSerializer
    
    def get_queryset(self):
        user = self.request.user
        return SavePostUser.objects.filter(user=user)






