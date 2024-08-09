from django.urls import path
from .views import LinkSocialList, ContactMailAPI

urlpatterns = [
    path('contact-email',
         ContactMailAPI.as_view(),
         name='contact_email'),
    path('link-social/', 
         LinkSocialList.as_view())
]