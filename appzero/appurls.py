from django.urls import path
from appzero.views import *

urlpatterns = [
    path('' , index),
    path('N2' , N2),
    path('N3' , N3)
]
