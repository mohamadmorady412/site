from django.urls import path , include
from blog.views import *

app_name = 'blog'

urlpatterns = [
    path('' , blog_view , name='blog-home'),
    path('single' , blog_single , name='blog-single')
]