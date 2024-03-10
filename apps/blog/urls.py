from django.urls import path
from .views import CategoryBlogList, BlogListOfCategory, BlogList, BlogPostDetail

urlpatterns = [
    path('category-blog/',
         CategoryBlogList.as_view(),
         name='category_blog_list'),
    path('category-blog/<str:list_blogs>/',
         BlogListOfCategory.as_view(),
         name='blog_list'),
    path('blog-post/',
         BlogList.as_view(),
         name='blog_post'),
    path('blog-post/<slug>/',
         BlogPostDetail.as_view(),
         name='detail_post'), 
]