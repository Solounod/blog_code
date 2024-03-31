from django.urls import path
from .views import ProfileUserViews, ProfileUserUpdate

urlpatterns = [
    path('profile/<str:user>/',
         ProfileUserViews.as_view(),
         name='user_profile'),
    path('profile/update/<str:user>/',
         ProfileUserUpdate.as_view(),
         name='user_profile_update')
]
