from django.shortcuts import render
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from django.conf import settings
from django.core.mail import send_mail, BadHeaderError
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .serializers import ContactMailSerializers, LinkSocialSerializer
from .models import ContactMail, LinkSocial
from rest_framework.permissions import AllowAny


# Create your views here.
class LinkSocialList(ListAPIView):
    serializer_class = LinkSocialSerializer

    def get_queryset(self):
        return LinkSocial.objects.all()
    
#@method_decorator(csrf_exempt, name='dispatch')
#@csrf_exempt
class ContactMailAPI(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        serializer = ContactMailSerializers(data=request.data)  

        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            subject = serializer.validated_data['subject']
            message = f"Correo electronico de {name} con remitente {email}\n\n Telefono: {phone}\n\n Mensaje: {serializer.validated_data['message']}"
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ["ra.ignacio.j1@gmail.com"] #email test

            try:
                send_mail(subject, message, email_from, recipient_list)
                ContactMail.objects.create(
                    name=name, 
                    email=email,
                    phone=phone,
                    subject=subject,
                    message=message
                    )
                return Response({'msg': 'Correo electrónico enviado correctamente'}, status=200)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)







