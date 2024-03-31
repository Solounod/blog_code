from rest_framework import serializers
from .models import ProfileUser

class ProfileUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileUser
        fields = [
            'user',
            'first_name',
            'last_name',
            'avatar'

        ]