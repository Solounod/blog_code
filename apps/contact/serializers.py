from rest_framework import serializers
from .models import ContactMail, LinkSocial

class ContactMailSerializers(serializers.ModelSerializer):
    class Meta:
        model = ContactMail
        fields = '__all__'

class LinkSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkSocial
        fields = '__all__'


