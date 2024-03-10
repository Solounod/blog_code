from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import CategoryBlog, Blog
from .serializers import CategoryBlogSerializer, BlogSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.
class CategoryBlogList(ListAPIView):
    queryset = CategoryBlog.objects.all()
    serializer_class = CategoryBlogSerializer

class BlogListOfCategory(ListAPIView):
    serializer_class = BlogSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        category = self.kwargs['list_blogs']
        list_blogs = Blog.objects_blog.filter(category__slug_category=category)
        return list_blogs
    

class BlogList(ListAPIView):
    queryset = Blog.objects_blog.all()
    serializer_class = BlogSerializer

class BlogPostDetail(RetrieveAPIView):
    serializer_class = BlogSerializer
    lookup_field = 'slug'
    queryset = Blog.objects_blog.filter()
    