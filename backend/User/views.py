from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            if request.method == 'POST':
                first_name = request.data.get('first_name')
                last_name = request.data.get('last_name')
                username = request.data.get('username')
                email = request.data.get('email')
                password = request.data.get('password')
                
                serializer = RegisterSerializer(data=request.data)

                if serializer.is_valid():
                    user = serializer.save()
                    return Response({'message': 'User created sucessfully'}, status=status.HTTP_201_CREATED )
                
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': f'An error occured: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class LoginView(APIView):

    def post(self, request, *args, **kwargs):
        try:
            print(request.data)
            serializer = LoginSerializer(data=request.data)

            if serializer.is_valid():
                user = serializer.validated_data['user']
                # Generate token
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                return Response({
                    'message': 'Login Successfully.',
                    'user_id': user.id,
                    'access_token': access_token
                }, status=status.HTTP_200_OK)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)