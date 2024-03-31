from django.urls import path
from .views import SavePostUserViews, SavePostUserRetrieveUpdate, SavePostUserRetrieveDelete

urlpatterns = [
    path('savepostuser/<str:user>/',
         SavePostUserViews.as_view(),
         name='savepostuser'),
    path('savepostuser/retrieveupdate/<int:post_id>/',
         SavePostUserRetrieveUpdate.as_view(),
         name='postsave_user'),
    path('savepostuser/delete/<int:pk>/',
         SavePostUserRetrieveDelete.as_view(),
         name='postsave_delete')
]
