from django.urls import path
from .views import CategoryBlogList, BlogList

urlpatterns = [
    path('category-blog/',
         CategoryBlogList.as_view(),
         name='category_blog_list'),
    path('category-blog/<str:list_blogs>/',
         BlogList.as_view(),
         name='blog_list'),
]