from django.urls import path, re_path

from . import views

app_name = 'myinfoablr'

urlpatterns = [
    path('test', views.test, name='test'),
]
