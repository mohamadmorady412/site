from django.urls import path
from mainframe.views import *

app_name = 'blog'

urlpatterns = [
    path('' , main_def , name='main')
]