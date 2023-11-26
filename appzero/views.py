from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request , 'website/index.html')

def N2(request):
    return render(request , 'order/page.html')

def N3(request):
    return render(request , 'homesite/homer.html')