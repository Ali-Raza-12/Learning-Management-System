from django.contrib.auth.models import User
from rest_framework import serializers

class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True},
            'confirm_password': {'write_only': True}
        }

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError('Password not match.')
        
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError('Email already exist.')
        
        return data
        

    def create(self, validated_data):
        validated_data.pop('confirm_password', None)

        user = User.objects.create_user(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            username= validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
    
        return user
    

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        try:
            user = User.objects.get(email=data['email'])
        except User.DoesNotExist:
            raise serializers.ValidationError('User not found.Invalid Email address.')
        
        if not user.check_password(data['password']):
            raise serializers.ValidationError('Invalid email and password')
        
        return {'user': user}