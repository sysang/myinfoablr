from django.urls import path, re_path

from . import views

app_name = 'myinfoablr'

urlpatterns = [
    path('get_authorise_url', views.get_authorise_url, name='get_authorise_url'),
    path('login', views.login, name='login'),
]
