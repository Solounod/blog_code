from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, UpdateAPIView
from .models import ProfileUser
from .serializers import ProfileUserSerializer

# Create your views here.
class ProfileUserViews(ListAPIView):
    permission_classes =[IsAuthenticated]
    serializer_class = ProfileUserSerializer

    
    def get_queryset(self):
        user = self.request.user
        return  ProfileUser.objects.filter(user=user)
    
class ProfileUserUpdate(UpdateAPIView):
    permission_classes =[IsAuthenticated]
    serializer_class = ProfileUserSerializer
    

    def get_object(self):
        user = self.request.user
        profile, created = ProfileUser.objects.get_or_create(user=user)
        return profile
        

